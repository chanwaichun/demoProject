/*
 * @Author: your name
 * @Date: 2020-10-29 15:00:14
 * @LastEditTime: 2023-02-07 19:37:01
 * @LastEditors: chanwaichun chanwaichuncc@163.com
 * @Description: In User Settings Edit
 * @FilePath: \demoProject-react\src\App.js
 */
import React, { Component, createContext } from "react";
import MainRoute from "@/page/MainRoute";
import DefaultRoute from "@/page/DefaultRoute";
import Login from "@/page/Login";
import NoMatch from "@/page/NoMatch/index";
import store from "@/store";
import route from "@/route/index.js";
import { Modal } from "antd";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "antd/dist/antd.less";

const appStore = createContext();
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    console.log(this.state);
  }
  onOk() {
    window.location.reload();
  }
  onCancel() {
    this.setState({ show: false });
  }
  componentDidMount() {
    const outPutMessage = (e) => {
      // alert('adasdasdas')
      this.setState(
        { show: true }.then(() => {
          return false;
        })
      );
    };
    window.onbeforeunload = outPutMessage;
  }
  componentWillUnmount() {
    window.onbeforeunload = null;
  }

  render() {
    return (
      <appStore.Provider value={{ publicParams: "公共参数" }}>
        {
          <Modal
            title="Basic Modal"
            visible={this.state.show}
            onOk={this.onOk}
            onCancel={this.onCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        }
        <Router basename="/">
          {/* {!this.state.isLogin ? <Redirect to="/login" /> : null} */}
          <Switch>
            {route.map((item, index) => (
              <Route key={index} {...item} />
            ))}
            {/* <Redirect to="/main"></Redirect> */}
            {/* <Route component={NoMatch}></Route> */}
          </Switch>
        </Router>
      </appStore.Provider>
    );
  }
}
