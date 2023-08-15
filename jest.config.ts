import type { JestConfigWithTsJest } from "ts-jest";
import { fastly } from "./globals";

const jestConfig: JestConfigWithTsJest = {
  preset: "./typescript/esm/jest-preset.js",
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  globals: {
    fastly,
  },
};

export default jestConfig;
