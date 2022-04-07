module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],
    semi: ['error', 'never'],
    'max-len': 'off',
    'linebreak-style': 'off',
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true, ignoreImports: true }],
    'arrow-parens': ['error', 'as-needed'],
    'vue/multiline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-param-reassign': ['error', { props: false }],
    'no-underscore-dangle': ['error', { allow: ['x_', 'y_', '_vm'] }],
    'prefer-spread': 'off',
    'consistent-return': 'off',
    'no-else-return': 'off',
    'arrow-body-style': 'off',
    'object-shorthand': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'func-names': 'off',
    'no-undef': 'off',
    'global-require': 'off',
    'no-unused-expressions': 'off',
    'prefer-destructuring': 'off',
    'prefer-object-spread': 'off',
    'space-infix-ops': ['error', { 'int32Hint': false }],
    'comma-dangle': ['error', 'only-multiline'],
  }
}
