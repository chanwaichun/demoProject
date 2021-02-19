/*
 * @Author: your name
 * @Date: 2021-01-18 22:54:20
 * @LastEditTime: 2021-02-18 14:33:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-demo\src\component\Menu\index.js
 */
import React, { Component } from "react";
import { Menu } from "antd";
import {
  UserOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;
export default class VerticalMenu extends Component {
  constructor(props) {
    super(props);
    this.menuData = this.props.menuData.map(item=>{
      return {...item,icon: <UserOutlined />}
    })

  }
  render() {
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        {this.menuData.map((item) => {
          return (
            <SubMenu title={item.title}>
              {item.children.map((item, index) => {
                return (
                  <Menu.Item key={index + 1}>
                    {!item.content ? `内容${index + 1}` : item.content}
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        })}
      </Menu>
    );
  }
}
