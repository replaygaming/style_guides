module.exports = {
  "extends": "airbnb-base",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": { 
    "es6": true
  },
  "rules": {
    "require-jsdoc": "off",
    "arrow-body-style": [
      2,
      "as-needed"
    ],
    "class-methods-use-this": 0,
    "comma-dangle": [
      2,
      "always-multiline"
    ],
    "dot-notation": 0,
    "import/imports-first": 0,
    "import/newline-after-import": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0,
    "import/no-unresolved": 2,
    "import/prefer-default-export": 0,
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ]
  }
};
