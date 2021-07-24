/*
 * @Author: your name
 * @Date: 2021-07-24 13:11:56
 * @LastEditTime: 2021-07-24 21:49:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoProject\src\component\Chart\index.js
 */

import React, { useEffect } from "react";
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, LineChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
} from "echarts/components";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";
import "./index.less";

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  LineChart,
  CanvasRenderer,
]);
function Chart(props) {
  // const []
  // const  = useResize();
  let { data, height, width } = props;
  useEffect(() => {
    // 接下来的使用就跟之前一样，初始化图表，设置配置项
    var myChart = echarts.init(document.getElementById("chartContent"));
    window.addEventListener("resize", function (e) {
      console.log(e);
      myChart.resize();
    });

    myChart.setOption(setConfigByType("line"));
    return () => {
      myChart.dispose();
    };
  }, [data]);
  function setConfigByType(type, data) {
    const publicConfig = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
        },
      },
      title: {
        text: "ECharts 入门示例",
      },

      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "line",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
    let config = { ...publicConfig };
    return config;
  }

  return (
    <div className="chartContainer">
      <div id="chartContent"></div>
    </div>
  );
}
export default Chart;
