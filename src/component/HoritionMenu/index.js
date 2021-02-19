/*
 * @Author: your name
 * @Date: 2021-02-18 10:54:31
 * @LastEditTime: 2021-02-18 15:00:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-demo\src\component\Horition\index.js
 */
import React from "react";
import {Link} from 'react-router-dom'
import { Menu } from "antd";
function HoritionMenu(menuData) {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
      {menuData.map((item) => {
        return <Menu.Item key={item.key}><Link to={item.link}>{item.name}</Link></Menu.Item>;
      })}
    </Menu>
  );
}
export default HoritionMenu;
