"use client";

import { useState } from "react";
import { Copy } from "lucide-react";

export function CopyPhraseButton({ label, phrase }: { label: string; phrase: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(phrase);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-navy/15 bg-white px-4 py-3 text-sm font-semibold text-navy hover:bg-mist"
    >
      <Copy aria-hidden className="h-4 w-4" />
      {copied ? "已复制" : label}
    </button>
  );
}
