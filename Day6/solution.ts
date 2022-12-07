import { readFile } from "./readTextFile";

var data = readFile("data.txt");

const txt = data[0];
const getAnswer = (len) => {
  let ans = 0;
  for (var index = 0; index < txt.length - len; index++) {
    const tempSubstring = txt.slice(index, index + len);
    var repeated = /(.).*\1/.test(tempSubstring);
    if (!repeated) {
      ans = index + len;
      break;
    }
  }
  return ans;
};

console.log(getAnswer(4)); //1343
console.log(getAnswer(14)); //2193
