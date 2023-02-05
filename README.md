# match-rank-algo

This is a simple function written in AssemblyScript that creates an array of Uint8Array elements based on the inputs numElements and difference. The function creates a new array pdb with numElements number of elements, and for each element it constructs a JSON object using the JSONEncoder class, sets the string key "value" with a computed string value, serializes the object and stores it in the pdb array.

## usage

```
createPDB(numElements: i32, difference: i32): Uint8Array[]
```

## Inputs

numElements: The number of elements in the pdb array to be created.
difference: The difference between the values of the "value" key in the JSON objects stored in the pdb array.

## Outputs

An array of Uint8Array elements, where each element is a serialized JSON object with a single key "value".

## Typescript Example

```javascript
// javacript bind-gen
import { createPDB } from "./build/release.js";

let result = createPDB(5, 2);
console.log(result);
```

```javascript
[
  Uint8Array[(123, 34, 118, 97, 108, 117, 101, 34, 58, 34, 48, 34, 125)],
  Uint8Array[(123, 34, 118, 97, 108, 117, 101, 34, 58, 34, 50, 34, 125)],
  Uint8Array[(123, 34, 118, 97, 108, 117, 101, 34, 58, 34, 48, 34, 125)],
  Uint8Array[(123, 34, 118, 97, 108, 117, 101, 34, 58, 34, 2, 34, 125)],
  Uint8Array[(123, 34, 118, 97, 108, 117, 101, 34, 58, 34, 4, 34, 125)],
];
```

```javascript
[
  `{"value":"0"}`,
  `{"value":"2"}`,
  `{"value":"0"}`,
  `{"value":"2"}`,
  `{"value":"4"}`,
];
```
