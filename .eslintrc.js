module.exports = {
  extends: 'get-off-my-lawn',
  rules: {
    'react/prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-no-literals': 0,
    'react/display-name': 0,
    'react/react-in-jsx-scopre': 0,
    'sort-keys': 0,
    'objects/no-object-properties-one-line': 0,
    'node/no-unpublished-require': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'react/destructuring-assignment': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-nested-ternary': 0,
    'array-callback-return': 0,
    'consistent-return': 0,
    'no-param-reassign': 0,
    'lines-between-class-members': 0,
    'global-require': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-unescaped-entities': 0,
    'no-use-before-define': 0,
    camelcase: [
      'error',
      {
        allow: [
          'consumer_key',
          'consumer_secret',
          'access_token',
          'access_token_secret'
        ]
      }
    ]
  }
};
