/*
 * @Author: your name
 * @Date: 2021-02-18 10:23:20
 * @LastEditTime: 2021-02-18 15:13:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-demo\src\component\Breadcrumb\index.js
 */
import React, { useEffect } from "react";
import { Breadcrumb } from "antd";
function CustomBreadcrumb(props) {
  let { show, arr } = props;
  useEffect(() => {
    console.log(props);
    return () => {
      console.log("cleanUp");
    };
  });
  return show ? (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  ) : null;
}
export default CustomBreadcrumb;
