const { defaults } = require(`jest-config`);

module.exports = {
  preset: `@vue/cli-plugin-unit-jest`,
  testMatch: defaults.testMatch,
};
