export function createObjectWithLabelsArray(labelArray) {
  let objectCreated = {};
  for (var x = 0; x <= labelArray.length - 1; x++) {
    objectCreated[labelArray[x]] = "";
  }
  return objectCreated;
}
