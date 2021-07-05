/*
 * @Author: your name
 * @Date: 2021-02-18 10:54:31
 * @LastEditTime: 2021-06-15 23:03:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-demo\src\component\Horition\index.js
 */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
function HoritionMenu(menuData) {
  // 匹配路由防止页面刷新时key丢失
  function initialKey(menuData) {
    return (() => {
      let key = "1";
      menuData.some((item) => {
        if (
          window.location.href.includes(
            `${window.location.origin}/main${item.link}`
          )
        ) {
          key = item.key;
          return true;
        } else {
          return false;
        }
      });
      return key;
    })();
  }
  const [key, setKey] = useState(initialKey(menuData));

  useEffect(() => {
    setKey(initialKey(menuData));
  }, []);
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[key]}>
      {menuData.map((item) => {
        return (
          <Menu.Item key={item.key}>
            <Link to={item.link}>{item.name}</Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
}
export default HoritionMenu;
