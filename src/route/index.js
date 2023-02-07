/*
 * @Author: chanwaichun
 * @Date: 2023-02-07 19:10:28
 * @LastEditors: chanwaichun chanwaichuncc@163.com
 * @LastEditTime: 2023-02-07 19:39:06
 * @FilePath: \demoProject-react\src\route\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import MainRoute from "@/page/MainRoute";
import DefaultRoute from "@/page/DefaultRoute";
import Login from "@/page/Login";
const route = [
  {
    path: "/",
    component: DefaultRoute,
    exact: true,
  },
  {
    path: "/main",
    component: MainRoute,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
];
export default route;
