export function createObjectWithLabelsArray(labelArray) {
  let emptyObject = {};
  for (var x = 0; x <= labelArray.length - 1; x++) {
    emptyObject[labelArray[x]] = "";
  }
  return emptyObject;
}

/* const a = createObject(["a", "b", "c", "d", "e", "f"]);
console.log(a); */
