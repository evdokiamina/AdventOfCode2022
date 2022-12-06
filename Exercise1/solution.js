"use strict";
exports.__esModule = true;
var readTextFile_1 = require("./readTextFile");
var data = (0, readTextFile_1.readFile)("data.txt");
var tempCals = 0;
var listOfMax = [];
data.forEach(function (item, index) {
    if (item === "") {
        listOfMax.push(tempCals);
        tempCals = 0;
    }
    else {
        tempCals = tempCals + Number(item);
    }
});
listOfMax.sort(function (a, b) {
    return a - b;
});
console.log(listOfMax[listOfMax.length - 1] +
    listOfMax[listOfMax.length - 2] +
    listOfMax[listOfMax.length - 3]);
