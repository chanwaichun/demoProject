/*
 * @Author: your name
 * @Date: 2020-11-23 22:53:32
 * @LastEditTime: 2021-02-23 22:58:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-demo\src\reducer.js
 */
const defaultState = {
  isLogin: false,
  isLoading: true,
  data: [],
}; //默认数据
export default (state = defaultState, action) => {
  //就是一个方法函数
  switch (action.type) {
    case "changeLoading":
      return { ...state, isLoading: action.value };
      break;
    case "changeData":
      return { ...state, data: action.value };
      break;
    default:
      return state;
  }
};
