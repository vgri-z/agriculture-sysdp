export const options1 = {
  color: ["#1fdaec"],
  grid: {
    top: "10%",
    left: "8%",
    right: "5%",
    bottom: "13%",
  },
  xAxis: {
    type: "category",
    data: ["东塔镇", "郝家桥镇", "崇兴镇", "宁东镇", "马家滩镇", "临河镇", "梧桐树乡", "白土岗乡", "灵武农场"],
    axisTick: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        color: "#ffffff",
      },
    },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      color: "#fff",
    },
    splitLine: {
      lineStyle: {
        color: "#2d3047",
      },
    },
  },
  series: [
    {
      data: [5500, 5500, 4200, 1900, 1500, 1400, 4200, 1050, 100],
      type: "bar",
      barWidth: 27,
      showBackground: true,
      backgroundStyle: {
        color: "rgba(255, 255, 255, 0.05)",
      },
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
    name: "单位：吨",
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
      name: "2022",
      type: "line",
      symbol: "circle",
      symbolSize: 7,
      data: [110, 140, 205, 130, 240, 290],
    },
    {
      name: "2021",
      type: "line",
      symbol: "circle",
      symbolSize: 7,
      data: [180, 150, 230, 200, 250, 240, 245, 195, 205, 190, 200, 198],
    },
  ],
};
export const options3 = {
  color: ["#ff3333", "#4bc559", "#ead500", "#00ccff", "#6600ff"],
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "center",
    right: "10%",
    orient: "vertical",
    itemWidth: 35,
    itemHeight: 17,
    borderRadius: 7,
    itemGap: 30,
    textStyle: {
      color: "#fff",
    },
  },
  series: [
    {
      name: "可回收物统计",
      type: "pie",
      radius: ["40%", "70%"],
      center: ["30%", "50%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      labelLine: {
        show: true,
      },
      data: [
        { value: 1048, name: "畜禽粪污" },
        { value: 735, name: "农膜" },
        { value: 580, name: "农药包装" },
        { value: 484, name: "农作物秸秆" },
        { value: 300, name: "其他" },
      ],
    },
  ],
};
export const options4 = {
  color: ["#1950ff", "#4bc559", "#3ade9a", "#ffe92c", "#5677fc", "#22b9ea", "#ff9323", "#337850", "#fa3e7b", "#ff7f7c"],
  tooltip: {
    trigger: "item",
  },
  legend: [
    {
      top: "center",
      right: "30%",
      orient: "vertical",
      itemWidth: 14,
      itemHeight: 15,
      itemGap: 20,
      textStyle: {
        color: "#fff",
      },
      data: ["秸秆", "残株", "落叶", "果实外壳", "藤蔓树枝"],
    },
    {
      top: "center",
      right: "10%",
      orient: "vertical",
      itemWidth: 14,
      itemHeight: 15,
      itemGap: 20,
      textStyle: {
        color: "#fff",
      },
      data: ["畜禽粪污", "栏圈铺垫物", "农产品加工废弃物", "人粪尿", "其他生活废弃物"],
    },
  ],
  series: [
    {
      name: "农废产生统计",
      type: "pie",
      radius: ["30%", "60%"],
      center: ["30%", "50%"],
      avoidLabelOverlap: false,
      label: {
        show: true,
        color: "#fff",
        fontSize: 20,
        position: "center",
        formatter: "农废统计",
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      labelLine: {
        show: true,
      },
      data: [
        { value: 1048, name: "秸秆" },
        { value: 735, name: "残株" },
        { value: 580, name: "落叶" },
        { value: 484, name: "果实外壳" },
        { value: 300, name: "藤蔓树枝" },
        { value: 1300, name: "畜禽粪污" },
        { value: 280, name: "栏圈铺垫物" },
        { value: 450, name: "农产品加工废弃物" },
        { value: 560, name: "人粪尿" },
        { value: 390, name: "其他生活废弃物" },
      ],
    },
  ],
};
