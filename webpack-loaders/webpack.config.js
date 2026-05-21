
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "production",
    //entry: "./index.js",
    entry: {
        index: "./index.js",
        explore: "./about.js"
    },
    devtool: false,
    output: {
        filename: "[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "assets/[hash][ext]",
        clean: true
    },
    module: {
        rules: [{
            test: /.(jpeg|png|jpg|png)$/,
            type: "asset/resource"
        },
        {
            test: /\.(css)$/,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.(scss)$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
            test: /.(ttf)$/,
            type: "asset/resource"

        }
        ]
    }
}