import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    rules: {
      // Your custom rule definitions, e.g.,
      "no-console": 1, // Disallow use of `console` in production
      "semi": ["error", "always"], // Enforce semicolons at the end of statements
      "indent": ['warn', 2],
      "arrow-body-style": ['error', 'always']
    },
  },
];
