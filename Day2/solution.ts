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

let totalScore = 0;

data.forEach((item) => {
  totalScore = totalScore + combosOutcomes[item.replace(" ", "")];

  const p1 = +item[0];
  const p2 = +item[1];

  if ((p1 + 1) % 3 === p2) {
    console.log("p1 won");
  }
});

// Missed saving the first one
console.log(totalScore); //8295
