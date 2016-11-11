var webpack = require('webpack');
var path = require('path'); // core module

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!omeradded/bootstrap.min.js',
    'script!omeradded/modernizr.min.js',
    'script!omeradded/wow.min.js',
    'script!omeradded/pace.min.js',
    'script!omeradded/jquery.scrollTo.min.js',
    'script!omeradded/jquery.nicescroll.js',
    './app/app.jsx',
    'script!omeradded/jquery.app.js'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    moduleDirectories:  [
      'node_modules',
      './app/components'
    ],
    alias: {
      applicationStyles: 'app/styles/app.scss',
      animate: 'public/css/animate.css',
      Main: 'app/components/Main.jsx',
      Navigation: 'app/components/Navigation/Navigation.jsx',
      Dashboard: 'app/components/Dashboard/Dashboard.jsx',
      TopThreatList: 'app/components/Dashboard/TopThreatsList/TopThreatsList.jsx',
      TopThreatsListItem: 'app/components/Dashboard/TopThreatsList/TopThreatsListItem.jsx',
      CategoryDisplayList: 'app/components/Dashboard/CategoryDisplay/CategoryDisplayList.jsx',
      CategoryDisplayItem: 'app/components/Dashboard/CategoryDisplay/CategoryDisplayItem.jsx',
      Aside: 'app/components/Aside/Aside.jsx',
      CategoryTableList: 'app/components/CategoryTableList/CategoryTableList.jsx',
      CategoryTableItem: 'app/components/CategoryTableList/CategoryTableItem.jsx',
      DataVisualization: 'app/components/DataVisualization/DataVisualization.jsx',
      GoogleMap: 'app/components/DocumentProfile/GoogleMap.jsx',
      DocumentProfile: 'app/components/DocumentProfile/DocumentProfile.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      { 
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "file" 
      },
      { 
        test: /\.(woff|woff2)$/, 
        loader:"url?prefix=font/&limit=5000" 
      },
      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url-loader?limit=10000&mimetype=application/font-woff" 
      },
      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "file-loader" 
      },
      { 
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url?limit=10000&mimetype=application/octet-stream" 
      },
      { 
        test: /\.png$/, 
        loader: "url-loader?limit=100000" 
      },
      { 
        test: /\.jpg$/, 
        loader: "file-loader" 
      },
      { 
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url?limit=10000&mimetype=image/svg+xml" 
      }
    ]
  },
  devtool: 'inline-source-map'
};
