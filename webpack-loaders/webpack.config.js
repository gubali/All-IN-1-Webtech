
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode: "production",
    //entry: "./index.js",
    entry: {
        index: "./index.js",
        explore: "./about.js"
    },
    devtool: false,
    output: {
        filename: "[name].bundle.js",
        //filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "assets/[hash][ext]",
        clean: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: ["index"],
            filename: 'index.html',
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            template: './about.html',
            chunks: ["explore"],
            filename: './about.html',
            inject: "body",
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './assets'),
                    to: path.resolve(__dirname, "dist", './assets/images')
                }
            ]
        })
    ],
    module: {
        rules: [{
            test: /.(jpeg|png|jpg|png)$/,
            type: "asset/resource"
        },
        {
            test: /\.(css)$/,
            // use: ["style-loader", "css-loader"]
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
        {
            test: /\.(scss)$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        },
        {
            test: /.(ttf)$/,
            type: "asset/resource"

        }
        ]
    }
}