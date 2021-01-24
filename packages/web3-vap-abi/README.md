# web3-vap-abi

This is a sub package of [web3.js][repo]

This is the abi package to be used in the `web3-vap` package.
Please read the [documentation][docs] for more.

## Installation

### Node.js

```bash
npm install web3-vap-abi
```

### In the Browser

Build running the following in the [web3.js][repo] repository:

```bash
npm run-script build-all
```

Then include `dist/web3-vap-abi.js` in your html file.
This will expose the `Web3VapAbi` object on the window object.


## Usage

```js
// in node.js
var Web3VapAbi = require('@vapory/web3-vap-abi');

Web3VapAbi.encodeFunctionSignature('myMethod(uint256,string)');
> '0x24ee0097'
```


[docs]: http://web3js.readthedocs.io/en/1.0/
[repo]: https://github.com/vaporyco/web3.js


