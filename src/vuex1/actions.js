/* 
一个包含n个用来间接更新状态数据的方法的对象
*/
import {
    reqAddress,
    reqCategorys,
    reqShops,
    reqLogout
  } from '../api'
  
  import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RESET_USER
  } from './mutation-types'
  
  export default {
  
    /* 
    获取地址的异步action
    */
    async getAddress ({commit, state}) {
      const {longitude, latitude} = state
      // 1. 执行异步(发ajax请求获取数据)
      const result = await reqAddress(latitude,longitude)
      // 2. 成功后, 提交mutation更新状态数据
      if (result.code===0) {
        const address = result.data
        commit(RECEIVE_ADDRESS, address)
      }
    },
  
    /* 
    获取商品分类列表的异步action
    */
    async getCategorys ({commit}) {
      // 1. 执行异步(发ajax请求获取数据)
      const result = await reqCategorys()
      // 2. 成功后, 提交mutation更新状态数据
      if (result.code===0) {
        const categorys = result.data
        commit(RECEIVE_CATEGORYS, categorys)
      }
    },
  
    /* 
    获取商家列表的异步action
    */
    async getShops ({commit, state}) {
      const {longitude, latitude} = state
      // 1. 执行异步(发ajax请求获取数据)
      const result = await reqShops(latitude,longitude)
      // 2. 成功后, 提交mutation更新状态数据
      if (result.code===0) {
        const shops = result.data
        commit(RECEIVE_SHOPS, shops)
      }
    },



    /* 
  退出登陆的异步action
  */
  async logout ({commit}) {
    // 发退出登陆的ajax请求
    const result = await reqLogout()
    // 成功后重置user数据
    if (result.code===0) {
      commit(RESET_USER)
    }
  }
  }