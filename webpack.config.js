const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main/js/app.js',       
    cache: true,    
    output: {
        path: __dirname + "/src/main/resources/static/built/", //Prod        
        // path: __dirname + "/target/classes/static/built", //Dev
        filename: "[name].bundle.js",     
        publicPath: '/built/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", '@babel/preset-react'],
                        plugins: [["@babel/plugin-transform-runtime",{
                            corejs: 3
                        }]]                     
                    },                                        
                }]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            { 
                test: /\.(ttf|eot|svg|gif|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                type: 'asset/resource'
            }
        ]
    },    
    devtool: 'source-map',  
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 20000,
        }
    }   
};