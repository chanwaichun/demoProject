/*
 * @Author: your name
 * @Date: 2021-02-20 21:19:43
 * @LastEditTime: 2021-04-24 18:20:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoProject\src\page\mainRoute_bak.js
 */
/*
 * @Author: your name
 * @Date: 2020-10-29 15:00:14
 * @LastEditTime: 2021-02-19 15:27:56
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
import { Home, PeopleManage, ComponentTest } from "../pageConfig";

// import "./App.css";
const { Header, Content, Sider } = Layout;
function MainRoute() {
  return (
    <div className="cc-layout">
      <Router basename="/main">
        <Layout>
          {/* 导航栏 */}
          <Header className="header">
            <div className="logo" />
            {HoritionMenu([
              { key: "1", name: "nav1", link: "/home" },
              { key: "2", name: "nav2", link: "/peopleManange" },
              { key: "3", name: "nav3", link: "/componentTest" },
            ])}
          </Header>

          <Layout>
            <Content
              className="site-layout-background"
              style={{
                padding: 0,
                margin: 0,
                minHeight: "calc(100vh - 64px)",
              }}
            >
              <Breadcrumb />
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/peopleManange" component={PeopleManage} />
                <Route path="/componentTest" component={ComponentTest} />
                <Redirect to="/home" />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default MainRoute;
