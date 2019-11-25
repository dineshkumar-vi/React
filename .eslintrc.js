module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": ["eslint:recommended","plugin:react/recommended","plugin:jsx-a11y/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": false
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "env": {
        "jest/globals": true,
        "jquery": true
    },
    "overrides": [
        {
        "files": [ "src/*.js" ],
        "excludedFiles": "*.test.js"
        }
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error"
      ],
        "eqeqeq" : [
            "warn"
        ],
        "no-trailing-spaces":[
            0
        ],
        "react/prop-types": 0,
        "no-console": "error",
         "no-else-return": "warn",
         "no-undef-init": "warn",
         "no-undefined": "warn",
         "max-len": "warn",
         "consistent-return": "warn",
         //"id-match": ["error", "^[a-z]+([A-Z][a-z]+)*$", { "properties": true }],
         "no-inline-comments": "warn",
         "object-shorthand": "warn",
         "arrow-parens": ["warn"],
      },
    "plugins": [
        "react", "jest","jsx-a11y"
    ],
    "globals": {
        "global": true,
        "window": true,
        "__dirname": true,
        "process": true,
        "localStorage": true,
        "document": true,
        "console" : true,
        "sessionStorage":true,
        "Buffer":true,
        "module":true
    }
};
