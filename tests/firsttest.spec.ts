import { deepEqual } from "assert";
import { Methods } from "../src/methods";
import { notEqualMessage } from "../const/consts";

describe("First test", () => {
  const numberArray = [1, 3, 2, 4, 9, 6, 7, 0];

  it("Correct work of asc sort", () => {
    const actualResult = Methods.sortNumberArray(numberArray, "asc");
    const expectedResult = [0, 1, 2, 3, 4, 6, 7, 9];

    deepEqual(actualResult, expectedResult, notEqualMessage);
  });
});
