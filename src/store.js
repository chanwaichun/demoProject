/*
 * @Author: your name
 * @Date: 2020-11-23 22:51:35
 * @LastEditTime: 2020-11-23 22:54:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-demo\src\store\store.js
 */
import reducer from './reducer.js'
import { createStore } from 'redux'  // 引入createStore方法
const store = createStore(reducer)          // 创建数据存储仓库
export default store     