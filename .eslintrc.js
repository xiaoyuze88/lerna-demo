/**
 * ESLint configuration.
 *
 * @see https://eslint.org/docs/user-guide/configuring
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: [
    // '@tencent/eslint-config-tencent',
    // '@tencent/eslint-config-tencent/ts',
    'plugin:@typescript-eslint/recommended',
    // '@typescript-eslint',
    // '@tencent/eslint-config-tencent/prettier',
    // 'prettier',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    // 'plugin:@tencent/tea-i18n/recommended',
    // 增加 hooks 用法校验，及依赖检查的warning
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    // '@tencent/tea-i18n',
    // 'plugin:@typescript-eslint/recommended', // 使用推荐配置
    '@typescript-eslint',
    'simple-import-sort',
    'import',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      // typescript: true,
      typescript: {
        // project: './packages/*/tsconfig.eslint.json',
        // project: 'packages/*/tsconfig.json',
        project: './packages/**/tsconfig.json',
      },
      // node: true,
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    // project: './packages/*/tsconfig.json',
    project: './packages/**/tsconfig.json',
  },
  // languageOptions: {
  //   parserOptions: {
  //     ecmaFeatures: {
  //       esModuleInterop: true,
  //     },
  //   },
  // },
  /**
   "off"或者0   // 关闭规则关闭
   "warn"或者1  // 在打开的规则作为警告（不影响退出代码）
   "error"或者2 // 把规则作为一个错误（退出代码触发时为1）
   */
  rules: {
    // 'prettier/prettier': 1,
    // 与公司规范保持一致，尽量少添加rule
    // semi: [0], // 使用拖尾逗号
    // 'comma-dangle': 0,
    // quotes: 0,
    // 'arrow-parens': ['error', 'as-needed'], // 箭头函数如果只有一个参数不需要括号
    // 'space-before-function-paren': 0, // 函数名称与参数直接不空格
    // 'no-nested-ternary': 0, // 禁止嵌套三元表达式
    // 'no-restricted-syntax': 0, // 禁止使用for...in，推荐使用 Object.{keys,values,entries} API
    // 'max-len': [0, 120, 4], // 字符串最大长度
    // 'react/display-name': 0, // 禁止在React组件定义中丢失displayName
    // 'no-underscore-dangle': 0, // 禁止标识符中有悬空下划线，私有变量， _varibleName
    // 'no-param-reassign': 0, // 禁止重写参数
    // '@typescript-eslint/consistent-type-assertions': 0,
    // 'react/prop-types': 0 // 禁止在react组件定义中缺少props验证
    '@typescript-eslint/naming-convention': 0,
    'no-restricted-properties': 0,
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksConditionals: false,
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/consistent-type-assertions': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-case-declarations': 0,
    'simple-import-sort/exports': 'error',
    'import/no-named-as-default-member': 0,
    '@typescript-eslint/no-require-imports': 0,
    'import/no-named-as-default': 0,
    'no-console': ['error', { allow: ['warn', 'error', 'debug'] }],
    'simple-import-sort/imports': [
      'error',
      {
        // The default grouping, but with type imports last as a separate
        // group, sorting that group like non-type imports are grouped.
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Node.js builtins prefixed with `node:`.
          ['^node:'],
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          // ['^@?\\w'],
          ['^react', '^\\w'],
          // tea
          ['^@tencent', '^@tea', '^@tcb'],

          // alias access
          ['^@i18n', '^@src'],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group.
          ['^'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
          ['^.+\\.(le|c)ss$'],
        ],
      },
    ],
  },
};
