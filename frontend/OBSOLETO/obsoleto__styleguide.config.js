/* const path = require("path"); */
const buttonStyle = {
  backgroundColor: "yellow", // theme.color.light,
  padding: "10px",
  borderRadius: "5px",
  color: "#fff",
};
module.exports = {
  /* require: [
    "babel-polyfill",
    path.join(__dirname, ".styleguide/css/custom.css"),
  ], */

  // set your styleguidist configuration here
  title: "La Femme's Components",
  // components: 'src/components/**/[A-Z]*.vue',
  // defaultExample: true,

  template: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&display=swap",
        },
      ],
    },
  },

  sections: [
    {
      name: "Buttons",
      components: "src/components/buttons/[A-Z]*.vue",
    },
    {
      name: "Modal",
      components: "src/components/modal/[A-Z]*.vue",
    },
  ],

  // webpackConfig: {
  //   // custom config goes here
  // },
  exampleMode: "expand",

  theme: {
    color: {
      /* Base colors */
      base: "#ac8404",
      light: "#cda112",
      lightest: "#f1c01e",
      /* Link */
      link: "#f1c01e",
      linkHover: "#ac8404",
      focus: "rgba(22, 115, 177, 0.25)",
      border: "#e8e8e8",
      name: "#690",
      type: "#905",
      error: "#c00",
      baseBackground: "#252525",
      codeBackground: "#454545",
      sidebarBackground: "#111111",
      ribbonBackground: "#000",
      /*  */
      ribbonText: "#fff",

      // Based on default Prism theme
      codeBase: "#cda112",
      codeComment: "#6d6d6d",
      codePunctuation: "#999",
      codeProperty: "#905",
      codeDeleted: "#905",
      codeString: "#690",
      codeInserted: "#690",
      codeOperator: "#9a6e3a",
      codeKeyword: "#1673b1",
      codeFunction: "#DD4A68",
      codeVariable: "#e90",
    },
    fontFamily: {
      base: '"Maven Pro", sans-serif',
    },
    fontSize: {
      base: 15,
      text: 16,
      small: 13,
      h1: 48,
      h2: 36,
      h3: 24,
      h4: 18,
      h5: 16,
      h6: 16,
    },
    borderRadius: 3,
    maxWidth: 1000,
    sidebarWidth: 350,
    buttonTextTransform: "uppercase",
  },

  styles: function(theme) {
    return {
      //Changing the logo component
      Logo: {
        logo: {
          // we can now change the color used in the logo item to use the theme's `link` color
          color: "yellow",
          textAlign: "center",
        },
      },

      TabButton: {
        /* Button PROPS, METHODS, EVENTS & SLOTS */
        button: {
          backgroundColor: theme.color.light,
          padding: "10px",
          borderRadius: "5px",
          color: "#fff",
          "&:hover": {
            color: "#000",
            cursor: "pointer",
          },
        },
      },
    };
  },
};
