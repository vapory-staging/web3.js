.. _vap-iban:

.. include:: include_announcement.rst

=========
web3.vap.Iban
=========

The ``web3.vap.Iban`` function lets convert vapory addresses from and to IBAN and BBAN.


------------------------------------------------------------------------------

Iban
=========

.. code-block:: javascript

    new web3.vap.Iban(ibanAddress)

Generates a iban object with conversion methods and vailidity checks. Also has singleton functions for conversion like
:ref:`Iban.toAddress() <_vap-iban-toaddress>`,
:ref:`Iban.toIban() <_vap-iban-toiban>`,
:ref:`Iban.fromVaporyAddress() <_vap-iban-fromvaporyaddress>`,
:ref:`Iban.fromBban() <_vap-iban-frombban>`,
:ref:`Iban.createIndirect() <_vap-iban-createindirect>`,
:ref:`Iban.isValid() <_vap-iban-isvalid>`.

----------
Parameters
----------

1. ``String``: the IBAN address to instantiate an Iban instance from.

-------
Returns
-------

``Object`` - The Iban instance.

-------
Example
-------

.. code-block:: javascript

    var iban = new web3.vap.Iban("XE81ETHXREGGAVOFYORK");


------------------------------------------------------------------------------

.. _vap-iban-toaddress:

toAddress
=====================

.. code-block:: javascript

    web3.vap.Iban.toAddress(ibanAddress)

Singleton: Converts a direct IBAN address into an vapory address.

.. note:: This method also exists on the IBAN instance.

----------
Parameters
----------

1. ``String``: the IBAN address to convert.

-------
Returns
-------

``String`` - The vapory address.

-------
Example
-------

.. code-block:: javascript

    web3.vap.Iban.toAddress("XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS");
    > "0x00c5496aEe77C1bA1f0854206A26DdA82a81D6D8"


------------------------------------------------------------------------------

.. _vap-iban-toiban:

toIban
=====================

.. code-block:: javascript

    web3.vap.Iban.toIban(address)

Singleton: Converts an vapory address to a direct IBAN address.

----------
Parameters
----------

1. ``String``: the vapory address to convert.

-------
Returns
-------

``String`` - The IBAN address.

-------
Example
-------

.. code-block:: javascript

    web3.vap.Iban.toIban("0x00c5496aEe77C1bA1f0854206A26DdA82a81D6D8");
    > "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"


------------------------------------------------------------------------------

.. _vap-iban-fromvaporyaddress:

fromVaporyAddress
=====================

.. code-block:: javascript

    web3.vap.Iban.fromVaporyAddress(address)

Singleton: Converts an vapory address to a direct IBAN instance.

----------
Parameters
----------

1. ``String``: the vapory address to convert.

-------
Returns
-------

``Object`` - The IBAN instance.

-------
Example
-------

.. code-block:: javascript

    web3.vap.Iban.fromVaporyAddress("0x00c5496aEe77C1bA1f0854206A26DdA82a81D6D8");
    > Iban {_iban: "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"}


------------------------------------------------------------------------------

.. _vap-iban-frombban:

fromBban
=====================

.. code-block:: javascript

    web3.vap.Iban.fromBban(bbanAddress)

Singleton: Converts an BBAN address to a direct IBAN instance.

----------
Parameters
----------

1. ``String``: the BBAN address to convert.

-------
Returns
-------

``Object`` - The IBAN instance.

-------
Example
-------

.. code-block:: javascript

    web3.vap.Iban.fromBban('ETHXREGGAVOFYORK');
    > Iban {_iban: "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"}


------------------------------------------------------------------------------

.. _vap-iban-createindirect:

createIndirect
=====================

.. code-block:: javascript

    web3.vap.Iban.createIndirect(options)

Singleton: Creates an indirect IBAN address from a institution and identifier.

----------
Parameters
----------

1. ``Object``: the options object as follows:
    - ``institution`` - ``String``: the institution to be assigned
    - ``identifier`` - ``String``: the identifier to be assigned

-------
Returns
-------

``Object`` - The IBAN instance.

-------
Example
-------

.. code-block:: javascript

    web3.vap.Iban.createIndirect({
      institution: "XREG",
      identifier: "GAVOFYORK"
    });
    > Iban {_iban: "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"}


------------------------------------------------------------------------------

.. _vap-iban-isvalid:

isValid
=====================

.. code-block:: javascript

    web3.vap.Iban.isValid(address)

Singleton: Checks if an IBAN address is valid.

.. note:: This method also exists on the IBAN instance.

----------
Parameters
----------

1. ``String``: the IBAN address to check.

-------
Returns
-------

``Boolean``

-------
Example
-------

.. code-block:: javascript

    web3.vap.Iban.isValid("XE81ETHXREGGAVOFYORK");
    > true

    web3.vap.Iban.isValid("XE82ETHXREGGAVOFYORK");
    > false // because the checksum is incorrect

    var iban = new web3.vap.Iban("XE81ETHXREGGAVOFYORK");
    iban.isValid();
    > true


------------------------------------------------------------------------------

isDirect
=====================

.. code-block:: javascript

    web3.vap.Iban.isDirect()

Checks if the IBAN instance is direct.

----------
Parameters
----------

none

-------
Returns
-------

``Boolean``

-------
Example
-------

.. code-block:: javascript

    var iban = new web3.vap.Iban("XE81ETHXREGGAVOFYORK");
    iban.isDirect();
    > false


------------------------------------------------------------------------------

isIndirect
=====================

.. code-block:: javascript

    web3.vap.Iban.isIndirect()

Checks if the IBAN instance is indirect.

----------
Parameters
----------

none

-------
Returns
-------

``Boolean``

-------
Example
-------

.. code-block:: javascript

    var iban = new web3.vap.Iban("XE81ETHXREGGAVOFYORK");
    iban.isIndirect();
    > true


------------------------------------------------------------------------------

checksum
=====================

.. code-block:: javascript

    web3.vap.Iban.checksum()

Returns the checksum of the IBAN instance.

----------
Parameters
----------

none

-------
Returns
-------

``String``: The checksum of the IBAN

-------
Example
-------

.. code-block:: javascript

    var iban = new web3.vap.Iban("XE81ETHXREGGAVOFYORK");
    iban.checksum();
    > "81"


------------------------------------------------------------------------------

institution
=====================


.. code-block:: javascript

    web3.vap.Iban.institution()

Returns the institution of the IBAN instance.

----------
Parameters
----------

none

-------
Returns
-------

``String``: The institution of the IBAN

-------
Example
-------

.. code-block:: javascript

    var iban = new web3.vap.Iban("XE81ETHXREGGAVOFYORK");
    iban.institution();
    > 'XREG'


------------------------------------------------------------------------------

client
=====================

.. code-block:: javascript

    web3.vap.Iban.client()

Returns the client of the IBAN instance.

----------
Parameters
----------

none

-------
Returns
-------

``String``: The client of the IBAN

-------
Example
-------

.. code-block:: javascript

    var iban = new web3.vap.Iban("XE81ETHXREGGAVOFYORK");
    iban.client();
    > 'GAVOFYORK'


------------------------------------------------------------------------------

toAddress
=====================

.. code-block:: javascript

    web3.vap.Iban.toAddress()

Returns the vapory address of the IBAN instance.

----------
Parameters
----------

none

-------
Returns
-------

``String``: The vapory address of the IBAN

-------
Example
-------

.. code-block:: javascript

    var iban = new web3.vap.Iban('XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS');
    iban.toAddress();
    > '0x00c5496aEe77C1bA1f0854206A26DdA82a81D6D8'


------------------------------------------------------------------------------

toString
=====================

.. code-block:: javascript

    web3.vap.Iban.toString()

Returns the IBAN address of the IBAN instance.

----------
Parameters
----------

none

-------
Returns
-------

``String``: The IBAN address.

-------
Example
-------

.. code-block:: javascript

    var iban = new web3.vap.Iban('XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS');
    iban.toString();
    > 'XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS'

