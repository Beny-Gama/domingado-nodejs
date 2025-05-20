import prettierPlugin from "eslint-plugin-prettier";
import airbnbBase from "eslint-config-airbnb-base";
import importPlugin from "eslint-plugin-import";
import prettierConfig from "eslint-config-prettier";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default [
  ...compat.extends("airbnb-base"),
  ...compat.extends("plugin:prettier/recommended"),
  {
    files: ["src/**/*.js"],
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "no-console": "off",
    },
  },
];
