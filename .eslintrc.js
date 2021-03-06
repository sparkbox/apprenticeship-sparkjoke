module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint-config-airbnb-base',
  ],
  globals: {
    window: true,
    document: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 0,
  },
  overrides: [
    {
      files: [
        '**/src/**/*.spec.js',
        '**/api/**/*.spec.js',
      ],
      env: {
        jest: true,
      },
    },
    {
      files: [
        '**/src/**/*.js',
        '**/src/**/*.spec.js',
      ],
      env: {
        browser: true,
      },
    },
  ],
};
