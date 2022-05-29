module.exports = {
  extends: "airbnb",
  plugins: [
    "import",
  ],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
  },
  env: {
    "browser": true,
  },
  parserOptions: {
    "ecmaVersion": 2020,
  }
};
