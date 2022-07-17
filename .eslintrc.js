module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        // suppress errors for missing 'import React' in files
        "react/react-in-jsx-scope": "off",
        // eslint-disable-next-line
        "react/no-unescaped-entities": 0,
        "react/prop-types": 0
    }
}
