// allowes to merge multiple config files
const { merge } = require('webpack-merge')
// to integrate marketing into container
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
// require common config
const commonConfig = require('./webpack.common');

//deligating shared dependencies
const packageJson = require('../package.json');

// only development mode
const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap'
      },
      shared: packageJson.dependencies
    })
  ]
}

// merge dev and common config, by listing dev second
// means it will overwrite common config props
module.exports = merge(commonConfig, devConfig)