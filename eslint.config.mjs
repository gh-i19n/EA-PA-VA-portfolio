import javascript from "@eslint/js";
import { globalIgnores } from "eslint/config";
import nextPlugin from "@next/eslint-plugin-next";
import reactHooks from "eslint-plugin-react-hooks";
import typescript from "typescript-eslint";

const eslintConfig = [
  javascript.configs.recommended,
  ...typescript.configs.recommended,
  {
    plugins: { "@next/next": nextPlugin },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  reactHooks.configs.flat.recommended,
  {
    settings: { react: { version: "detect" } },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
];

export default eslintConfig;
