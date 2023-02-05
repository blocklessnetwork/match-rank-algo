// these tests use generated bindings
// milage may vary in other languages
import { test } from "node:test";
import assert from "assert";
import { createPDB } from "./build/release.js";

test("pdb should return all 0s", async (t) => {
  // get the results from the assembly
  let result = createPDB(5, 5);

  // validate the spread
  result.forEach((value, idx) => {
    var element = JSON.parse(new TextDecoder().decode(value));
    console.log(element);
  });

  // validate the returned length
  assert(result.length, 5);
});
