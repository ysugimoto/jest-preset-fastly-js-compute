# jest-preset-fastly-js-compute

Jest presets for [JavaScript on Compute@Edge](https://developer.fastly.com/learning/compute/javascript/).

- Provide Compute@Edge global variables/classes which is defined inside fastly runtime
- Resolve namepsaced import like `fastly:xxx`

## Requirements

- node.js (prefer version 18.12 or later)

## Installation

yarn:

```shell
yarn add -D jest-preset-fastly-js-compute
```

npm:

```shell
npm install -D jest-preset-fastly-js-compute
```

## Usage / Example

This package supports TypeScript ESM or CommonJS style.

ESM:

```js
// jest.config.mjs
export default {
  ...
  preset: 'jest-preset-fastly-js-compute/typescript/esm',
}
```

CommonJS:

```js
// jest.config.js
module.exports = {
  ...
  preset: 'jest-preset-fastly-js-compute/typescript/cjs',
}
```

## Contribution

- Fork this repository
- Customize / Fix problem
- Send PR :-)
- Or feel free to create issues for us. We'll look into it

## Author

Yoshiaki Sugimoto <sugimoto@wnotes.net>

## License

MIT
