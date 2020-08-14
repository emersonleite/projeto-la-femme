/* importing dotenv  */
/* require("dotenv/config"); */
("use strict");
module.exports = {
  // GET /session
  create: async () => {
    var axios = require("axios");
    var config = {
      method: "post",
      url:
        "https://ws.sandbox.pagseguro.uol.com.br/v2/sessions?email=emerson.bl@gmail.com&token=B50AB706F7804ECD9D1B33EC242AB5A6",
      headers: {},
    };
    const responseBody = {};
    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        responseBody.data = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    return responseBody.data;
  },
};
