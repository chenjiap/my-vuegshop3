/* 

必须在入口文件即main.js引入  ，即让下面所有执行一遍


使用mockjs提供mock数据接口
Mock.mock(url, template): 
  根据指定的模板生成随机的json数据
  mock监视的url地址, 一旦我们ajax请求这个url, mock会进行拦截, 返回生成的随机json数据
*/
import Mock from 'mockjs'//百度搜索mock.js出文档
import data from './data.json' // data是js对象  因为webpack内置json-loader 解析了  

// 提供mock接口: 商品列表
Mock.mock('/goods', {code: 0, data: data.goods})
// 提供mock接口: 评价列表
Mock.mock('/ratings', {code: 0, data: data.ratings})  
// 提供mock接口: 商家信息
Mock.mock('/info', {code: 0, data: data.info})

console.log('mock-srever...')
// export default ??   什么都不用暴露

/*
  {code: 0, data: 数据}  {code: 1, msg: 'xxx'}
*/

