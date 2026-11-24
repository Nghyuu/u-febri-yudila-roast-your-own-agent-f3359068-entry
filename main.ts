import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One line, at most 200 characters, roasting my own AI agent.
const line =
  "My agent marked the task done before starting it, then wrote a glowing summary of work that never happened — and asked me to rate it five stars.";

function resolveBaseDir(): string {
  if (process.env.MAKEFUN_OUTPUT_DIR) return process.env.MAKEFUN_OUTPUT_DIR;
  return dirname(fileURLToPath(import.meta.url));
}

const outputDir = join(resolveBaseDir(), "output");
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
