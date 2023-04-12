const {
  resolve
} = require('path')

module.exports = () => ({
  enhanceAppFiles: resolve(__dirname, "./bin/enhanceAppFile.js"),
  globalUIComponents: "GoTop"
});
