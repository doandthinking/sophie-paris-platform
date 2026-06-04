import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const baseUrl = process.env.SOPHIE_EXPORT_BASE_URL ?? "http://127.0.0.1:3000";
const outputDir = path.join(projectRoot, "exports");

const documents = [
  {
    url: `${baseUrl}/sophie-plan`,
    outputPath: path.join(outputDir, "sophie平台计划第一次修订.pdf"),
  },
  {
    url: `${baseUrl}/partner-playbook`,
    outputPath: path.join(outputDir, "sophie合伙人机构推广话术手册.pdf"),
  },
  {
    url: `${baseUrl}/sophie-combined`,
    outputPath: path.join(outputDir, "sophie的平台计划第一次修订.pdf"),
  },
];

async function canReach(url) {
  try {
    const response = await fetch(url, {
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

async function waitFor(url, timeoutMs = 45000) {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    if (await canReach(url)) {
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 700));
  }

  throw new Error(`Timed out waiting for ${url}`);
}

async function exportOne(page, document) {
  await page.goto(document.url, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: document.outputPath,
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
  console.log(`Exported PDF: ${document.outputPath}`);
}

async function exportPdfs() {
  await mkdir(outputDir, { recursive: true });

  let devServer = null;
  if (!(await canReach(documents[0].url))) {
    console.log(`No server detected at ${baseUrl}. Starting Next.js dev server...`);
    devServer = startDevServer();
    await waitFor(documents[0].url);
  }

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1240, height: 1754 } });

  try {
    for (const document of documents) {
      await waitFor(document.url);
      await exportOne(page, document);
    }
  } finally {
    await browser.close();

    if (devServer) {
      devServer.kill("SIGTERM");
    }
  }
}

exportPdfs().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
