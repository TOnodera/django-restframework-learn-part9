const path = require("path");

module.exports = {
  outputDir: "../static",
  indexPath: "../templates/index.html",
  publicPath: process.env.NODE_ENV == "production" ? "/static/" : "/",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "/src"),
      },
    },
  },
};
