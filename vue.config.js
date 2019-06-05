module.exports = {
    configureWebpack: {
        resolve: {
          alias: {
            'vue$': 'vue/dist/vue.esm.js' 
          }
        }
       
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          pathRewrite: { // 重写路径: 去掉路径中开头的'/api'
          '^/api': ''
        }
        }
        
      }
    }
}