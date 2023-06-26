module.exports = {
  root: true,
  extends: ["next", "mcbeer"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
};
