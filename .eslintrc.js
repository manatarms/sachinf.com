module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true
  },
  extends: ["eslint:recommended", "plugin:jest/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2017,
    sourceType: "module"
  },
  plugins: ["react","jest"],
  rules: {
    indent: ["error", 4],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"]
  }
};
