const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = () =>
  merge(common, {
    mode: "development",
    devtool: "eval",
    devServer: {
      port: 3000,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          loader: "esbuild-loader",
          options: {
            loader: "tsx",
            target: "esnext",
          },
        },
      ],
    },
  });
