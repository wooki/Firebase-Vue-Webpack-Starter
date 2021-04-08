module.exports = {
  syntax: "postcss-scss",
  plugins: [
    require("postcss-preset-env")({
      browsers: "> .5% or last 2 versions, not dead"
    }),
    require("postcss-strip-inline-comments"),
    require("postcss-advanced-variables"),
    require("precss"),
    require("postcss-import"),
    require("postcss-cssnext"),
    require("postcss-calc")
  ]
};
