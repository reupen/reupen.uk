// @ts-check

import { defineConfig, globalIgnores } from "eslint/config"
import eslint from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import eslintPluginAstro from "eslint-plugin-astro"
import jsxA11y from "eslint-plugin-jsx-a11y"
import tseslint from "typescript-eslint"

export default defineConfig(
  globalIgnores([".astro/", "dist/", "src/env.d.ts"]),
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  eslintPluginAstro.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  eslintConfigPrettier,
)
