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
  {
    files: ["src/**/*.{ts,tsx}"],
    ignores: ["src/components/primitives/**"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "JSXOpeningElement[name.name=/^(input|select|textarea)$/]",
          message: "Use an app-owned TextField, SelectField or TextAreaField composition. Raw controls belong only in private shadcn primitives.",
        },
      ],
    },
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    ignores: ["src/components/primitives/**", "src/components/ui/**"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["**/primitives/**", "**/primitives", "radix-ui", "@radix-ui/*", "@base-ui/*"],
              message: "Consume complete app-owned compositions from ~/components/ui. Primitives are private implementation details.",
            },
          ],
        },
      ],
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
];

export default eslintConfig;
