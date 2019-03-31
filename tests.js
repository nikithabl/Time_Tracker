"use strict";

var common = require('./common.js');
var assert = require('assert');

assert.strictEqual(common.FormatDuration(-1), "?");
assert.strictEqual(common.FormatDuration(0), "0:00");
assert.strictEqual(common.FormatDuration(59499), "0:59");
assert.strictEqual(common.FormatDuration(60000), "1:00");
assert.strictEqual(common.FormatDuration(3599499), "59:59");
assert.strictEqual(common.FormatDuration(3600000), "1:00");
assert.strictEqual(common.FormatDuration(7199499), "1:59");
assert.strictEqual(common.FormatDuration(7200000), "2:00");

console.log("All tests passed");
