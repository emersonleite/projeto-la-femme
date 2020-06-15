export function changeTextFromElementAfterATime(
  element,
  textAfter,
  textPrevious,
  time
) {
  element.innerText = textAfter;
  window.setInterval(() => {
    element.innerText = textPrevious;
  }, time);
}
