import type { Options } from "tsup";

const config: Options = {
  entry: ["src/index.ts"],
  sourcemap: true,
  format: ["iife", "cjs", "esm"],
  dts: {
    compilerOptions: {
      moduleResolution: "node",
    },
  },
};

export default config;