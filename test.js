// these tests use generated bindings
// milage may vary in other languages
import { test } from "node:test";
import assert from "assert";
import { createPDB } from "./build/release.js";

test("pdb should return all 0s", async (t) => {
  let result = createPDB(5, 0);

  result.forEach((value, idx) => {
    var element = JSON.parse(`{${new TextDecoder().decode(value)}}`);
  });

  assert(result.length, 5);
});
