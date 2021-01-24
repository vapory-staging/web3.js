/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @authors:
 *   Fabian Vogelsteller <fabian@vapory.org>
 *   Gav Wood <gav@parity.io>
 *   Jeffrey Wilcke <jeffrey.wilcke@vapory.org>
 *   Marek Kotewicz <marek@parity.io>
 *   Marian Oancea <marian@vapory.org>
 * @date 2017
 */

"use strict";


var version = require('../package.json').version;
var core = require('@vapory/web3-core');
var Vap = require('@vapory/web3-vap');
var Net = require('@vapory/web3-net');
var Personal = require('@vapory/web3-vap-personal');
var Shh = require('@vapory/web3-shh');
var Bzz = require('@vapory/web3-bzz');
var utils = require('@vapory/web3-utils');

var Web3 = function Web3() {
    var _this = this;

    // sets _requestmanager etc
    core.packageInit(this, arguments);

    this.version = version;
    this.utils = utils;

    this.vap = new Vap(this);
    this.shh = new Shh(this);
    this.bzz = new Bzz(this);

    // overwrite package setProvider
    var setProvider = this.setProvider;
    this.setProvider = function (provider, net) {
        setProvider.apply(_this, arguments);

        this.vap.setProvider(provider, net);
        this.shh.setProvider(provider, net);
        this.bzz.setProvider(provider);

        return true;
    };
};

Web3.version = version;
Web3.utils = utils;
Web3.modules = {
    Vap: Vap,
    Net: Net,
    Personal: Personal,
    Shh: Shh,
    Bzz: Bzz
};

core.addProviders(Web3);

module.exports = Web3;

