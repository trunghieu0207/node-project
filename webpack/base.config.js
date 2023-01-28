require('../entry');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const SRC_ROOT = path.join(__dirname, '../src');

module.exports = {
    context: SRC_ROOT,
    entry: entry,
    externals: [nodeExternals()],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../public/dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|jsx|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript',
                            ['@babel/preset-react', { runtime: 'automatic' }]
                        ],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.ts', '.jsx', '.tsx']
    }
};
