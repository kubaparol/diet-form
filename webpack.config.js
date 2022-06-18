const path = require("path");
// importuję bibliotekę [path] z [node.js]
const HtmlWebpackPlugin = require("html-webpack-plugin");
// importuję odpowiedni plugin
const CssWebpackPlugin = require("mini-css-extract-plugin");
// importuję odpowiedni plugin
module.exports = function (env = {}) {
  const { production: isProd = false } = env;

  return {
    entry: "./src/app.js",
    // definiuję plik wejściowy
    mode: isProd ? "production" : "development",
    // definiuję tryb pracy webpacka
    devtool: isProd ? false : "eval-cheap-module-source-map",
    // definiuję identyfikację kodu źródłowego
    output: {
      path: path.resolve(__dirname, "build"),
      // definiuję ścieżkę wyjściową
      filename: "app.[hash].js",
      // definiuję nazwę pliku wyjściowego
      clean: true,
    },
    target: "web",
    module: {
      rules: [
        {
          test: /\.js$/,
          // określam, jakie pliki
          // będą brane pod uwagę
          exclude: /node_modules/,
          // określam wykluczenia
          use: "babel-loader",
          // określam, jaki [loader]
          // ma być wykorzystany
        },
        {
          test: /\.css$/,
          // tylko pliki z rozszerzeniem .css
          exclude: /node_modules/,
          // wykluczam pliki zwierające
          // wpisany ciąg znaków w ścieżce
          use: [
            isProd ? CssWebpackPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: isProd ? false : true,
              },
            },
          ],
          // określam kolejność wykorzystanych
          // loaderów, tj. od lewej do prawej
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          // dodaję rozszerzenia obrazów
          type: "asset/resource",
          // określam typ plików jako zasoby
          generator: {
            type: "images/[name].[contenthash][ext]",
          },
          // definiuję ścieżkę wyjściową i nazwę pliku wyjściowego
        },
      ],
      // obecnie brak dodatkowych ustawień
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        // wskazuję plik źródłowy
        filename: "index.html",
        // określam nazwę dla pliku
      }),
      new CssWebpackPlugin({
        filename: "[name].[hash].css",
        // określam nazwę pliku
      }),
    ],
  };
};
// eksportuję ustawienia dla webpacka
