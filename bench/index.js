"use strict";

// NOTE: This benchmark partly compares apples and oranges in that it measures protocol buffers,
// which is purely a binary format, and JSON, which is purely a string format.
//
// This matters because strings aren't actually transfered over the network but must still be
// converted to binary somewhere down the road. Because this can't be measured reliably, this
// benchmark compares both pure string performance of JSON and additional binary conversion of the
// same data using node buffers. Actual JSON performance on the network level should be somewhere
// in between.
// "{\"string\":\"Lorem ipsum dolor sit amet.\", \"uint32\":9000}"//require("./data/bench.json");
var newSuite  = require("./suite"),
    payload   = require("./data/bench.json"); 
    // "{\"key3620\" : \"abcdefghijk3620\",\"key6793\" : \"abcdefghijk6793\",\"key9587\" : \"abcdefghijk9587\",\"key1352\" : \"abcdefghijk1352\",\"key1138\" : \"abcdefghijk1138\", \"key1464\" : \"abcdefghijk1464\",\"key6062\" : \"abcdefghijk6062\",\"key1184\" : \"abcdefghijk1184\",\"key1348\" : \"abcdefghijk1348\", \"key9680\" : \"abcdefghijk9680\",\"key1797\" : \"abcdefghijk1797\",\"key6502\" : \"abcdefghijk6502\",\"key7876\" : \"abcdefghijk7876\",\"key2926\" : \"abcdefghijk2926\",\"key8201\" : \"abcdefghijk8201\",\"key3264\" : \"abcdefghijk3264\",\"key5184\" : \"abcdefghijk5184\",\"key6000\" : \"abcdefghijk6000\",\"key1952\" : \"abcdefghijk1952\",\"key6951\" : \"abcdefghijk6951\",\"key2735\" : \"abcdefghijk2735\",\"key5043\" : \"abcdefghijk5043\",\"key7695\" : \"abcdefghijk7695\",\"key903\" : \"abcdefghijk903\",\"key6889\" : \"abcdefghijk6889\",\"key9436\" : \"abcdefghijk9436\",\"key6859\" : \"abcdefghijk6859\",\"key7164\" : \"abcdefghijk7164\",\"key3190\" : \"abcdefghijk3190\",\"key9834\" : \"abcdefghijk9834\",\"key2258\" : \"abcdefghijk2258\",\"key5269\" : \"abcdefghijk5269\",\"key954\" : \"abcdefghijk954\",\"key4111\" : \"abcdefghijk4111\",\"key6609\" : \"abcdefghijk6609\",\"key1277\" : \"abcdefghijk1277\",\"key2174\" : \"abcdefghijk2174\", \"key1749\" : \"abcdefghijk1749\", \"key5612\" : \"abcdefghijk5612\",\"key7103\" : \"abcdefghijk7103\",\"key7723\" : \"abcdefghijk7723\", \"key8778\" : \"abcdefghijk8778\",\"key514\" : \"abcdefghijk514\",\"key6636\" : \"abcdefghijk6636\",\"key7853\" : \"abcdefghijk7853\",\"key7888\" : \"abcdefghijk7888\",\"key5295\" : \"abcdefghijk5295\",\"key6664\" : \"abcdefghijk6664\",\"key4582\" : \"abcdefghijk4582\", \"key3741\" : \"abcdefghijk3741\",\"key5135\" : \"abcdefghijk5135\",\"key5335\" : \"abcdefghijk5335\",\"key3056\" : \"abcdefghijk3056\", \"key5386\" : \"abcdefghijk5386\",\"key1339\" : \"abcdefghijk1339\", \"key1128\" : \"abcdefghijk1128\",\"key3109\" : \"abcdefghijk3109\", \"key4094\" : \"abcdefghijk4094\",\"key7347\" : \"abcdefghijk7347\", \"key960\" : \"abcdefghijk960\",\"key4366\" : \"abcdefghijk4366\",\"key4945\" : \"abcdefghijk4945\", \"key5075\" : \"abcdefghijk5075\", \"key6912\" : \"abcdefghijk6912\",\"key8283\" : \"abcdefghijk8283\",\"key5936\" : \"abcdefghijk5936\",\"key5326\" : \"abcdefghijk5326\",\"key9918\" : \"abcdefghijk9918\",\"key1714\" : \"abcdefghijk1714\",\"key3259\" : \"abcdefghijk3259\", \"key1783\" : \"abcdefghijk1783\",\"key8749\" : \"abcdefghijk8749\",\"key6863\" : \"abcdefghijk6863\",\"key1932\" : \"abcdefghijk1932\",\"key6204\" : \"abcdefghijk6204\"}";
var Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from || function(value, encoding) { return new Buffer(value, encoding); };

// protobuf.js dynamic: load the proto and set up a buffer
var pbjsCls = require("..").loadSync(require.resolve("./data/bench2.proto")).resolveAll().lookup("Test");
var pbjsMsg = payload; // alt: pbjsCls.fromObject(payload);
var pbjsBuf = pbjsCls.encode(pbjsMsg).finish();

// protobuf.js static: load the proto
var pbjsStaticCls = require("./data/static_pbjs2.js").Test;

// JSON: set up a string and a buffer
var jsonMsg = payload;
var jsonStr = JSON.stringify(jsonMsg);
var jsonBuf = Buffer_from(jsonStr, "utf8");

// google-protobuf: load the proto, set up an Uint8Array and a message
var jspbCls = require("./data/static_jspb2.js").Test;
var jspbBuf = new Uint8Array(Array.prototype.slice.call(pbjsBuf));
var jspbMsg = jspbCls.deserializeBinary(jspbBuf);

newSuite("encoding")

.add("protobuf.js (reflect)", function() {
    pbjsCls.encode(pbjsMsg).finish();
})
.add("protobuf.js (static)", function() {
    pbjsStaticCls.encode(pbjsMsg).finish();
})
.add("JSON (string)", function() {
    JSON.stringify(jsonMsg);
})
.add("JSON (buffer)", function() {
    Buffer_from(JSON.stringify(jsonMsg), "utf8");
})
.add("google-protobuf", function() {
    jspbMsg.serializeBinary();
})
.run();

newSuite("decoding")

.add("protobuf.js (reflect)", function() {
    pbjsCls.decode(pbjsBuf); // no allocation overhead, if you wondered
})
.add("protobuf.js (static)", function() {
    pbjsStaticCls.decode(pbjsBuf);
})
.add("JSON (string)", function() {
    JSON.parse(jsonStr);
})
.add("JSON (buffer)", function() {
    JSON.parse(jsonBuf.toString("utf8"));
})
.add("google-protobuf", function() {
    jspbCls.deserializeBinary(jspbBuf);
})
.run();

newSuite("combined")

.add("protobuf.js (reflect)", function() {
    pbjsCls.decode(pbjsCls.encode(pbjsMsg).finish());
})
.add("protobuf.js (static)", function() {
    pbjsStaticCls.decode(pbjsStaticCls.encode(pbjsMsg).finish());
})
.add("JSON (string)", function() {
    JSON.parse(JSON.stringify(jsonMsg));
})
.add("JSON (buffer)", function() {
    JSON.parse(Buffer_from(JSON.stringify(jsonMsg), "utf8").toString("utf8"));
})
.add("google-protobuf", function() {
    jspbCls.deserializeBinary(jspbMsg.serializeBinary());
})
.run();
