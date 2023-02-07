/*
 * @Author: your name
 * @Date: 2021-03-02 21:39:50
 * @LastEditTime: 2023-02-07 18:43:30
 * @LastEditors: chanwaichun chanwaichuncc@163.com
 * @Description: In User Settings Edit
 * @FilePath: \demoProject-react\src\page\pageConfig.js
 */
import React from "react";
import Home from "./Home";
import PeopleDetail from "./PeopleDetail";
import ComponentTest from "./ComponentTest";
import FormEdit from "./FormEdit";
import Game from "./Game";
const Test = React.lazy(() => import("./Test"));
const routeConfig = [
  {
    path: "/test",
    component: () => {
      return (
        <React.Suspense fallback={() => "loading..."}>
          <Test></Test>
        </React.Suspense>
      );
    },
  },
  // {
  //   path: "/home",
  //   component: Home,
  // },
  // { path: "/FormEdit", component: FormEdit },
  // { path: "/PeopleDetail", component: PeopleDetail },
  // { path: "/componentTest", component: ComponentTest },
  // { path: "/game", component: Game },
];
export default routeConfig;
