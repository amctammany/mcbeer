module.exports = {
  root: true,
  extends: ["custom"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },

  settings: {
    //jest: { version: "detect" },
    //"import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },

    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
      typescript: {
        project: "./tconfig.json",
      },
    },
  },
  env: {
    es6: true,
    node: true,
  },
};
