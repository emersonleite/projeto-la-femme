export const _ = {
  from: function(key) {
    return JSON.parse(window.localStorage[key]);
  },
  to: function(element) {
    return JSON.stringify(element);
  },
};
