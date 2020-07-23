export function createArrayFromObjectSpecificKeys(object, specificKey) {
  let arrayCreated = [];
  for (let key in object) {
    arrayCreated.push(object[key][specificKey]);
  }
  return arrayCreated;
}
