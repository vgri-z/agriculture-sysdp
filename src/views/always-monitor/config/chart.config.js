export const options1 = {
  color: ["#1950ff", "#00cbff", "#ead400", "#ff3333"],
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    top: "center",
    right: "25%",
    itemWidth: 8,
    itemHeight: 8,
    borderRadius: 4,
    icon: "circle",
    itemGap: 30,
    textStyle: {
      color: "#fff",
    },
  },
  series: [
    {
      name: "农田生态系统管理",
      type: "pie",
      radius: "60%",
      center: ["30%", "50%"],
      data: [
        { value: 1048, name: "物理防治" },
        { value: 735, name: "化学防治" },
        { value: 580, name: "生态防治" },
        { value: 484, name: "其他" },
      ],
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      // emphasis: {
      //   itemStyle: {
      //     shadowBlur: 10,
      //     shadowOffsetX: 0,
      //     shadowColor: "rgba(0, 0, 0, 0.5)",
      //   },
      // },
    },
  ],
};

export const options2 = {
  color: ["#63c9ec", "#e61e05"],
  tooltip: {
    trigger: "axis",
  },
  grid: {
    left: "10%",
    right: "8%",
    bottom: "10%",
    top: "13%",
    containLabel: true,
  },
  xAxis: {
    name: "月份",
    nameTextStyle: {
      color: "#fff",
    },
    type: "category",
    boundaryGap: true,
    data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: "#fff",
    },
    axisLine: {
      lineStyle: {
        color: "#2d3047",
      },
    },
  },
  yAxis: {
    nameTextStyle: {
      color: "#ffffff66",
      fontSize: 16,
    },
    type: "value",
    splitNumber: 5,
    max: 50,
    axisLine: {
      show: true,
      lineStyle: {
        color: "#2d3047",
      },
    },
    axisLabel: {
      color: "#fff",
    },
    splitLine: {
      show: false,
    },
  },
  series: [
    {
      name: "2022",
      type: "line",
      symbol: "circle",
      symbolSize: 7,
      data: [12, 15, 23, 15, 32, 48, 31, 19, 23, 30, 24, 11],
    },
    {
      name: "2021",
      type: "line",
      symbol: "circle",
      symbolSize: 7,
      data: [20, 5, 31, 23, 40, 37, 39, 22, 25, 21, 22, 21],
    },
  ],
};
