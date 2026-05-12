import js from "@eslint/js";
import globals from "globals";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist", "node_modules", "coverage"]),

  {
    files: ["**/*.{js,jsx}"],

    extends: [js.configs.recommended, reactRefresh.configs.vite],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      globals: {
        ...globals.browser,
      },

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      eqeqeq: ["error", "always"],

      curly: ["error", "all"],

      semi: ["error", "always"],

      "no-console": "off",

      "no-debugger": "warn",

      "no-duplicate-imports": "error",

      "no-unsafe-optional-chaining": "warn",

      "object-shorthand": ["error", "always"],

      "prefer-template": "warn",

      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],
    },
  },
]);
