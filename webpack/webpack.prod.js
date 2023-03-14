const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { ESBuildMinifyPlugin } = require("esbuild-loader");

module.exports = () =>
  merge(common, {
    mode: "production",
    devtool: false,
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          loader: "esbuild-loader",
          options: {
            loader: "tsx",
            target: "esnext",
          },
        },
      ],
    },
    optimization: {
      usedExports: true,
      minimizer: [
        new ESBuildMinifyPlugin({
          target: "esnext",
        }),
      ],
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  });
