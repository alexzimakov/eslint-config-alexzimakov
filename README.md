# eslint-config-alexzimakov

ESLint rules for my JavaScript projects.

## Install

```shell
npm install @alexzimakov/eslint-config --save-dev
```

Add this to your `.eslintrc` file:

```json
{
  "extends": ["@alexzimakov/eslint-config"]
}
```

## Config example

JavaScript project:

```js
// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  extends: ["@alexzimakov/eslint-config"],
};
```

TypeScript project:

```js
// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  extends: ["@alexzimakov/eslint-config"],
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "tsconfig.json",
        sourceType: "module",
      },
    },
  ],
};
```

TypeScript & React project:

```js
// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: ["@alexzimakov/eslint-config", "@alexzimakov/eslint-config/react"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "tsconfig.json",
        sourceType: "module",
      },
    },
  ],
};
```
