export function createPDB(numElements: i32, difference: i32): Int8Array {
  let pdb = new Int8Array(numElements);
  for (let i: i32 = 0; i < numElements; i++) {
    pdb[i] = (difference * i) % numElements;
  }
  return pdb;
}
