module.exports = [
  {
    files: ["theme/assets/**/*.js"],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: 2022
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    }
  }
];
