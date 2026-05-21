const path = require("path")
module.exports = {
    mode: "development",
    entry: "./index.js",
    devtool: false,
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}