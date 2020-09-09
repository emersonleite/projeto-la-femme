("use strict");
module.exports = {
  create: async (ctx) => {
    const date = new Date();
    const items = [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      "-",
      "1".padStart(6, "0"),
    ];

    let array = items.reduce((acumulator, item) => {
      return String(acumulator + item);
    }, "");

    return array; /*  + ctx.request.body.a + ctx.request.body.b + ctx.request.body.c */
  },
};
