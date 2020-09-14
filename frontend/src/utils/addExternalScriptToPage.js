/* add external script to page at App.vue  */
export default function addExternalScriptToPage(tag, attribute, source) {
  let element = document.createElement(tag);
  element.setAttribute(attribute, source);
  return document.body.appendChild(element);
  /* return document.head.appendChild(element); */
}
