module.exports = {
  entry: "./worker.js",
  target: "dist",
  resolve: {
    mainFields: ["main", "module"],
    alias: {},
  },
  node: { fs: "empty" },
};
