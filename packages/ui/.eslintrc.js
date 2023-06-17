module.exports = {
  root: true,
  extends: ["mcbeer"],
  parserOptions: {
    project: ["/home/alex/@mcbeer/packages/ui/tsconfig.json"],
  },
  ignorePatterns: ["turbo/*"],
};
