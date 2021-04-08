const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const webpack = require("webpack");
const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const PATHS = {
  app: path.join(__dirname, "src"),
  build: path.join(__dirname, "public")
};

module.exports = {
  mode: "development",
  entry: path.join(PATHS.app, "index.js"),
  resolve: {
    /**
     * The compiler-included build of vue which allows to use vue templates
     * without pre-compiling them
     */
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: [".js", ".vue", ".css", ".scss"]
  },
  devtool: "source-map",
  output: {
    path: PATHS.build,
    publicPath: "/",
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: "[resourcePath]",
    devtoolFallbackModuleFilenameTemplate: "[resourcePath]?[hash]"
  },
  // optimization: {
  //   minimize: true,
  //   minimizer: [new TerserPlugin()],
  // },
  stats: {
    warnings: false
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: [
            ["vue"],
            [
              "@babel/preset-env",
              {
                targets: "> .5% or last 2 versions, not dead",
                modules: false
              }
            ]
          ]
        }
      },
      {
        test: /\.s?css$/,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1 }
          },
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: "../stylesheets/application.css",
    // }),
    new VueLoaderPlugin(),

    new CopyPlugin({
      patterns: [
        {
          from: "./src/assets/*",
          to: "assets/[name].[ext]",
          noErrorOnMissing: true
        },
        { from: "./src/html/*", to: "[name].[ext]" }
      ]
    })
  ]
};
