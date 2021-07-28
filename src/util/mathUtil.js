/*
 * @Author: your name
 * @Date: 2021-07-28 23:12:44
 * @LastEditTime: 2021-07-28 23:28:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoProject\src\util\mathUtil.js
 */
const mathUtil = {
  // 获取随机数
  getRandomNum: function () {
    return Math.ceil(
      new Date().getTime() / Math.ceil(Math.random() * Math.random() * 1000)
    );
  },
};
export default mathUtil;
