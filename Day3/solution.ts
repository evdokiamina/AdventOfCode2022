import { readFile } from "./readTextFile";

const data = readFile("data.txt");
console.log(data);

const scores = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

let totalScore = 0;
let tempGroup = 0;
for (let j = 0; j < data.length - 2; j = j + 3) {
  const element = data[j];
  const element2 = data[j + 1];
  const element3 = data[j + 2];
  const allLetters = [...element.split("")].reduce((prev, curr) => {
    if (Object.keys(prev).includes(curr)) {
      prev[curr] = prev[curr] + 1;
      return prev;
    } else {
      prev[curr] = 1;
      return prev;
    }
  }, {});

  const allLetters2 = [...element2.split("")].reduce((prev, curr) => {
    if (Object.keys(prev).includes(curr)) {
      prev[curr] = prev[curr] + 1;
      return prev;
    } else {
      prev[curr] = 1;
      return prev;
    }
  }, {});

  const allLetters3 = [...element3.split("")].reduce((prev, curr) => {
    if (Object.keys(prev).includes(curr)) {
      prev[curr] = prev[curr] + 1;
      return prev;
    } else {
      prev[curr] = 1;
      return prev;
    }
  }, {});
  Object.keys(allLetters).forEach((key) => {
    if (key in allLetters2 && key in allLetters3) {
      console.log(key, allLetters[key], allLetters2[key], allLetters3[key]);
      totalScore = totalScore + scores[key];
    }
  });
}

console.log(totalScore); // 2973
// Seems i deleted part-2 by accident
