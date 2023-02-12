module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^.+\\.(css)$": "identity-obj-proxy",
  },
};
