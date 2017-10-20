const path = require("path");

module.exports = {
  context: __dirname,
  entry: {
    common: ["bootstrap-loader"],
    test: "./src/test"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
    filename: "[name].bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: path.resolve(
                __dirname,
                "./src/scss/_sass-resources.scss"
              )
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".scss"],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  }
};
