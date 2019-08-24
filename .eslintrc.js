module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["eslint:recommended", "prettier", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"]
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 8
  }
};
