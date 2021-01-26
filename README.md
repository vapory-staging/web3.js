**PREVIEW RELEASE** This is a beta preview release with breaking changes! The current stable version is 0.20.0 

<img src="https://github.com/vaporyco/web3.js/raw/1.0/web3js.jpg" width=200 />

# web3.js - Vapory JavaScript API

[![Join the chat at https://gitter.im/vapory/web3.js](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vapory/web3.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![npm](https://img.shields.io/npm/dm/web3.svg)](https://www.npmjs.com/package/web3) [![Build Status][travis-image]][travis-url] [![dependency status][dep-image]][dep-url] [![dev dependency status][dep-dev-image]][dep-dev-url] [![Coverage Status][coveralls-image]][coveralls-url] 

This is the Vapory [JavaScript API][docs]
which connects to the [Generic JSON RPC](https://github.com/vaporyco/wiki/wiki/JSON-RPC) spec.


You need to run a local or remote Vapory node to use this library.

Please read the [documentation][docs] for more.

## Installation

### Node

```bash
npm install @vapory/web3
```

### Yarn

```bash
yarn add web3
```

### Meteor

*Note*: works only in the Browser for now. (PR welcome).

```bash
meteor add vapory:web3
```

### In the Browser

Use the prebuild ``dist/web3.min.js``, or
build using the [web3.js][repo] repository:

```bash
npm run-script build
```

Then include `dist/web3.js` in your html file.
This will expose `Web3` on the window object.

## Usage

```js
// in node.js
var Web3 = require('@vapory/web3');

var web3 = new Web3('ws://localhost:8546');
console.log(web3);
> {
    vap: ... ,
    shh: ... ,
    utils: ...,
    ...
}
```

Additionally you can set a provider using `web3.setProvider()` (e.g. WebsocketProvider)

```js
web3.setProvider('ws://localhost:8546');
// or
web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:8546'));
```

There you go, now you can use it:

```js
web3.vap.getAccounts()
.then(console.log);
```

## Documentation

Documentation can be found at [read the docs][docs]


## Building

### Requirements

* [Node.js](https://nodejs.org)
* npm

```bash
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```

### Building (gulp)

Build only the web3.js package

```bash
npm run-script build
```

Or build all sub packages as well

```bash
npm run-script build-all
```

This will put all the browser build files into the `dist` folder.


### Testing (mocha)

```bash
npm test
```

### Contributing

- All contributions have to go into develop, or the 1.0 branch
- Please follow the code style of the other files, we use 4 spaces as tabs.

### Community
 - [Gitter](https://gitter.im/vapory/web3.js?source=orgpage)
 - [Forum](https://forum.vapory.org/categories/vapory-js)


### Similar libraries in other languages
 - Python [Web3.py](https://github.com/pipermerriam/web3.py)
 - Haskell [hs-web3](https://github.com/airalab/hs-web3)		   - Haskell [hs-web3](https://github.com/airalab/hs-web3)
 - Java [web3j](https://github.com/web3j/web3j)		   - Java [web3j](https://github.com/web3j/web3j)
 - Scala [web3j-scala](https://github.com/mslinn/web3j-scala)


[repo]: https://github.com/vaporyco/web3.js
[docs]: http://web3js.readthedocs.io/en/1.0/
[npm-image]: https://badge.fury.io/js/web3.png
[npm-url]: https://npmjs.org/package/@vapory/web3
[travis-image]: https://travis-ci.com/vapory-staging/web3.js.svg
[travis-url]: https://travis-ci.com/vapory-staging/web3.js
[dep-image]: https://david-dm.org/vapory-staging/web3.js.svg
[dep-url]: https://david-dm.org/vapory-staging/web3.js
[dep-dev-image]: https://david-dm.org/vapory-staging/web3.js/dev-status.svg
[dep-dev-url]: https://david-dm.org/vapory-staging/web3.js#info=devDependencies
[coveralls-image]: https://coveralls.io/repos/vapory-staging/web3.js/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/vapory-staging/web3.js?branch=master
