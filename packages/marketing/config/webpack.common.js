module.exports = {
  module: {
    //rulles used to import 'loders' order of files  to process by webpack
    rules: [
      {
        // whenever we load file with extention mjs or js bable will process them
        test:  /\.m?js$/,
        // do not try  to run bable on any of files in node_modules folder
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            //webpack gonna process any jsx we add to uplication '@babel/preset-react'
            // '@babel/preset-env' will transform code to ES5
            presets: ['@babel/preset-react', '@babel/preset-env'],
            // anable features 'async runtime'
            plugins:  ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  }
}