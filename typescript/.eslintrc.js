module.exports = {
  root: true,
  env: { browser: true, commonjs: true, es2021: true },
  extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
  plugins: ['import', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.eslint.json',
  },
  rules: {
    'linebreak-style': 0,
    'no-console': 'off',
    'import/newline-after-import': 'off',
    noEmitOnError: 'off',
  },
};
