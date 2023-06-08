// allowes to merge multiple config files
const { merge } = require('webpack-merge')

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
// require common config
const commonConfig = require('./webpack.common');

const packageJson = require('../package.json');

// only development mode
const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js'
      },
      shared: packageJson.dependencies
    })
  ]
}

// merge dev and common config, by listing dev second
// means it will overwrite common config props
module.exports = merge(commonConfig, devConfig)