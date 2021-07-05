/*
 * @Author: your name
 * @Date: 2021-03-02 21:39:50
 * @LastEditTime: 2021-06-16 22:29:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoProject\src\page\pageConfig.js
 */

import Home from "./Home";
import PeopleDetail from "./PeopleDetail";
import ComponentTest from "./ComponentTest";
import FormEdit from "./FormEdit";
const routeConfig = [
  {
    path: "/home",
    component: Home,
  },
  { path: "/FormEdit", component: FormEdit },
  { path: "/PeopleDetail", component: PeopleDetail },
  { path: "/componentTest", component: ComponentTest },
];
export default routeConfig;
