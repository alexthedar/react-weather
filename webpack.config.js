module.exports={
  entry: './app/app.jsx',  //entry file for webpack to start from
  output: {                   // where to output.  uses dirname for root adn then places accordingly
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
    },
    extensions: ['', '.js', '.jsx']  //what are the extensions of the files to go through
  },
  module: {
    loaders: [  //needed for babel to convert jsx and other stuff
      {
        loader: 'babel-loader',  //name of loader to be used
        query: {
          presets: ['react','es2015', 'stage-0']  //what languages will be tranlasted
        },
        test: /\.jsx?$/,  //regex to say only get files that use jsx at the end and put them through this loader
        exclude: /(node_modules | bower_components)/  //what folders do i not want the babel to go through
      }
    ]
  },
  devtool: 'eval-source-map'
}
