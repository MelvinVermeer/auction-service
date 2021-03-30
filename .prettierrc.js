'use strict';
const serverlessConfig = require('@serverless/eslint-config/prettier.config');
module.exports = {
  ...serverlessConfig,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
};
