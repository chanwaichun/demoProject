/*
 * @Author: your name
 * @Date: 2021-06-06 21:36:39
 * @LastEditTime: 2021-06-06 22:33:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoProject\src\page\ComponentTest\store.js
 */
import React, { createContext, useReducer } from "react";

// 定义名字方便改名
const contextName = "ComponentTestContext";
const manageInfo = {};
manageInfo[contextName] = createContext();
const Context = manageInfo[contextName];
const initialValue = {
  name: "小明",
  unitName: "惠州市局",
  unitCode: "199708021714",
};
function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "a":
      return { ...state, name: action.name };
    default:
      return state;
  }
}
const ComponentTestStore = (props) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, reducer, ComponentTestStore };
