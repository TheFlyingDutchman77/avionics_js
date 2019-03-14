path = require('path')

module.exports =
  mode: 'development'
  entry:
    avionics: './src/avionics/index.js'
    demo: './src/demo.coffee'
    demoKeys: './src/demoKeys.coffee'
  output:
    path: path.resolve(__dirname, 'dist')
    filename: '[name].js',
  module:
    rules: [{
      test: /\.css$/
      use: ['style-loader', 'css-loader']
    },{
      test: /\.coffee$/
      use: ['coffee-loader']
    },{
      test: /\.html$/
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true          
        }
      }]
    },{
      test: /\.js$/
      exclude: /node_modules/
      use:
        loader: 'babel-loader'
        options:
          presets: ['@babel/preset-env']
    }]
  resolve:
    extensions: ['.js', '.coffee']
  devServer:
    contentBase: path.join(__dirname, 'dist')
  # закоментировал, иначе не работает coffeescript
  watchOptions: { ignored: /node_modules/ }
