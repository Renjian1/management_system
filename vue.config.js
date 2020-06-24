module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://apitest.ipcn.xyz/', // 接口域名
        ws: true,
        changeOrigin: true
      }
    }
  }
}
