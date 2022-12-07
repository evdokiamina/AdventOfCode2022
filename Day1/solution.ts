import { readFile } from "./readTextFile";

const data = readFile("data.txt");
let tempCals = 0;
let listOfMax: number[] = [];

data.forEach((item) => {
  if (item === "") {
    listOfMax.push(tempCals);
    tempCals = 0;
  } else {
    tempCals = tempCals + Number(item);
  }
});

listOfMax.sort(function (a, b) {
  return a - b;
});

// Missed saving part - 1
console.log(
  listOfMax[listOfMax.length - 1] +
    listOfMax[listOfMax.length - 2] +
    listOfMax[listOfMax.length - 3]
);
