var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: {
        bundle: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['url-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            options: {
                context: __dirname
            }
        })
    ],
    devtool: 'cheap-eval-source-map',
    resolve: {
        extensions: ['.js', '.css', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    devServer: {
        port: 3333,
        hot: true,
        compress: true,
        open: true
    }
};