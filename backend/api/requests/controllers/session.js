/* importing dotenv  */
/* require("dotenv/config"); */
("use strict");
module.exports = {
  // GET /session
  create: async () => {
    const axios = require("axios");
    const config = {
      method: "post",
      url:
        "https://ws.sandbox.pagseguro.uol.com.br/v2/sessions?email=emerson.bl@gmail.com&token=B50AB706F7804ECD9D1B33EC242AB5A6",
      headers: {},
    };
    const responseBody = {};

    try {
      const response = await axios(config);
      console.log(JSON.stringify(response.data));
      responseBody.data = response.data;
    } catch (error) {
      console.log(error);
    }
    return responseBody.data;
  },
};
