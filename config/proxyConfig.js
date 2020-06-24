module.exports = {
  proxyList: {
    '/api': {
      target: 'https://apitest.ipcn.xyz/', // 接口域名
      changeOrigin: true,
      pathRewrite: {
        '/api': '/api'
      }
    }
  }
}
