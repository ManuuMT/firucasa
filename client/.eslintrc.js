module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'eslint-config-prettier',
    // 'next/babel',
    // 'next/core-web-vitals',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-unused-vars': 'warn',
    'comma-dangle': ['error', 'always-multiline'],
    'react/prop-types': 'warn',
  },
};
