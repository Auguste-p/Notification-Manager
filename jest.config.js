const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  testMatch: ["<rootDir>/test/**/*.spec.ts"],

collectCoverage : true,

collectCoverageFrom : ["src/**/*.ts"],

coverageThreshold : {
  global: {
    branches: 20,
    functions: 20,
    lines: 20,
    statements: 20,
  },
},

coverageReporters : [["text", { file: "coverage.txt" }]]

};
