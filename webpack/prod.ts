import { merge } from "webpack-merge";
import * as path from "path";
import base from "./base";
import TerserPlugin from "terser-webpack-plugin";
import { Configuration } from "webpack";

const prodConfig: Configuration = merge(base, {
  mode: "production",
  output: {
    filename: "bundle.min.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: false,
  performance: {
    maxEntrypointSize: 900000,
    maxAssetSize: 900000,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
});

export default prodConfig;
