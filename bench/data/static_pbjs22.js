/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("../../minimal");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots.test_bench || ($protobuf.roots.test_bench = {});

$root.Test = (function() {

    /**
     * Properties of a Test.
     * @exports ITest
     * @interface ITest
     * @property {Array.<string>|null} [string] Test string
     */

    /**
     * Constructs a new Test.
     * @exports Test
     * @classdesc Represents a Test.
     * @implements ITest
     * @constructor
     * @param {ITest=} [properties] Properties to set
     */
    function Test(properties) {
        this.string = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Test string.
     * @member {Array.<string>} string
     * @memberof Test
     * @instance
     */
    Test.prototype.string = $util.emptyArray;

    /**
     * Creates a new Test instance using the specified properties.
     * @function create
     * @memberof Test
     * @static
     * @param {ITest=} [properties] Properties to set
     * @returns {Test} Test instance
     */
    Test.create = function create(properties) {
        return new Test(properties);
    };

    /**
     * Encodes the specified Test message. Does not implicitly {@link Test.verify|verify} messages.
     * @function encode
     * @memberof Test
     * @static
     * @param {ITest} message Test message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Test.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.string != null && message.string.length)
            for (var i = 0; i < message.string.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.string[i]);
        return writer;
    };

    /**
     * Encodes the specified Test message, length delimited. Does not implicitly {@link Test.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Test
     * @static
     * @param {ITest} message Test message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Test.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Test message from the specified reader or buffer.
     * @function decode
     * @memberof Test
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Test} Test
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Test.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Test();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.string && message.string.length))
                    message.string = [];
                message.string.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Test message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Test
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Test} Test
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Test.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Test message.
     * @function verify
     * @memberof Test
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Test.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.string != null && message.hasOwnProperty("string")) {
            if (!Array.isArray(message.string))
                return "string: array expected";
            for (var i = 0; i < message.string.length; ++i)
                if (!$util.isString(message.string[i]))
                    return "string: string[] expected";
        }
        return null;
    };

    /**
     * Creates a Test message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Test
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Test} Test
     */
    Test.fromObject = function fromObject(object) {
        if (object instanceof $root.Test)
            return object;
        var message = new $root.Test();
        if (object.string) {
            if (!Array.isArray(object.string))
                throw TypeError(".Test.string: array expected");
            message.string = [];
            for (var i = 0; i < object.string.length; ++i)
                message.string[i] = String(object.string[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a Test message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Test
     * @static
     * @param {Test} message Test
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Test.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.string = [];
        if (message.string && message.string.length) {
            object.string = [];
            for (var j = 0; j < message.string.length; ++j)
                object.string[j] = message.string[j];
        }
        return object;
    };

    /**
     * Converts this Test to JSON.
     * @function toJSON
     * @memberof Test
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Test.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Test;
})();

module.exports = $root;
