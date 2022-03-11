module.exports = {
  extends: ["./node_modules/@mitsue/eslint-config", "plugin:storybook/recommended"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react', 'react-app'],
  rules: {
    indent: ['error', 4],
    quotes: ['error', 'single'],
    'multiline-comment-style': 'off',
    'dot-location': ['error', 'property'],
    'arrow-parens': ['error', 'as-needed'],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'arrow-spacing': ['error', {
      before: true,
      after: true
    }],
    'lines-between-class-members': ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    'no-unused-expressions': 'off',
    'no-new': 'off',
    'no-unused-vars': 'off',
    'object-curly-spacing': 'off',
    // ts
    'no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error']
  }
};