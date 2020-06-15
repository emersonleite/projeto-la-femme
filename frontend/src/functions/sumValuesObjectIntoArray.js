export function sumValuesObjectIntoArray(arrayOfObjects, keyOfObject) {
  return arrayOfObjects.reduce((accumulator, objectIntoArray) => {
    //must be a numeric value
    return accumulator + objectIntoArray[keyOfObject];
  }, 0);
}

export function operationOverSumValuesObjectIntoArray(
  arrayWithObjects,
  keyOfObject
) {
  return arrayWithObjects.reduce((accumulator, objectIntoArray) => {
    //must be a numeric value
    return accumulator + objectIntoArray[keyOfObject];
  }, 0);
}
