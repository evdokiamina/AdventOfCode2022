import { readFile } from "./readTextFile";

const data = readFile("data.txt");

const emptypos = data.findIndex((val) => {
  return val === "";
});

const crates = data.slice(0, emptypos - 1);
const positions = data.slice(emptypos - 1, emptypos);
const moving = data.slice(emptypos + 1, data.length);

let cratesDic: Record<string, string[]> = {};

crates.forEach((item) => {
  positions[0].split("").forEach((pos, index) => {
    if (pos !== " ") {
      if (item[index] !== " ") {
        if (Object.keys(cratesDic).includes(pos)) {
          cratesDic[pos].push(item[index]);
        } else {
          cratesDic[pos] = [item[index]];
        }
      }
    }
  });
});

moving.forEach((moveItem) => {
  const split1 = moveItem.split("move ")[1].split(" from ");
  const split2 = split1[1].split(" to ");
  const move = +split1[0];
  const from = split2[0];
  const to = split2[1];
  let arrayToMove = [];
  for (let i = 0; i < move; i++) {
    const currentItemToMove = cratesDic[from].shift();
    arrayToMove.push(currentItemToMove);
  }
  cratesDic[to].unshift(...arrayToMove);
});

const ans = Object.keys(cratesDic).map((item) => {
  return cratesDic[item][0];
});

const answer = ans.join("");
console.log(answer);
