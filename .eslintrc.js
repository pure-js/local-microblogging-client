module.exports = {
  extends: "airbnb",
  plugins: [
    "import",
  ],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
  env: {
    "browser": true,
  },
  parserOptions: {
    "ecmaVersion": 2017,
  }
};
