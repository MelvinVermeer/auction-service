module.exports = {
  extends: "@serverless/eslint-config/node",
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": "off",
    "no-dupe-else-if": "off",
    "no-import-assign": "off",
    "no-setter-return": "off",
    "quotes": ["error", "double"],
    "no-console": "off",
  },
};
