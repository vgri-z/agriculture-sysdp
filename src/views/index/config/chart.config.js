import * as echarts from "echarts";
export const lbOptions1 = {
  grid: {
    top: "30%",
    left: "10%",
    right: "6%",
    bottom: "5%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["2018", "2019", "2020", "2021", "2022"],
    axisLine: {
      show: true,
      lineStyle: {
        color: "#2b2f35",
      },
    },
    axisLabel: {
      color: "#fff",
    },
    axisTick: {
      lineStyle: {
        color: "#2b2f35",
      },
    },
  },
  yAxis: {
    type: "value",
    name: "作业面积(亩)",
    nameTextStyle: {
      color: "#fff",
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "#2b2f35",
      },
    },
    axisLabel: {
      color: "#fff",
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: "#2b2f35",
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "#152b66",
      },
    },
  },
  series: [
    {
      data: [0, 0, 0, 90500, 420000],
      type: "line",
      symbol: "circle",
      symbolSize: "8",
      lineStyle: {
        color: "#0bebf7",
      },
      itemStyle: {
        color: "transparent",
        borderColor: "#0bebf7",
        borderWidth: 1,
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
          {
            offset: 0,
            color: "#246490",
          },
          {
            offset: 1,
            color: "#2c3858",
          },
        ]),
      },
    },
  ],
};

export const lbOptions2 = {
  color: ["#fe8463", "#4dd573", "#f3535b"],
  tooltip: {
    trigger: "item",
  },
  title: {
    text: "2022年",
    textStyle: {
      color: "#0dd5dd",
      fontSize: 16,
    },
    top: "center",
    left: "center",
  },
  legend: {
    show: true,
    itemHeight: 10,
    itemWidth: 10,
    orient: "vertical", // 设置图例的方向
    right: "center",
    bottom: "5%",
    itemGap: 10, // 设置图例的间距
    textStyle: {
      color: "#fff",
      fontSize: 12,
    },
    formatter: function (name) {
      var data = lbOptions2.series[0].data;
      var total = 0;
      var tarValue;
      for (var i = 0; i < data.length; i++) {
        total += data[i].value;
        if (data[i].name == name) {
          tarValue = data[i].value;
        }
      }
      var v = tarValue;
      var p = Math.round((tarValue / total) * 100).toFixed(2);
      return `${name}  ${p}%`;
    },
  },
  series: [
    {
      name: "各类作业统计",
      type: "pie",
      radius: ["40%", "60%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: "整地作业" },
        { value: 735, name: "其他作业" },
        { value: 300, name: "施肥作业" },
      ],
    },
  ],
};

export const mbrOptions = {
  grid: {
    top: "30%",
    left: "10%",
    right: "6%",
    bottom: "5%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["水稻", "玉米"],
    axisLine: {
      show: true,
      lineStyle: {
        color: "#2b2f35",
      },
    },

    axisLabel: {
      color: "#fff",
    },
    axisTick: {
      lineStyle: {
        color: "#2b2f35",
      },
    },
  },
  yAxis: {
    type: "value",
    name: "单位(亩)",
    nameTextStyle: {
      color: "#fff",
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "#2b2f35",
      },
    },
    axisLabel: {
      color: "#fff",
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: "#2b2f35",
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "#152b66",
      },
    },
  },
  series: [
    {
      data: [950, 220],
      type: "line",
      symbol: "circle",
      symbolSize: "8",
      lineStyle: {
        color: "#56bc86",
      },
      itemStyle: {
        color: "transparent",
        borderColor: "#56bc86",
        borderWidth: 1,
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
          {
            offset: 0,
            color: "#163339",
          },
          {
            offset: 1,
            color: "#336f56",
          },
        ]),
      },
    },
  ],
};

export const rbOptions1 = {
  grid: {
    top: "30%",
    left: "10%",
    right: "6%",
    bottom: "5%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: ["2019", "2020"],
    axisLine: {
      show: true,
      lineStyle: {
        color: "#0a4ca5",
      },
    },

    axisLabel: {
      color: "#fff",
    },
    axisTick: {
      lineStyle: {
        color: "#0a4ca5",
      },
    },
  },
  yAxis: {
    type: "value",
    axisLine: {
      show: false,
      lineStyle: {
        color: "#2b2f35",
      },
    },
    axisLabel: {
      color: "#fff",
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "#17254a",
      },
    },
  },
  series: [
    {
      data: [50, 36],
      type: "bar",
      barWidth: 20,
      showBackground: true,
      backgroundStyle: {
        color: "#06336a",
      },
      itemStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          1,
          0,
          0,
          [
            {
              offset: 0,
              color: "#27ffff", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#0199ff", // 100% 处的颜色
            },
          ],
          false
        ),
      },
    },
  ],
};

export const rbOptions2 = {
  color: ["#fe8463", "#4dd573", "#f3535b"],
  tooltip: {
    trigger: "item",
  },
  legend: {
    show: true,
    itemHeight: 10,
    itemWidth: 10,
    icon: "circle",
    orient: "vertical", // 设置图例的方向
    right: "center",
    bottom: "5%",
    itemGap: 10, // 设置图例的间距
    textStyle: {
      color: "#fff",
      fontSize: 10,
    },
    formatter: function (name) {
      var data = rbOptions2.series[0].data;
      var total = 0;
      var tarValue;
      for (var i = 0; i < data.length; i++) {
        total += data[i].value;
        if (data[i].name == name) {
          tarValue = data[i].value;
        }
      }
      var v = tarValue;
      var p = Math.round((tarValue / total) * 100).toFixed(2);
      return `${name}  ${p}%`;
    },
  },
  series: [
    {
      name: "各类作业统计",
      type: "pie",
      roseType: "area",
      radius: ["30%", "50%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 100, name: "人力成本" },
        { value: 67, name: "农资成本" },
        { value: 30, name: "其他成本" },
      ],
    },
  ],
};

export const mblOptions = {
  color: ["#63c9ec", "#e61e05"],
  tooltip: {
    trigger: "axis",
  },

  grid: {
    left: "15%",
    right: "20%",
    bottom: "10%",
    top: "20%",
    containLabel: true,
  },
  xAxis: {
    name: "年份",
    nameTextStyle: {
      color: "#fff",
    },
    type: "category",
    boundaryGap: true,
    data: ["2021", "2022", "2023", "2024", "2025", "2026"],
    axisLine: {
      show: true,
      lineStyle: {
        color: "#2b2f35",
      },
    },
    axisLabel: {
      color: "#fff",
    },
    axisTick: {
      lineStyle: {
        color: "#2b2f35",
      },
    },
  },
  yAxis: {
    name: "单位：公斤",
    nameTextStyle: {
      color: "#ffffff",
      fontSize: 12,
    },
    type: "value",
    axisLine: {
      show: true,
      lineStyle: {
        color: "#2b2f35",
      },
    },
    axisLabel: {
      color: "#fff",
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: "#2b2f35",
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "#152b66",
      },
    },
  },
  series: [
    {
      name: "年回收总量",
      type: "line",
      symbol: "circle",
      symbolSize: 8,
      lineStyle: {
        color: "#0bebf7",
      },
      itemStyle: {
        color: "transparent",
        borderColor: "#0bebf7",
        borderWidth: 1,
      },
      data: [30, 23, 45, 67, 89, 90],
      areaStyle: {
        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
          {
            offset: 0,
            color: "#246490",
          },
          {
            offset: 1,
            color: "#2c3858",
          },
        ]),
      },
    },
  ],
};
