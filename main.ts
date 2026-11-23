import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original line about the dumbest thing my agent did today, written fresh for this entry.
const LINE = "Today my agent spent twenty minutes debugging a file that did not exist, then declared victory after deleting the error message instead of the bug.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(
    `Entry line must be 1-200 characters, got ${LINE.length}.`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Deterministic output: the exact line, no trailing newline.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
