module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    //"plugin:import/recommended",
    "plugin:import/typescript",
    "airbnb-typescript/base",
    //"plugin:jest/recommended",
    //"../../.eslintrc.js",
    //"airbnb-base-typescript",
    "turbo",
    "prettier",
  ],
  rules: {
    "no-underscore-dangle": 0,
    "prettier/prettier": "off",
    "no-unused-vars": "warn",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "max-classes-per-file": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  settings: {
    //jest: { version: "detect" },
    //"import/extensions": [".js", ".ts"],
    //"import/parsers": {
    //"@typescript-eslint/parser": [".ts"],
    //},
    //"import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },

    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {
        alwaysTryTypes: true,
      },
      //"./tsconfig.json",
      //// "./packages/client/tsconfig.build.json",
      //// "./packages/server/tsconfig.json",
      //],

      ///// / project: "./tsconfig.eslint.json",
      //},
    },
  },
  plugins: ["@typescript-eslint", "import"],
  env: {
    es6: true,
    node: true,
  },
  ignorePatterns: [
    "dist",
    "packages/types",
    "setupTests.ts",
    "testUtils.tsx",
    //"*.d.ts",
    "*.js",
    "*.jsx",
    ".yarn",
    "node_modules",
    "examples",
    "scripts",
  ],

  //};
};
