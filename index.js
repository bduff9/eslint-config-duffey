module.exports = {
	"extends": [
    "eslint:recommended",
    "plugin:you-dont-need-momentjs/recommended"
	],
	"rules": {
    "indent": [
      "error",
      "tab", {
        "SwitchCase": 1,
        "VariableDeclarator": 2
      }
    ],
    "linebreak-style": "off",
    "no-console": "off",
    "no-constant-condition": "off",
    "space-before-function-paren": ["error", "always"],
    "no-unused-vars": [
      "warn", {
        "varsIgnorePattern": "UU",
        "args": "none"
      }
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "import/named": 2,
    "comma-dangle": ["error", "always-multiline"],
    "one-var": ["error", "never"],
    "no-var": "error",
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": "return" },
      { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*"},
      { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"]},
      { "blankLine": "always", "prev": ["block", "block-like", "if"], "next": "*"},
      { "blankLine": "always", "prev": "*", "next": ["block", "block-like", "if"]},
      { "blankLine": "any", "prev": "export", "next": "*" },
      { "blankLine": "any", "prev": "*", "next": "export" }
    ]
  }
};
