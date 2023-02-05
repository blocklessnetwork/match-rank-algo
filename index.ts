import { JSON, JSONEncoder } from "assemblyscript-json/assembly";

export function createPDB(numElements: i32, difference: i32): Uint8Array[] {
  let pdb = new Array<Uint8Array>(numElements);
  // Create encoder

  for (let i = 0; i < numElements; i++) {
    // Construct necessary object
    let encoder = new JSONEncoder();
    encoder.pushObject("obj");
    encoder.setInteger("int", 10);
    encoder.setString("str", `${(difference * i) % numElements}`);
    encoder.popObject();

    let json: Uint8Array = encoder.serialize();
    pdb[i] = json;
  }
  return pdb;
}
