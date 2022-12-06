"use strict";
exports.__esModule = true;
exports.readFile = void 0;
var fs_1 = require("fs");
var readFile = function (filename) {
    var contents = (0, fs_1.readFileSync)(filename, "utf-8");
    var arr = contents.split(/\r?\n/);
    console.log(arr);
    return arr;
};
exports.readFile = readFile;
