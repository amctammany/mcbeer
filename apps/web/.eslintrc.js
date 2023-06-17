module.exports = {
  root: true,
  extends: ["next","custom"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },

};
