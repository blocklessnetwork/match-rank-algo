import "wasi";

export function createPDB(
  numElements: i32,
  difference: i32,
  offset: i32 = 0
): i32[] {
  let pdb = new Array<i32>(numElements);
  for (let i: i32 = 0; i < numElements; i++) {
    pdb[i] = (difference * i + offset) % numElements;
  }
  return pdb;
}
