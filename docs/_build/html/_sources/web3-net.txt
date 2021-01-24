.. _net:

.. include:: include_announcement.rst

========
web3.*.net
========


The ``web3-net`` package allows you to interact with the Vapory nodes network properties.


.. code-block:: javascript

    var Net = require('@vapory/web3-net');

    // "Personal.providers.givenProvider" will be set if in an Vapory supported browser.
    var net = new Net(Net.givenProvider || 'ws://some.local-or-remote.node:8546');


    // or using the web3 umbrella package

    var Web3 = require('@vapory/web3');
    var web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');

    // -> web3.vap.net
    // -> web3.bzz.net
    // -> web3.shh.net



------------------------------------------------------------------------------


.. include:: include_package-net.rst


------------------------------------------------------------------------------
