const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,devServer: {
    port: 8000,
    proxy: {
      '^/api/': {
        target: 'https://localhost:5001/',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/api' },
        secure: false,
        headers: {
          Connection: 'keep-alive'
        },
      },
    },
  }
})