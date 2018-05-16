const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    mode: 'none',
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },

            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader", // compiles Sass to CSS
                    }
                ]
            }
        ]
    },

    // plugins: [
    //     new ExtractTextPlugin('css/styles.css')
    // ]
};