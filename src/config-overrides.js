/*
 * @Author: your name
 * @Date: 2021-04-20 00:41:58
 * @LastEditTime: 2021-04-24 17:40:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hooks-react\config-overrides.js
 */
const { override, fixBabelImports } = require("customize-cra");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  })
);
