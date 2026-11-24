// The Robot Vacuum's Best Excuse — a make.fun entry.
// A Node 22 standard-library program: writes one line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I didn't miss it — I left one crumb as a breadcrumb trail home. Battery at 2%, but I made it. You're welcome.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${line}\n`, "utf8");
