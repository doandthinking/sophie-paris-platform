import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const pitchUrl = process.env.PITCH_URL ?? "http://127.0.0.1:3000/pitch";
const outputDir = path.join(projectRoot, "exports");
const outputPath = path.join(
  outputDir,
  "paris-chinese-local-travel-platform-pitch.pdf",
);

async function canReachPitch() {
  try {
    const response = await fetch(pitchUrl, {
      signal: AbortSignal.timeout(1500),
    });
    return response.ok;
  } catch {
    return false;
  }
}

function startDevServer() {
  const nextBin =
    process.platform === "win32"
      ? path.join(projectRoot, "node_modules", ".bin", "next.cmd")
      : path.join(projectRoot, "node_modules", ".bin", "next");

  const child = spawn(
    nextBin,
    ["dev", "--hostname", "127.0.0.1", "--port", "3000"],
    {
      cwd: projectRoot,
      env: {
        ...process.env,
        NEXT_TELEMETRY_DISABLED: "1",
      },
      stdio: ["ignore", "pipe", "pipe"],
    },
  );

  child.stdout.on("data", (chunk) => process.stdout.write(chunk));
  child.stderr.on("data", (chunk) => process.stderr.write(chunk));
  return child;
}

async function waitForPitch(timeoutMs = 45000) {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    if (await canReachPitch()) {
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 700));
  }

  throw new Error(`Timed out waiting for ${pitchUrl}`);
}

async function exportPdf() {
  await mkdir(outputDir, { recursive: true });

  let devServer = null;
  if (!(await canReachPitch())) {
    console.log(`No server detected at ${pitchUrl}. Starting Next.js dev server...`);
    devServer = startDevServer();
    await waitForPitch();
  }

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1240, height: 1754 } });

  try {
    await page.goto(pitchUrl, { waitUntil: "networkidle" });
    await page.emulateMedia({ media: "print" });
    await page.pdf({
      path: outputPath,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
      },
    });

    console.log(`Pitch PDF exported to: ${outputPath}`);
  } finally {
    await browser.close();

    if (devServer) {
      devServer.kill("SIGTERM");
    }
  }
}

exportPdf().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
