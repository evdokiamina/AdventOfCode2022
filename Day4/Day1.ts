import { readFile } from "./readTextFile";

const data = readFile("data.txt");

let total = 0;
data.forEach((item) => {
  var ranges = item.split(",");
  const range1start = +ranges[0].split("-")[0];
  const range1end = +ranges[0].split("-")[1];
  const range1Arr = [];
  for (let index = range1start; index <= range1end; index++) {
    range1Arr.push(index);
  }

  const range2start = +ranges[1].split("-")[0];
  const range2end = +ranges[1].split("-")[1];
  const range2Arr = [];
  for (let index = range2start; index <= range2end; index++) {
    range2Arr.push(index);
  }

  // This is the solution for Part 1
  // const containsAll2 = range1Arr.every((element) => {
  //   return range2Arr.includes(element);
  // });
  // const containsAll1 = range2Arr.every((element) => {
  //   return range1Arr.includes(element);
  // });

  // if (containsAll2 || containsAll1) {
  //   total++;
  // }

  // This is the solution for Part 2
  const filteredArray = range1Arr.filter(function (n) {
    return range2Arr.indexOf(n) !== -1;
  });
  if (filteredArray.length > 0) {
    total++;
  }
});

console.log(total);
