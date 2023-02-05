// use generated bindings
import { createPDB } from "./build/release.js";

async function main() {
  console.log(createPDB(5, 2));
}

main().then(() => console.log("Done"));
