const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.export = {
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/', 
        filename: 'duild.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test:/\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ] 
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}