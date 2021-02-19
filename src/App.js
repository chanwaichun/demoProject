/*
 * @Author: your name
 * @Date: 2020-10-29 15:00:14
 * @LastEditTime: 2021-02-19 11:21:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-demo\src\App.js
 */

import React, { useEffect, useSetState } from "react";
import axios from "axios";
import store from "./store";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Layout } from "antd";
import VerticalMenu from "./component/VerticalMenu/index";
import HoritionMenu from "./component/HoritionMenu/index";
import Loading from "./component/Loading/index";
import Breadcrumb from "./component/Breadcrumb/index";
import Home from "./page/home";
import "antd/dist/antd.less";
// import "./App.css";
const { Header, Content, Sider } = Layout;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = store.getState();
    console.log(this.state);
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }
  componentDidMount() {
    setTimeout(() => {
      this.storeDispatch("changeLoading", false);
      this.storeDispatch("changeData", [{ key: "index", title: "首页" }]);
    }, 1000);

  }
  storeChange() {
    this.setState({ ...store.getState() });
  }
  storeDispatch(type, value) {
    const action = {
      type,
      value,
    };
    store.dispatch(action);
  }
  render() {
    return (
      <div className="cc-layout">
        <Router basename="/">
          <Layout>
            {/* 导航栏 */}
            <Header className="header">
              <div className="logo" />
              {HoritionMenu([
                { key: "1", name: "nav1", link: "/home" },
                { key: "2", name: "nav2", link: "/pageOne" },
                { key: "3", name: "nav3", link: "/pageTwo" },
              ])}
            </Header>
            <Layout>
              <Sider width={200} className="site-layout-background">
                <VerticalMenu
                  menuData={[
                    {
                      key: "sub1",
                      title: "title",
                      children: [{ key: "1", content: "option" }],
                    },
                  ]}
                ></VerticalMenu>
              </Sider>
              <Layout style={{ paddingTop: 24 }}>
                <Content
                  className="site-layout-background"
                  style={{
                    padding: "0 24px 24px 24px",
                    margin: 0,
                    minHeight: "calc(100vh - 64px)",
                  }}
                >
                  <Breadcrumb />
                  <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/pageTwo" component={Home} />
                    <Route path="/pageOne" component={Home} />
                    <Redirect to="/home" />
                  </Switch>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
