module.exports = (isDev) => {
  return {
    preserveWhitepace: true,
    extractCSS: !isDev, // 将css文件单独打包到一个文件中
    cssModules: {
      localIdentName: isDev ? "[path]-[name]-[hash:base64:5]" : "[hash:base64:5]",
      camelCase: true
    },
    // hotReload: false // 默认是开启，
  }
}