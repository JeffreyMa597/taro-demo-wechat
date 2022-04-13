module.exports = {
  extends: ['taro', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? ['warn'] : ['off'], // 生产环境console警告
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: 'Taro'
      }
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx']
      }
    ],
    '@typescript-eslint/no-var-requires': ['warn'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: 'Taro'
      }
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        // 结尾加分号
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-empty-function': ['warn']
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    useJSXTextNode: true,
    project: './tsconfig.json'
  }
};
