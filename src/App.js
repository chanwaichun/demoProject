/*
 * @Author: your name
 * @Date: 2020-10-29 15:00:14
 * @LastEditTime: 2021-03-02 21:35:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoProject\src\App.js
 */
import React, { Component } from "react";
import MainRoute from "./page/MainRoute";
import Login from "./page/Login";
import store from "./store";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "antd/dist/antd.less";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(this.state);
  }

  render() {
    return (
      <Router basename="/">
         {/* {!this.state.isLogin ? <Redirect to="/login" /> : null} */}
      
        <Route path="/" component={MainRoute} />
        {/* <Route  path="/login" component={Login} />   */}
       
      </Router>
    );
  }
}
