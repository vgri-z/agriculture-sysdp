export const options2 = {
  color: ["#63c9ec", "#42c65e", "#e61e05", "#c7bb09"],
  tooltip: {
    trigger: "axis",
  },
  legend: [
    {
      data: ["地块一", "地块二", "地块三", "地块四"],
      textStyle: {
        color: "#fff",
        fontSize: 12,
      },
      itemWidth: 8,
      itemHeight: 8,
      borderRadius: 4,
      icon: "circle",
      itemGap: 50,
      bottom: 30,
    },
  ],
  grid: {
    left: "10%",
    right: "8%",
    bottom: "20%",
    top: "13%",
    containLabel: true,
  },
  xAxis: {
    nameTextStyle: {
      color: "#fff",
    },
    type: "category",
    boundaryGap: true,
    data: ["定制", "用肥", "用药", "水量信息", "农残检测"],
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
    splitNumber: 6,
    max: 48,
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
      show: true,
      lineStyle: {
        color: "#212334",
      },
    },
  },
  series: [
    {
      name: "地块一",
      type: "line",
      data: [17, 28, 35, 21, 23],
    },
    {
      name: "地块二",
      type: "line",
      data: [],
    },
    {
      name: "地块三",
      type: "line",
      data: [10, 24, 46, 16.5, 14],
    },
    {
      name: "地块四",
      type: "line",
      data: [],
    },
  ],
};

export const options3 = {
  color: ["#1950ff", "#00cbff", "#ead400", "#ff3333"],
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    top: "center",
    right: "10%",
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
      name: "生长周期分类展示",
      type: "pie",
      radius: "50%",
      center: ["40%", "50%"],
      data: [
        { value: 1048, name: "3个月" },
        { value: 735, name: "6个月" },
        { value: 580, name: "9个月" },
        { value: 484, name: "12个月" },
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
