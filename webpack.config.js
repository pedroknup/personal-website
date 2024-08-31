const webpack = require('webpack');
const path = require('path');
const package = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';
const sourcePath = path.join(__dirname, './src');
const outPath = path.resolve(__dirname, 'build');

module.exports = {
  context: sourcePath,
  entry: {
    app: './main.tsx',
  },
  output: {
    publicPath: '/personal-website/',
    path: outPath,
    filename: isProduction ? '[name].[contenthash].js' : '[name].[hash].js',
    clean: true,
    chunkFilename: isProduction ? '[name].[contenthash].js' : '[name].[hash].js',
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    mainFields: ['module', 'browser', 'main'],
    alias: {
      app: path.resolve(__dirname, 'src/app/'),
      '@api': path.resolve(__dirname, 'src/api/api'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          !isProduction && {
            loader: 'babel-loader',
            options: { plugins: ['react-hot-loader/babel'] },
          },
          'ts-loader',
        ].filter(Boolean),
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.(a?png|svg)$/, use: 'url-loader?limit=10000' },
      {
        test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          priority: -10,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: -20,
        },
      },
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false,
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: isProduction ? '[name].[contenthash].css' : '[name].[hash].css',
    }),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'src/assets/index.html'),
    //   minify: {
    //     minifyJS: true,
    //     minifyCSS: true,
    //     removeComments: true,
    //     useShortDoctype: true,
    //     collapseWhitespace: true,
    //     collapseInlineTagWhitespace: true,
    //   },
    //   meta: {
    //     title: package.name,
    //     description: package.description,
    //     keywords: Array.isArray(package.keywords) ? package.keywords.join(',') : undefined,
    //   },
    // }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/assets/index.html'),

      minify: {
        minifyJS: true,
        minifyCSS: true,
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
      },
      append: {
        head: '<script src="//cdn.polyfill.io/v3/polyfill.min.js"></script>',
      },
      meta: {
        title: package.name,
        description: package.description,
        keywords: Array.isArray(package.keywords) ? package.keywords.join(',') : undefined,
      },
    }),
  ],
  devServer: {
    static: {
      directory: outPath,
    },
    compress: true,
    port: 9000, // or any other port you prefer
    historyApiFallback: true,
  },
  devtool: isProduction ? 'hidden-source-map' : 'cheap-module-source-map',
};
