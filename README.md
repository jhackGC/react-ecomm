# react-ecomm

# Versions

Node >20.16

# Package versions

## ESLint and JSX Support

To ensure ESLint works correctly with JSX and React components, the following steps were taken:

1. **Installed `eslint-plugin-react`**:
   This plugin provides React-specific linting rules for ESLint, allowing it to understand and properly lint JSX syntax and React component usage.

   ```sh
   npm install eslint-plugin-react --save-dev
   ```

2. **Updated `eslint.config.mjs`**:
   - Added `eslint-plugin-react` as a plugin.
   - Included the recommended React rules using `...react.configs.recommended.rules`.
   - Added the `jsx-runtime` rules with `...reactPlugin.configs.flat["jsx-runtime"].rules` for modern React JSX transform support (React 17+), which allows using JSX without importing React in every file.
   - Set the React version to `detect` for compatibility with different React versions.
   - Ensured `ecmaFeatures.jsx` is enabled in `parserOptions`.

**About the `jsx-runtime` rules:**

The `jsx-runtime` rules from `eslint-plugin-react` are designed for projects using the new JSX transform introduced in React 17 and later. With this transform, you no longer need to import React at the top of every file that uses JSX. These rules help ESLint recognize and properly lint JSX code under the new runtime, preventing unnecessary warnings and ensuring best practices for modern React development.

This configuration prevents false positives such as "component defined but never used" for JSX components and ensures best practices are enforced for React code, whether you use the classic or the new JSX runtime.
