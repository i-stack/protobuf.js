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
     * @property {string|null} [string] Test string
     * @property {number|null} [uint32] Test uint32
     * @property {Test.IInner|null} [inner] Test inner
     * @property {number|null} [float] Test float
     * @property {number|null} [double] Test double
     * @property {number|null} [age] Test age
     * @property {number|null} [num] Test num
     * @property {number|null} [phone] Test phone
     * @property {number|null} [tax] Test tax
     * @property {number|null} [grade] Test grade
     * @property {number|null} [text] Test text
     * @property {number|null} [count] Test count
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
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Test string.
     * @member {string} string
     * @memberof Test
     * @instance
     */
    Test.prototype.string = "";

    /**
     * Test uint32.
     * @member {number} uint32
     * @memberof Test
     * @instance
     */
    Test.prototype.uint32 = 0;

    /**
     * Test inner.
     * @member {Test.IInner|null|undefined} inner
     * @memberof Test
     * @instance
     */
    Test.prototype.inner = null;

    /**
     * Test float.
     * @member {number} float
     * @memberof Test
     * @instance
     */
    Test.prototype.float = 0;

    /**
     * Test double.
     * @member {number} double
     * @memberof Test
     * @instance
     */
    Test.prototype.double = 0;

    /**
     * Test age.
     * @member {number} age
     * @memberof Test
     * @instance
     */
    Test.prototype.age = 0;

    /**
     * Test num.
     * @member {number} num
     * @memberof Test
     * @instance
     */
    Test.prototype.num = 0;

    /**
     * Test phone.
     * @member {number} phone
     * @memberof Test
     * @instance
     */
    Test.prototype.phone = 0;

    /**
     * Test tax.
     * @member {number} tax
     * @memberof Test
     * @instance
     */
    Test.prototype.tax = 0;

    /**
     * Test grade.
     * @member {number} grade
     * @memberof Test
     * @instance
     */
    Test.prototype.grade = 0;

    /**
     * Test text.
     * @member {number} text
     * @memberof Test
     * @instance
     */
    Test.prototype.text = 0;

    /**
     * Test count.
     * @member {number} count
     * @memberof Test
     * @instance
     */
    Test.prototype.count = 0;

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
        if (message.string != null && Object.hasOwnProperty.call(message, "string"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.string);
        if (message.uint32 != null && Object.hasOwnProperty.call(message, "uint32"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.uint32);
        if (message.inner != null && Object.hasOwnProperty.call(message, "inner"))
            $root.Test.Inner.encode(message.inner, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.float != null && Object.hasOwnProperty.call(message, "float"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.float);
        if (message.double != null && Object.hasOwnProperty.call(message, "double"))
            writer.uint32(/* id 5, wireType 1 =*/41).double(message.double);
        if (message.age != null && Object.hasOwnProperty.call(message, "age"))
            writer.uint32(/* id 6, wireType 1 =*/49).double(message.age);
        if (message.num != null && Object.hasOwnProperty.call(message, "num"))
            writer.uint32(/* id 7, wireType 1 =*/57).double(message.num);
        if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
            writer.uint32(/* id 8, wireType 1 =*/65).double(message.phone);
        if (message.tax != null && Object.hasOwnProperty.call(message, "tax"))
            writer.uint32(/* id 9, wireType 1 =*/73).double(message.tax);
        if (message.grade != null && Object.hasOwnProperty.call(message, "grade"))
            writer.uint32(/* id 10, wireType 1 =*/81).double(message.grade);
        if (message.text != null && Object.hasOwnProperty.call(message, "text"))
            writer.uint32(/* id 11, wireType 1 =*/89).double(message.text);
        if (message.count != null && Object.hasOwnProperty.call(message, "count"))
            writer.uint32(/* id 12, wireType 1 =*/97).double(message.count);
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
                message.string = reader.string();
                break;
            case 2:
                message.uint32 = reader.uint32();
                break;
            case 3:
                message.inner = $root.Test.Inner.decode(reader, reader.uint32());
                break;
            case 4:
                message.float = reader.float();
                break;
            case 5:
                message.double = reader.double();
                break;
            case 6:
                message.age = reader.double();
                break;
            case 7:
                message.num = reader.double();
                break;
            case 8:
                message.phone = reader.double();
                break;
            case 9:
                message.tax = reader.double();
                break;
            case 10:
                message.grade = reader.double();
                break;
            case 11:
                message.text = reader.double();
                break;
            case 12:
                message.count = reader.double();
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
        if (message.string != null && message.hasOwnProperty("string"))
            if (!$util.isString(message.string))
                return "string: string expected";
        if (message.uint32 != null && message.hasOwnProperty("uint32"))
            if (!$util.isInteger(message.uint32))
                return "uint32: integer expected";
        if (message.inner != null && message.hasOwnProperty("inner")) {
            var error = $root.Test.Inner.verify(message.inner);
            if (error)
                return "inner." + error;
        }
        if (message.float != null && message.hasOwnProperty("float"))
            if (typeof message.float !== "number")
                return "float: number expected";
        if (message.double != null && message.hasOwnProperty("double"))
            if (typeof message.double !== "number")
                return "double: number expected";
        if (message.age != null && message.hasOwnProperty("age"))
            if (typeof message.age !== "number")
                return "age: number expected";
        if (message.num != null && message.hasOwnProperty("num"))
            if (typeof message.num !== "number")
                return "num: number expected";
        if (message.phone != null && message.hasOwnProperty("phone"))
            if (typeof message.phone !== "number")
                return "phone: number expected";
        if (message.tax != null && message.hasOwnProperty("tax"))
            if (typeof message.tax !== "number")
                return "tax: number expected";
        if (message.grade != null && message.hasOwnProperty("grade"))
            if (typeof message.grade !== "number")
                return "grade: number expected";
        if (message.text != null && message.hasOwnProperty("text"))
            if (typeof message.text !== "number")
                return "text: number expected";
        if (message.count != null && message.hasOwnProperty("count"))
            if (typeof message.count !== "number")
                return "count: number expected";
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
        if (object.string != null)
            message.string = String(object.string);
        if (object.uint32 != null)
            message.uint32 = object.uint32 >>> 0;
        if (object.inner != null) {
            if (typeof object.inner !== "object")
                throw TypeError(".Test.inner: object expected");
            message.inner = $root.Test.Inner.fromObject(object.inner);
        }
        if (object.float != null)
            message.float = Number(object.float);
        if (object.double != null)
            message.double = Number(object.double);
        if (object.age != null)
            message.age = Number(object.age);
        if (object.num != null)
            message.num = Number(object.num);
        if (object.phone != null)
            message.phone = Number(object.phone);
        if (object.tax != null)
            message.tax = Number(object.tax);
        if (object.grade != null)
            message.grade = Number(object.grade);
        if (object.text != null)
            message.text = Number(object.text);
        if (object.count != null)
            message.count = Number(object.count);
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
        if (options.defaults) {
            object.string = "";
            object.uint32 = 0;
            object.inner = null;
            object.float = 0;
            object.double = 0;
            object.age = 0;
            object.num = 0;
            object.phone = 0;
            object.tax = 0;
            object.grade = 0;
            object.text = 0;
            object.count = 0;
        }
        if (message.string != null && message.hasOwnProperty("string"))
            object.string = message.string;
        if (message.uint32 != null && message.hasOwnProperty("uint32"))
            object.uint32 = message.uint32;
        if (message.inner != null && message.hasOwnProperty("inner"))
            object.inner = $root.Test.Inner.toObject(message.inner, options);
        if (message.float != null && message.hasOwnProperty("float"))
            object.float = options.json && !isFinite(message.float) ? String(message.float) : message.float;
        if (message.double != null && message.hasOwnProperty("double"))
            object.double = options.json && !isFinite(message.double) ? String(message.double) : message.double;
        if (message.age != null && message.hasOwnProperty("age"))
            object.age = options.json && !isFinite(message.age) ? String(message.age) : message.age;
        if (message.num != null && message.hasOwnProperty("num"))
            object.num = options.json && !isFinite(message.num) ? String(message.num) : message.num;
        if (message.phone != null && message.hasOwnProperty("phone"))
            object.phone = options.json && !isFinite(message.phone) ? String(message.phone) : message.phone;
        if (message.tax != null && message.hasOwnProperty("tax"))
            object.tax = options.json && !isFinite(message.tax) ? String(message.tax) : message.tax;
        if (message.grade != null && message.hasOwnProperty("grade"))
            object.grade = options.json && !isFinite(message.grade) ? String(message.grade) : message.grade;
        if (message.text != null && message.hasOwnProperty("text"))
            object.text = options.json && !isFinite(message.text) ? String(message.text) : message.text;
        if (message.count != null && message.hasOwnProperty("count"))
            object.count = options.json && !isFinite(message.count) ? String(message.count) : message.count;
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

    Test.Inner = (function() {

        /**
         * Properties of an Inner.
         * @memberof Test
         * @interface IInner
         * @property {number|null} [int32] Inner int32
         * @property {Test.Inner.IInnerInner|null} [innerInner] Inner innerInner
         * @property {IOuter|null} [outer] Inner outer
         */

        /**
         * Constructs a new Inner.
         * @memberof Test
         * @classdesc Represents an Inner.
         * @implements IInner
         * @constructor
         * @param {Test.IInner=} [properties] Properties to set
         */
        function Inner(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Inner int32.
         * @member {number} int32
         * @memberof Test.Inner
         * @instance
         */
        Inner.prototype.int32 = 0;

        /**
         * Inner innerInner.
         * @member {Test.Inner.IInnerInner|null|undefined} innerInner
         * @memberof Test.Inner
         * @instance
         */
        Inner.prototype.innerInner = null;

        /**
         * Inner outer.
         * @member {IOuter|null|undefined} outer
         * @memberof Test.Inner
         * @instance
         */
        Inner.prototype.outer = null;

        /**
         * Creates a new Inner instance using the specified properties.
         * @function create
         * @memberof Test.Inner
         * @static
         * @param {Test.IInner=} [properties] Properties to set
         * @returns {Test.Inner} Inner instance
         */
        Inner.create = function create(properties) {
            return new Inner(properties);
        };

        /**
         * Encodes the specified Inner message. Does not implicitly {@link Test.Inner.verify|verify} messages.
         * @function encode
         * @memberof Test.Inner
         * @static
         * @param {Test.IInner} message Inner message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Inner.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.int32 != null && Object.hasOwnProperty.call(message, "int32"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.int32);
            if (message.innerInner != null && Object.hasOwnProperty.call(message, "innerInner"))
                $root.Test.Inner.InnerInner.encode(message.innerInner, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.outer != null && Object.hasOwnProperty.call(message, "outer"))
                $root.Outer.encode(message.outer, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Inner message, length delimited. Does not implicitly {@link Test.Inner.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Test.Inner
         * @static
         * @param {Test.IInner} message Inner message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Inner.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Inner message from the specified reader or buffer.
         * @function decode
         * @memberof Test.Inner
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Test.Inner} Inner
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Inner.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Test.Inner();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.int32 = reader.int32();
                    break;
                case 2:
                    message.innerInner = $root.Test.Inner.InnerInner.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.outer = $root.Outer.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Inner message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Test.Inner
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Test.Inner} Inner
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Inner.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Inner message.
         * @function verify
         * @memberof Test.Inner
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Inner.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.int32 != null && message.hasOwnProperty("int32"))
                if (!$util.isInteger(message.int32))
                    return "int32: integer expected";
            if (message.innerInner != null && message.hasOwnProperty("innerInner")) {
                var error = $root.Test.Inner.InnerInner.verify(message.innerInner);
                if (error)
                    return "innerInner." + error;
            }
            if (message.outer != null && message.hasOwnProperty("outer")) {
                var error = $root.Outer.verify(message.outer);
                if (error)
                    return "outer." + error;
            }
            return null;
        };

        /**
         * Creates an Inner message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Test.Inner
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Test.Inner} Inner
         */
        Inner.fromObject = function fromObject(object) {
            if (object instanceof $root.Test.Inner)
                return object;
            var message = new $root.Test.Inner();
            if (object.int32 != null)
                message.int32 = object.int32 | 0;
            if (object.innerInner != null) {
                if (typeof object.innerInner !== "object")
                    throw TypeError(".Test.Inner.innerInner: object expected");
                message.innerInner = $root.Test.Inner.InnerInner.fromObject(object.innerInner);
            }
            if (object.outer != null) {
                if (typeof object.outer !== "object")
                    throw TypeError(".Test.Inner.outer: object expected");
                message.outer = $root.Outer.fromObject(object.outer);
            }
            return message;
        };

        /**
         * Creates a plain object from an Inner message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Test.Inner
         * @static
         * @param {Test.Inner} message Inner
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Inner.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.int32 = 0;
                object.innerInner = null;
                object.outer = null;
            }
            if (message.int32 != null && message.hasOwnProperty("int32"))
                object.int32 = message.int32;
            if (message.innerInner != null && message.hasOwnProperty("innerInner"))
                object.innerInner = $root.Test.Inner.InnerInner.toObject(message.innerInner, options);
            if (message.outer != null && message.hasOwnProperty("outer"))
                object.outer = $root.Outer.toObject(message.outer, options);
            return object;
        };

        /**
         * Converts this Inner to JSON.
         * @function toJSON
         * @memberof Test.Inner
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Inner.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Inner.InnerInner = (function() {

            /**
             * Properties of an InnerInner.
             * @memberof Test.Inner
             * @interface IInnerInner
             * @property {number|Long|null} [long] InnerInner long
             * @property {Test.Enum|null} ["enum"] InnerInner enum
             * @property {number|null} [sint32] InnerInner sint32
             */

            /**
             * Constructs a new InnerInner.
             * @memberof Test.Inner
             * @classdesc Represents an InnerInner.
             * @implements IInnerInner
             * @constructor
             * @param {Test.Inner.IInnerInner=} [properties] Properties to set
             */
            function InnerInner(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * InnerInner long.
             * @member {number|Long} long
             * @memberof Test.Inner.InnerInner
             * @instance
             */
            InnerInner.prototype.long = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * InnerInner enum.
             * @member {Test.Enum} enum
             * @memberof Test.Inner.InnerInner
             * @instance
             */
            InnerInner.prototype["enum"] = 0;

            /**
             * InnerInner sint32.
             * @member {number} sint32
             * @memberof Test.Inner.InnerInner
             * @instance
             */
            InnerInner.prototype.sint32 = 0;

            /**
             * Creates a new InnerInner instance using the specified properties.
             * @function create
             * @memberof Test.Inner.InnerInner
             * @static
             * @param {Test.Inner.IInnerInner=} [properties] Properties to set
             * @returns {Test.Inner.InnerInner} InnerInner instance
             */
            InnerInner.create = function create(properties) {
                return new InnerInner(properties);
            };

            /**
             * Encodes the specified InnerInner message. Does not implicitly {@link Test.Inner.InnerInner.verify|verify} messages.
             * @function encode
             * @memberof Test.Inner.InnerInner
             * @static
             * @param {Test.Inner.IInnerInner} message InnerInner message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InnerInner.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.long != null && Object.hasOwnProperty.call(message, "long"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.long);
                if (message["enum"] != null && Object.hasOwnProperty.call(message, "enum"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message["enum"]);
                if (message.sint32 != null && Object.hasOwnProperty.call(message, "sint32"))
                    writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.sint32);
                return writer;
            };

            /**
             * Encodes the specified InnerInner message, length delimited. Does not implicitly {@link Test.Inner.InnerInner.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Test.Inner.InnerInner
             * @static
             * @param {Test.Inner.IInnerInner} message InnerInner message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InnerInner.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an InnerInner message from the specified reader or buffer.
             * @function decode
             * @memberof Test.Inner.InnerInner
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Test.Inner.InnerInner} InnerInner
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InnerInner.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Test.Inner.InnerInner();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.long = reader.int64();
                        break;
                    case 2:
                        message["enum"] = reader.int32();
                        break;
                    case 3:
                        message.sint32 = reader.sint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an InnerInner message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Test.Inner.InnerInner
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Test.Inner.InnerInner} InnerInner
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InnerInner.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an InnerInner message.
             * @function verify
             * @memberof Test.Inner.InnerInner
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InnerInner.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.long != null && message.hasOwnProperty("long"))
                    if (!$util.isInteger(message.long) && !(message.long && $util.isInteger(message.long.low) && $util.isInteger(message.long.high)))
                        return "long: integer|Long expected";
                if (message["enum"] != null && message.hasOwnProperty("enum"))
                    switch (message["enum"]) {
                    default:
                        return "enum: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
                if (message.sint32 != null && message.hasOwnProperty("sint32"))
                    if (!$util.isInteger(message.sint32))
                        return "sint32: integer expected";
                return null;
            };

            /**
             * Creates an InnerInner message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Test.Inner.InnerInner
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Test.Inner.InnerInner} InnerInner
             */
            InnerInner.fromObject = function fromObject(object) {
                if (object instanceof $root.Test.Inner.InnerInner)
                    return object;
                var message = new $root.Test.Inner.InnerInner();
                if (object.long != null)
                    if ($util.Long)
                        (message.long = $util.Long.fromValue(object.long)).unsigned = false;
                    else if (typeof object.long === "string")
                        message.long = parseInt(object.long, 10);
                    else if (typeof object.long === "number")
                        message.long = object.long;
                    else if (typeof object.long === "object")
                        message.long = new $util.LongBits(object.long.low >>> 0, object.long.high >>> 0).toNumber();
                switch (object["enum"]) {
                case "ONE":
                case 0:
                    message["enum"] = 0;
                    break;
                case "TWO":
                case 1:
                    message["enum"] = 1;
                    break;
                case "THREE":
                case 2:
                    message["enum"] = 2;
                    break;
                case "FOUR":
                case 3:
                    message["enum"] = 3;
                    break;
                case "FIVE":
                case 4:
                    message["enum"] = 4;
                    break;
                }
                if (object.sint32 != null)
                    message.sint32 = object.sint32 | 0;
                return message;
            };

            /**
             * Creates a plain object from an InnerInner message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Test.Inner.InnerInner
             * @static
             * @param {Test.Inner.InnerInner} message InnerInner
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InnerInner.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.long = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.long = options.longs === String ? "0" : 0;
                    object["enum"] = options.enums === String ? "ONE" : 0;
                    object.sint32 = 0;
                }
                if (message.long != null && message.hasOwnProperty("long"))
                    if (typeof message.long === "number")
                        object.long = options.longs === String ? String(message.long) : message.long;
                    else
                        object.long = options.longs === String ? $util.Long.prototype.toString.call(message.long) : options.longs === Number ? new $util.LongBits(message.long.low >>> 0, message.long.high >>> 0).toNumber() : message.long;
                if (message["enum"] != null && message.hasOwnProperty("enum"))
                    object["enum"] = options.enums === String ? $root.Test.Enum[message["enum"]] : message["enum"];
                if (message.sint32 != null && message.hasOwnProperty("sint32"))
                    object.sint32 = message.sint32;
                return object;
            };

            /**
             * Converts this InnerInner to JSON.
             * @function toJSON
             * @memberof Test.Inner.InnerInner
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InnerInner.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return InnerInner;
        })();

        return Inner;
    })();

    /**
     * Enum enum.
     * @name Test.Enum
     * @enum {number}
     * @property {number} ONE=0 ONE value
     * @property {number} TWO=1 TWO value
     * @property {number} THREE=2 THREE value
     * @property {number} FOUR=3 FOUR value
     * @property {number} FIVE=4 FIVE value
     */
    Test.Enum = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ONE"] = 0;
        values[valuesById[1] = "TWO"] = 1;
        values[valuesById[2] = "THREE"] = 2;
        values[valuesById[3] = "FOUR"] = 3;
        values[valuesById[4] = "FIVE"] = 4;
        return values;
    })();

    return Test;
})();

$root.Outer = (function() {

    /**
     * Properties of an Outer.
     * @exports IOuter
     * @interface IOuter
     * @property {Array.<boolean>|null} [bool] Outer bool
     * @property {number|null} [double] Outer double
     * @property {string|null} [email] Outer email
     * @property {string|null} [twitter] Outer twitter
     * @property {string|null} [street] Outer street
     * @property {string|null} [city] Outer city
     * @property {string|null} [state] Outer state
     * @property {string|null} [zip] Outer zip
     * @property {string|null} [phone] Outer phone
     * @property {string|null} [name] Outer name
     */

    /**
     * Constructs a new Outer.
     * @exports Outer
     * @classdesc Represents an Outer.
     * @implements IOuter
     * @constructor
     * @param {IOuter=} [properties] Properties to set
     */
    function Outer(properties) {
        this.bool = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Outer bool.
     * @member {Array.<boolean>} bool
     * @memberof Outer
     * @instance
     */
    Outer.prototype.bool = $util.emptyArray;

    /**
     * Outer double.
     * @member {number} double
     * @memberof Outer
     * @instance
     */
    Outer.prototype.double = 0;

    /**
     * Outer email.
     * @member {string} email
     * @memberof Outer
     * @instance
     */
    Outer.prototype.email = "";

    /**
     * Outer twitter.
     * @member {string} twitter
     * @memberof Outer
     * @instance
     */
    Outer.prototype.twitter = "";

    /**
     * Outer street.
     * @member {string} street
     * @memberof Outer
     * @instance
     */
    Outer.prototype.street = "";

    /**
     * Outer city.
     * @member {string} city
     * @memberof Outer
     * @instance
     */
    Outer.prototype.city = "";

    /**
     * Outer state.
     * @member {string} state
     * @memberof Outer
     * @instance
     */
    Outer.prototype.state = "";

    /**
     * Outer zip.
     * @member {string} zip
     * @memberof Outer
     * @instance
     */
    Outer.prototype.zip = "";

    /**
     * Outer phone.
     * @member {string} phone
     * @memberof Outer
     * @instance
     */
    Outer.prototype.phone = "";

    /**
     * Outer name.
     * @member {string} name
     * @memberof Outer
     * @instance
     */
    Outer.prototype.name = "";

    /**
     * Creates a new Outer instance using the specified properties.
     * @function create
     * @memberof Outer
     * @static
     * @param {IOuter=} [properties] Properties to set
     * @returns {Outer} Outer instance
     */
    Outer.create = function create(properties) {
        return new Outer(properties);
    };

    /**
     * Encodes the specified Outer message. Does not implicitly {@link Outer.verify|verify} messages.
     * @function encode
     * @memberof Outer
     * @static
     * @param {IOuter} message Outer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Outer.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.bool != null && message.bool.length) {
            writer.uint32(/* id 1, wireType 2 =*/10).fork();
            for (var i = 0; i < message.bool.length; ++i)
                writer.bool(message.bool[i]);
            writer.ldelim();
        }
        if (message.double != null && Object.hasOwnProperty.call(message, "double"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.double);
        if (message.email != null && Object.hasOwnProperty.call(message, "email"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
        if (message.twitter != null && Object.hasOwnProperty.call(message, "twitter"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.twitter);
        if (message.street != null && Object.hasOwnProperty.call(message, "street"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.street);
        if (message.city != null && Object.hasOwnProperty.call(message, "city"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.city);
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.state);
        if (message.zip != null && Object.hasOwnProperty.call(message, "zip"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.zip);
        if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.phone);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified Outer message, length delimited. Does not implicitly {@link Outer.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Outer
     * @static
     * @param {IOuter} message Outer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Outer.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Outer message from the specified reader or buffer.
     * @function decode
     * @memberof Outer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Outer} Outer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Outer.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Outer();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.bool && message.bool.length))
                    message.bool = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.bool.push(reader.bool());
                } else
                    message.bool.push(reader.bool());
                break;
            case 2:
                message.double = reader.double();
                break;
            case 3:
                message.email = reader.string();
                break;
            case 4:
                message.twitter = reader.string();
                break;
            case 5:
                message.street = reader.string();
                break;
            case 6:
                message.city = reader.string();
                break;
            case 7:
                message.state = reader.string();
                break;
            case 8:
                message.zip = reader.string();
                break;
            case 9:
                message.phone = reader.string();
                break;
            case 10:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Outer message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Outer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Outer} Outer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Outer.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Outer message.
     * @function verify
     * @memberof Outer
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Outer.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.bool != null && message.hasOwnProperty("bool")) {
            if (!Array.isArray(message.bool))
                return "bool: array expected";
            for (var i = 0; i < message.bool.length; ++i)
                if (typeof message.bool[i] !== "boolean")
                    return "bool: boolean[] expected";
        }
        if (message.double != null && message.hasOwnProperty("double"))
            if (typeof message.double !== "number")
                return "double: number expected";
        if (message.email != null && message.hasOwnProperty("email"))
            if (!$util.isString(message.email))
                return "email: string expected";
        if (message.twitter != null && message.hasOwnProperty("twitter"))
            if (!$util.isString(message.twitter))
                return "twitter: string expected";
        if (message.street != null && message.hasOwnProperty("street"))
            if (!$util.isString(message.street))
                return "street: string expected";
        if (message.city != null && message.hasOwnProperty("city"))
            if (!$util.isString(message.city))
                return "city: string expected";
        if (message.state != null && message.hasOwnProperty("state"))
            if (!$util.isString(message.state))
                return "state: string expected";
        if (message.zip != null && message.hasOwnProperty("zip"))
            if (!$util.isString(message.zip))
                return "zip: string expected";
        if (message.phone != null && message.hasOwnProperty("phone"))
            if (!$util.isString(message.phone))
                return "phone: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates an Outer message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Outer
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Outer} Outer
     */
    Outer.fromObject = function fromObject(object) {
        if (object instanceof $root.Outer)
            return object;
        var message = new $root.Outer();
        if (object.bool) {
            if (!Array.isArray(object.bool))
                throw TypeError(".Outer.bool: array expected");
            message.bool = [];
            for (var i = 0; i < object.bool.length; ++i)
                message.bool[i] = Boolean(object.bool[i]);
        }
        if (object.double != null)
            message.double = Number(object.double);
        if (object.email != null)
            message.email = String(object.email);
        if (object.twitter != null)
            message.twitter = String(object.twitter);
        if (object.street != null)
            message.street = String(object.street);
        if (object.city != null)
            message.city = String(object.city);
        if (object.state != null)
            message.state = String(object.state);
        if (object.zip != null)
            message.zip = String(object.zip);
        if (object.phone != null)
            message.phone = String(object.phone);
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from an Outer message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Outer
     * @static
     * @param {Outer} message Outer
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Outer.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.bool = [];
        if (options.defaults) {
            object.double = 0;
            object.email = "";
            object.twitter = "";
            object.street = "";
            object.city = "";
            object.state = "";
            object.zip = "";
            object.phone = "";
            object.name = "";
        }
        if (message.bool && message.bool.length) {
            object.bool = [];
            for (var j = 0; j < message.bool.length; ++j)
                object.bool[j] = message.bool[j];
        }
        if (message.double != null && message.hasOwnProperty("double"))
            object.double = options.json && !isFinite(message.double) ? String(message.double) : message.double;
        if (message.email != null && message.hasOwnProperty("email"))
            object.email = message.email;
        if (message.twitter != null && message.hasOwnProperty("twitter"))
            object.twitter = message.twitter;
        if (message.street != null && message.hasOwnProperty("street"))
            object.street = message.street;
        if (message.city != null && message.hasOwnProperty("city"))
            object.city = message.city;
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = message.state;
        if (message.zip != null && message.hasOwnProperty("zip"))
            object.zip = message.zip;
        if (message.phone != null && message.hasOwnProperty("phone"))
            object.phone = message.phone;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this Outer to JSON.
     * @function toJSON
     * @memberof Outer
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Outer.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Outer;
})();

module.exports = $root;
