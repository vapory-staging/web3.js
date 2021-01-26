# web3-vap

This is a sub package of [web3.js][repo]

This is the Vap package to be used [web3.js][repo].
Please read the [documentation][docs] for more.

## Installation

### Node.js

```bash
npm install web3-vap
```

### In the Browser

Build running the following in the [web3.js][repo] repository:

```bash
npm run-script build-all
```

Then include `dist/web3-vap.js` in your html file.
This will expose the `Web3Vap` object on the window object.


## Usage

```js
// in node.js
var Web3Vap = require('@vapory/web3-vap');

var vap = new Web3Vap('ws://localhost:8546');
```


[docs]: http://web3js.readthedocs.io/en/1.0/
[repo]: https://github.com/vaporyco/web3.js


