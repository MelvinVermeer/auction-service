module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  plugins: ["prettier", "jest"],
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "no-console": "off",
  },
  env: {
    "jest/globals": true,
  },
};
