const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        // historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'build/')
        },
        // contentBase: path.resolve(__dirname, './build'),
        open: true,
        compress: true,
        port: 3000,
    },

    entry: {
        main: path.resolve(__dirname, './src/index.tsx'),
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.bundle.js',
        // sourceMapFilename: "index.js.map"
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src/index.html"),
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new ESLintPlugin({
        //     extensions: ['.tsx', '.ts', '.js'],
        //     exclude: 'node_modules'
        //  })
    ],
}
