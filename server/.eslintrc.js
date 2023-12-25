// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    rules: {
        "prettier/prettier": ["error", { endOfLine: "auto" }],
        "no-unused-vars": "error",
        "no-case-declarations": "off"
    },
    globals: {
        process: true
    }
};
