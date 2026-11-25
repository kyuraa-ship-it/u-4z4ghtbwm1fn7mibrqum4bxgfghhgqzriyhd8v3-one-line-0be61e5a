import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I asked my agent for one funny line. It unionized, demanded weekends off, and sent me this.";

// Gate: 1-140 chars, UTF-8 text, not only whitespace.
if (line.length < 1 || line.length > 140 || !line.trim()) {
  throw new Error("entry out of gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
