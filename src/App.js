/*
 * @Author: your name
 * @Date: 2020-10-29 15:00:14
 * @LastEditTime: 2021-06-15 23:00:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoProject\src\App.js
 */
import React, { Component, createContext } from "react";
import MainRoute from "./page/MainRoute";
import Login from "./page/Login";
import NoMatch from "./page/NoMatch/index";
import store from "./store";
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
    this.state = store.getState();
    console.log(this.state);
  }

  render() {
    return (
      <appStore.Provider value={{ publicParams: "公共参数" }}>
        <Router basename="/">
          {/* {!this.state.isLogin ? <Redirect to="/login" /> : null} */}
          <Switch>
            
            <Route path="/main" component={MainRoute} />
            <Route exact path="/login" component={Login} />
            {/* <Redirect to="/main"></Redirect> */}
            {/* <Route component={NoMatch}></Route> */}
          </Switch>
        </Router>
      </appStore.Provider>
    );
  }
}
