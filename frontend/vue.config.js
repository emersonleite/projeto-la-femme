/* Global settings for styles */
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/styles/main.scss";`,
      },
    },
  },
};
