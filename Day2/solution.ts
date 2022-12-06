import { lookupService } from "dns";
import { readFile } from "./readTextFile";

const data = readFile("data.txt");
console.log(data);

const lost = {
  name: "X",
  score: 0,
};

const draw = {
  name: "Y",
  score: 3,
};

const won = {
  name: "Z",
  score: 6,
};

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const shapePoints = {
  [rock]: 1,
  [paper]: 2,
  [scissors]: 3,
};

const combosOutcomes = {
  AX: shapePoints[scissors] + lost.score,
  AY: shapePoints[rock] + draw.score,
  AZ: shapePoints[paper] + won.score,
  BX: shapePoints[rock] + lost.score,
  BY: shapePoints[paper] + draw.score,
  BZ: shapePoints[scissors] + won.score,
  CX: shapePoints[paper] + lost.score,
  CY: shapePoints[scissors] + draw.score,
  CZ: shapePoints[rock] + won.score,
};

// 2 % 3 === 1 // true // scissors
// 1 % 3 === 2 // false //

let totalScore = 0;

data.forEach((item, index) => {
  totalScore = totalScore + combosOutcomes[item.replace(" ", "")];

  const replaces = item
    .replace("X", "0")
    .replace("Y", "1")
    .replace("Z", "2")
    .replace("A", "0")
    .replace("B", "1")
    .replace("C", "2");

  const p1 = +item[0];
  const p2 = +item[1];
  //rock - lose // A - X // 0 - 0
  // 1 % 3 // 1 === 1
  if ((p1 + 1) % 3 === p2) {
    console.log("p1 won");
  }
});

console.log(totalScore);
