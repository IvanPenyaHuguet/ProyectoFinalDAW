const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main/js/app.js',       
    cache: true,    
    output: {
        path: __dirname,
        // filename: './src/main/resources/static/built/bundle.js' // Production
        filename: "./target/classes/static/built/bundle.js"     // Development
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            }
        ]
    },    
    devtool: 'source-map',    
};