module.exports = {
  "moduleNameMapper": {
    "\\.(css|less)$": "identity-obj-proxy"
  },
  "setupFiles": [
    "./test-config.js",
    "raf/polyfill"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};
