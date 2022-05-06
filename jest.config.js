module.exports = {
  "moduleNameMapper": {
    "\\.(css|less)$": "identity-obj-proxy"
  },
  "setupFiles": [
    "raf/polyfill"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "testEnvironment": "jsdom"
};
