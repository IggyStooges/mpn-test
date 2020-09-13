const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

const filePath = {
  src: {
    script: "./assets/js/script.js",
    style: "./assets/scss/style.scss",
    icons: "./assets/icons/icons.js",
  },
  dist: "./public/",
};

function createJSModule() {
  return {
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  };
}

function createSCSSModule() {
  return {
    test: /\.scss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          url: false,
        },
      },
      {
        loader: "postcss-loader",
        options: {
          plugins: [autoprefixer()],
          sourceMap: true,
        },
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: true,
        },
      },
    ],
  };
}

function createSVGIconsModule() {
  return {
      resource: {
          test: /\.svg$/
      },
      issuer: {
          include: /icons\.js$/
      },
      use: [
          {
              loader: 'svg-sprite-loader',
              options: {
                  extract: true,
                  spriteFilename: './img/icon-font/icon-font.svg',
                  symbolId: filePath => 'icon-' + path.basename(filePath).split(".")[0]
              }
          },
          {
              loader: 'svgo-loader'
          }
      ]
  };
}



module.exports = {
  entry: [filePath.src.script, filePath.src.style, filePath.src.icons],
  output: {
    filename: "./js/script.js",
    path: path.resolve(__dirname, filePath.dist),
  },
  module: {
    rules: [createJSModule(), createSCSSModule(), createSVGIconsModule()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/style.css",
    }),
    new SpriteLoaderPlugin({
      plainSprite: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./assets/html/",
          to: ".",
        },
        {
          from: "./assets/img/",
          to: "./img/",
        },
      ],
    }),
  ],
};
