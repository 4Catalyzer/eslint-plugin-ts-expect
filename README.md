# `eslint-plugin-ts-expect`

Write `dtslint` style comment assertions using eslint.

## Setup

```sh
yarn add -D eslint-plugin-ts-expect
```

Then setup the plugin and rule as you might for any other eslint rule.
In your `.eslintrc.json`:

```json
{
  "plugins": ["ts-expect"],
  "parser": "@typescript-eslint/parser",
  "rules": {
    "ts-expect/expect": "error"
  }
}
```

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
