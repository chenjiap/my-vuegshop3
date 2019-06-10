
const path = require('path')
function resolve(dir) {
  // return path.join(__dirname, '..', dir)
  return path.join(__dirname, dir)//当前路径的父路径    和当前路径拼接
}

module.exports = {
    configureWebpack: {
        resolve: {
          alias: {
            'vue$': 'vue/dist/vue.esm.js' ,//引入vue实际上找的是带编译的vue的版本
            'components': resolve('src/components'),// 默认会去modules去找   但是此地让找components去指定地方找

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