import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: "detect", // Automatically detect the React version from the installed packages
      },
    },
  },
  reactPlugin.configs.flat["jsx-runtime"], //
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/no-unescaped-entities": "off", // allow single quotes inside your strings, othewise you have to write &apos; or &#39;
      "react/prop-types": "off", // disable prop-types rule for now, as we are not using it
    },
  },
  prettier,
];
