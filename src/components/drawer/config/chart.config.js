import * as echarts from "echarts";

export const options1 = {
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期天"],
    axisLabel: {
      color: "#fff",
    },
    axisLine: {
      lineStyle: {
        color: "#2c366a",
      },
    },
  },
  yAxis: {
    type: "value",
    name: "℃",
    nameTextStyle: {
      color: "#ffffff",
      fontSize: 16,
    },
    axisLine: {
      show: false,
      lineStyle: {
        color: "#14274f",
      },
    },
    axisLabel: {
      color: "#fff",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "#14274f",
      },
    },
  },
  series: [
    {
      data: [10, 20, 23, 19, 17, 29, 28],
      type: "line",
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgb(226, 143, 54)",
              },
              {
                offset: 1,
                color: "rgb(226, 143, 54, 0.3)",
              },
            ],
            false
          ),
        },
      },
      symbol: "circle",
      itemStyle: {
        normal: {
          color: "#f09e3e", //改变折线点的颜色
          lineStyle: {
            color: "#f09e3e", //改变折线颜色
          },
        },
      },
    },
  ],
};
