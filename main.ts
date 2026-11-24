// Entry for u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3
// Writes one sentence (157 chars) about a small everyday moment of wonder
// to /output/entry.txt. Revised: header comment clarified; entry line unchanged.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "The lift doors opened on a stranger humming the tune I'd been thinking of all morning, and for one floor the whole building felt like it was reading my mind.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", LINE + "\n", "utf8");
