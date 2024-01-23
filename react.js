module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {
    //--------------------------------------------------------------------------------------
    // React ESLint rules
    // https://github.com/jsx-eslint/eslint-plugin-react/tree/master#list-of-supported-rules
    //--------------------------------------------------------------------------------------
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
  },
};
