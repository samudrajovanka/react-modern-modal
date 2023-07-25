/** @type {import('jest').Config} */
const config = {
    verbose: true,
    moduleNameMapper: {
        "\\.(css|scss|less)$": "<rootDir>/__mocks__/style.ts",
    },
};

module.exports = config;
