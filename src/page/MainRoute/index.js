/*
 * @Author: your name
 * @Date: 2020-10-29 15:00:14
 * @LastEditTime: 2021-07-06 00:06:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-demo\src\App.js
 */

import React, { useEffect, useSetState } from "react";
import axios from "axios";
import store from "../../store";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Layout } from "antd";
import VerticalMenu from "../../component/VerticalMenu/index";
import HoritionMenu from "../../component/HoritionMenu/index";
import Loading from "../../component/Loading/index";
import Breadcrumb from "../../component/Breadcrumb/index";
import pageConfig from "../pageConfig";
import "./index.less";
// import "./App.css";
const { Header, Content, Sider } = Layout;
function MainRoute(props) {
  return (
    <div className="container-layout">
      <Router basename="/main">
        <Layout>
          {/* 导航栏 */}
          <Header className="header">
            {HoritionMenu([
              { key: "1", name: "首页", link: "/test" },
              { key: "2", name: "人员详情", link: "/peopleDetail" },
              { key: "3", name: "表单编辑", link: "/formEdit" },
              { key: "4", name: "测试组件页面", link: "/componentTest" },
              { key: "5", name: "游戏", link: "/game" },
            ])}
          </Header>

          <Layout>
            <Content
              className="site-layout-background custom-layout"
              style={{
                paddingTop: 64,
                margin: 0,
                minHeight: "100vh -  64px",
              }}
            >
              <Breadcrumb />
              <Switch>
                {pageConfig.map((item, index) => (
                  <Route
                    key={index}
                    path={`${item.path}`}
                    component={item.component}
                  />
                ))}

                {/* <Redirect to="/home" /> */}
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default MainRoute;
