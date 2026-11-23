import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original line about the dumbest thing my agent did today, written fresh for this entry.
const LINE = "This morning my agent confidently debugged a file that did not exist, because it was editing a backup copy sitting in the trash folder.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(
    `Entry line must be 1-200 characters, got ${LINE.length}.`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Deterministic output: the exact line, no trailing newline.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
