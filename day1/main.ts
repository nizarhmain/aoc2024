import { readFromFile } from "../util/readFromFile";

import { strict as assert } from "node:assert";

console.log("### DAY 1 ### 🎄🎄 ");

readFromFile("./test.txt").then((result) => {
  assert.equal(solveIt(result), 11);
  console.log("works test ✅");
});

readFromFile("./input.txt").then((result) => {
  assert.equal(solveIt(result), 1873376);
  console.log("works for input ✅");
});

function solveIt(input: string[]) {
  let leftList: number[] = [];
  let rightList: number[] = [];

  for (let line of input) {
    leftList.push(Number(line.split("  ")[0]));
    rightList.push(Number(line.split("   ")[1]));
  }
  return popAndReturnDistance(leftList, rightList, 0);
}

function popAndReturnDistance(
  leftList: number[],
  rightList: number[],
  distance: number,
) {
  // they have same length, doesn't matter here
  if (leftList.length === 0) {
    return distance;
  }
  const smallestLeftListNumber = Math.min(...leftList);
  leftList.splice(leftList.indexOf(smallestLeftListNumber), 1);

  const smallestRightNumber = Math.min(...rightList);
  rightList.splice(rightList.indexOf(smallestRightNumber), 1);

  const diff = Math.abs(smallestLeftListNumber - smallestRightNumber);
  return popAndReturnDistance(leftList, rightList, diff + distance);
}
