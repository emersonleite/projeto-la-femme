export function sumValuesObjectIntoArray(arrayOfObjects, keyOfObject) {
  return arrayOfObjects.reduce((accumulator, objectIntoArray) => {
    //must be a numeric value
    return accumulator + objectIntoArray[keyOfObject];
  }, 0);
}
