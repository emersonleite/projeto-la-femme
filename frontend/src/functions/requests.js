export const api = {
  async get(endpoint) {
    return fetch(endpoint).then((response) => response.json());
  },
  async getNoJson(endpoint) {
    return fetch(endpoint);
  },
  async post(endpoint, body) {
    return fetch(endpoint, body, {
      method: "post",
    }).then((response) => console.log(response));
  },
  async put(endpoint, body) {
    return fetch(endpoint, body, {
      method: "put",
    }).then((response) => console.log(response));
  },
  async delete(endpoint) {
    return fetch(endpoint, {
      method: "delete",
    }).then((response) => console.log(response));
  },
};
