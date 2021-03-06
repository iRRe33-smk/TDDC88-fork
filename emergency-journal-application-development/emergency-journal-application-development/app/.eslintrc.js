module.exports = {
  env: {
    browser: true
  },
  extends: [
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/prop-types': 0,
    'enforceForClassMembers': 'off',
    'setWithoutGet': 'off',
    'accessor-pairs': 'off'
  },
  settings: {
    react: {
      version: '17.0.2'
    }
  }
}
