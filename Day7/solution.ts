import { readFile } from "./readTextFile";

const data = readFile("data.txt");

// Parsing data - mapping directory with it's contents
let arr = {};
let dirLocation = [];
data.forEach((item, index) => {
  if (item.startsWith("$ cd ")) {
    const dir = item.split(" ")[2];
    const dirWithId = `${dir}-${index}`;
    if (dir === "/") {
      arr[dirWithId] = [];

      dirLocation.push(dirWithId);
    } else if (dir === "..") {
      dirLocation.pop();
    } else {
      dirLocation.push(dirWithId);
    }
  }
  if (item.startsWith("dir ")) {
    const dir = item.split(" ")[1];
    const dirWithId = `${dir}-${index}`;
    arr[dirWithId] = [];
  }
  if (!!parseInt(item.split(" ")[0])) {
    dirLocation.forEach((l) => {
      arr[l] = [...(arr[l] ?? []), item];
    });
  }
});

// PART - 1
let totals = {};
let ans = 0;
Object.keys(arr).forEach((a) => {
  const vals = arr[a];
  let t = vals.reduce(
    (partialSum, a) => partialSum + parseInt(a.split(" ")[0]),
    0
  );
  if (t < 100000) {
    ans += t;
  }
  totals[a] = t;
});

// PART - 2
const toDelete = {};
const usedSpace = totals[Object.keys(totals)[0]];
const unusedSpace = 70000000 - usedSpace;
if (unusedSpace < 30000000) {
  const minAmountToFree = 30000000 - unusedSpace;
  Object.keys(totals).forEach((k) => {
    if (totals[k] >= minAmountToFree) {
      toDelete[k] = totals[k];
    }
  });
}

let sortable = [];
for (var vehicle in toDelete) {
  sortable.push([vehicle, toDelete[vehicle]]);
}

sortable.sort(function (a, b) {
  return a[1] - b[1];
});

console.log(ans); // 1306611
console.log(sortable[0][1]); // 13210366
