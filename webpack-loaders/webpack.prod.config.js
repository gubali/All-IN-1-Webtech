const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const glob = require("glob");

module.exports = {
    mode: "production",
    entry: {
        index: "./index.js",
        explore: "./about.js"
    },
    devtool: "source-map",
    optimization: {
        minimize: true,
        minimizer: [
            "...",
            new CssMinimizerPlugin()
        ],
        splitChunks: {
            chunks: "all"
        }
    },

    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true
    },

    plugins: [
        new PurgeCSSPlugin({
            paths: glob.sync(
                path.join(__dirname, "*.{html,js}"),
                { nodir: true }
            ),
            safelist: [/./]
        }),

        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),

        new HtmlWebpackPlugin({
            template: "./index.html",
            chunks: ["index"],
            filename: "index.html",
            inject: "body"
        }),

        new HtmlWebpackPlugin({
            template: "./about.html",
            chunks: ["explore"],
            filename: "about.html",
            inject: "body"
        }),

        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "assets"),
                    to: path.resolve(__dirname, "dist/assets/images")
                }
            ]
        })
    ],

    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: "asset/resource"
            },

            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },

            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },

            {
                test: /\.(ttf|woff|woff2|eot)$/i,
                type: "asset/resource"
            }
        ]
    }
};