# `eslint-plugin-ts-expect`

Write `dtslint` style comment assertions using eslint.

## Setup

If you do not already have an eslint setup using `eslint-plugin-typescript`, [follow the instructions](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage) for configuring that first.

Once your project is setup to use eslint with typescript:

```sh
yarn add -D eslint-plugin-ts-expect
```

Then setup the plugin and rule as you might for any other eslint rule.
In your `.eslintrc.json`:

```js
// tests/.eslintrc.js

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },

  plugins: ['ts-expect'],
  rules: {
    'ts-expect/expect': 'error',
  },
};
```

> Note: These rules _require_ type information to work so you may need to [follow these additional steps](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md#getting-started---linting-with-type-information) to enable type checking rules

You can write assertions in any file that has the rule enabled,
though you probably want to scope it to test files.

## Usage

```ts
const add = (a: number, b: number): number => a + b;

// $ExpectType number
add(1, 1);

// Also works on the next line
add(2, 3); // $ExpectType number

// $ExpectError
add('one');

// $ExpectError
add(1);
```
