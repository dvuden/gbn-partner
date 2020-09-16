module.exports = {
  root: true,
  env: {
    node: true
  },
  //extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  extends: ["plugin:vue/essential"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
    //"prettier/prettier": ["error", { "singleQuote": true, "parser": "flow" }]
  }
};


// module.exports = {
//   root: true,
//   env: {
//     node: true
//   },
//   extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
//   parserOptions: {
//     parser: "babel-eslint"
//   },
//   rules: {
//     "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
//     "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
//   }
// };