module.exports = {
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    "\\.(css|less|scss|sss|styl)$": "jest-css-modules"
  },
  globals: {
    NODE_ENV: 'test',
    BABEL_ENV: 'test',
    PORT: 3333,
  },
  collectCoverage: true,
  setupFilesAfterEnv: [
    '<rootDir>/test/testSetupFile.js',
    "jest-enzyme",
  ],
  moduleDirectories: [ "node_modules" ],
  testEnvironment: "enzyme",
  testEnvironmentOptions: {
    "enzymeAdapter": "react16"
  },
  moduleNameMapper: {
    "@thewickedwebdev/components": "<rootDir>/node_modules/@thewickedwebdev/components",
    "assets(.*)$": "<rootDir>/src/public/assets/$1",
    "layouts(.*)$": "<rootDir>/src/public/layouts/$1",
    "components(.*)$": "<rootDir>/src/public/local-components/$1",
    "pages(.*)$": "<rootDir>/src/public/pages/$1",
    "\\.(css|scss)$": "<rootDir>/test/__mocks__/styleMock.js",
    "\\.(xml|txt)$": "<rootDir>/test/__mocks__/fileMock.js",
    "@fortawesome/react-fontawesome": "<rootDir>/test/__mocks__/font-awesome.js"
   },
  watchPathIgnorePatterns: [
    'src/server/resume-builder.test.js',
    './dist/',
    '@thewickedwebdev',
    'config/',
  ]
};
