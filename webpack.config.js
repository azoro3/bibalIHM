var webpack = require('webpack');
//var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './src/app.js',
    output: {
        filename: './bundle.js',
        publicPath: '/'
    },
    module: {
          rules: [
              { test: /\.css$/, loader: 'style-loader!css-loader' },
              { test: /\.vue$/, loader: 'vue-loader'},
              { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},
            ],
          },
        plugins:[

        // Skip development tests
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
    ]
};
