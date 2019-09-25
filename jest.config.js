module.exports = {
  transform: {
    "^.+\\.(ts|js)$": ["babel-jest"],
    "^.+\\.svelte$": "jest-transform-svelte"
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "@testing-library/svelte/cleanup-after-each"
  ],
  modulePaths: ["<rootDir>/src/"]
};
