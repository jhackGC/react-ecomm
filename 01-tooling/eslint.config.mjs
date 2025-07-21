/*
 * ESLint changed a lot with version 9. In previous versions they used JSON for configuration which 
 * is no longer supported. You have to do their newer "flat" version of config
 */

import js from "@eslint/js";
import prettier from "eslint-config-prettier";
// globals is a package that is just a big JSON file of what's available in each environment. 
import globals from "globals";


// we want to use module syntax, that's what we are using .mjs extension
// otherwise we would use .cjs extension by default but that would be for CommonJS, and will use require

// This (@type...) is a VS Code / TypeScript trick to be able to do auto-completions on the config object. 
// Super helpful to have the types available right in VS Code. It's not required.
/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended, // use the recommended rules from ESLint's config
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // apply these rules to all JavaScript and TypeScript files
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }, // be aware of browser and node globals, e.g. using "window" or "document" globals in our components
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // enable JSX syntax
        },
      },
    },
  },
  prettier, // use Prettier to format the code, this will disable any ESLint rules that conflict with Prettier
];
