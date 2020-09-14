("use strict");
module.exports = {
  find: async (ctx) => {
    const { id } = ctx.params;

    console.log("query => ", ctx.request.body.client_data);

    const axios = require("axios");

    const qs = require("qs");

    const data = qs.stringify(ctx.request.body.client_data);

    const config = {
      method: "post",
      url:
        "https://ws.sandbox.pagseguro.uol.com.br/v2/transactions?email=emerson.bl@gmail.com&token=B50AB706F7804ECD9D1B33EC242AB5A6",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
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
