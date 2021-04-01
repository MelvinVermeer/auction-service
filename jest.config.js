module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js", "!src/lib/schemas/*.js"],
  coverageDirectory: "coverage",
  roots: ["<rootDir>"],
  testEnvironment: "node",
};
