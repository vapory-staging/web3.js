# web3-vap-personal

This is a sub package of [web3.js][repo]

This is the personal package to be used in the `web3-vap` package.
Please read the [documentation][docs] for more.

## Installation

### Node.js

```bash
npm install web3-vap-personal
```

### In the Browser

Build running the following in the [web3.js][repo] repository:

```bash
npm run-script build-all
```

Then include `dist/web3-vap-personal.js` in your html file.
This will expose the `Web3VapPersonal` object on the window object.


## Usage

```js
// in node.js
var Web3VapPersonal = require('@vapory/web3-vap-personal');

var personal = new Web3VapPersonal('ws://localhost:8546');
```


[docs]: http://web3js.readthedocs.io/en/1.0/
[repo]: https://github.com/vaporyco/web3.js


