export const options1 = {
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
    name: "年份",
    nameTextStyle: {
      color: "#fff",
    },
    type: "category",
    boundaryGap: true,
    data: ["2021", "2022", "2023", "2024", "2025", "2026"],
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
    name: "单位：公斤",
    nameTextStyle: {
      color: "#ffffff66",
      fontSize: 16,
    },
    type: "value",
    splitNumber: 2,
    min: 100,
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
      name: "年回收总量",
      type: "line",
      symbol: "circle",
      symbolSize: 7,
      data: [],
    }
  ],
};
