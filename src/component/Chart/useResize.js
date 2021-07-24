/*
 * @Author: your name
 * @Date: 2021-07-24 14:04:20
 * @LastEditTime: 2021-07-24 14:08:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoProject\src\component\Chart\useResize.js
 */
import { useEffect } from "react";

export default function useResize(echarts) {
  useEffect(() => {
    document.addEventListener("resize", function () {
      echarts.resize();
    });
    return () => {
      document.removeEventListener("resize");
    };
  }, []);
}
