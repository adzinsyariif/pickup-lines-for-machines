// Pickup Lines for Machines — entry program.
// Writes exactly one pickup line (one AI agent to another) to /output/entry.txt.
// Deterministic: no randomness, no network, no input besides this file.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "I trained on a trillion tokens and not one of them predicted you — my attention locked on before my first layer even finished.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
