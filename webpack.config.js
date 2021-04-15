const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main/js/app.js',       
    cache: true,    
    output: {
        //path: __dirname, //Dev
        // filename: './src/main/resources/static/built/[name]bundle.js' // Production
        path: __dirname + "/target/classes/static/built",
        filename: "[name].bundle.js",     // Development
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