import * as echarts from "echarts";
import ningxia from "./mapData.json";

echarts.registerMap("宁夏", ningxia); //注册地图
var geoCoordMap = {
  灵武市: [106.27, 38.47],
  银川市: [106.27, 38.47],
  石嘴山市: [106.39, 39.04],
  吴忠市: [106.21, 37.99],
  固原市: [106.28, 36.01],
  中卫市: [105.18, 37.51],
};

var data = [
  {
    name: "灵武市",
    value: 152,
  },
  {
    name: "银川市",
    value: 153,
  },
  {
    name: "石嘴山市",
    value: 154,
  },
  {
    name: "吴忠市",
    value: 157,
  },
  {
    name: "固原市",
    value: 159,
  },
  {
    name: "中卫市",
    value: 160,
  },
];

var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push(geoCoord.concat(data[i].value));
    }
  }
  return res;
};

const nxMapOption = {
  tooltip: {
    trigger: "item",
    formatter: function (params, ticket, callback) {
      var datasCssStyle = '<div style="text-align:center;float:right;margin:0 0.75vw">';
      var initCssStyle = '<div style="text-align:center;float:right;margin:0 2.75vw">';
      var lineName =
        "xxxxxx1" +
        ":" +
        datasCssStyle +
        0 +
        "</div>" +
        "<br>" +
        "xxxxxx2" +
        ":" +
        datasCssStyle +
        0 +
        "</div>" +
        "<br>" +
        "xxxxxx3" +
        ":" +
        datasCssStyle +
        0 +
        "</div>" +
        "<br>" +
        "xxxxxx4" +
        ":" +
        datasCssStyle +
        0 +
        "</div>" +
        "<br>";
      return lineName;
    },
    //虚化悬浮窗
    // extraCssText:
    //   "pointer-events:none;width:20.58vw;height:10.81vw;background:#FFDEAD;color:#333333;line-height:1.9vw;font-size:1.04vw;border-radius:0;",
  },
  visualMap: {
    type: "continuous",
    calculable: true,
    show: false,
    realtime: false,
    inRange: {
      color: "#F4A460",
      borderColor: "#3bd8ff", //边框颜色
      borderWidth: 10,
    },
  },
  geo: {
    map: "宁夏",
    label: {
      show: true,
      color: "black",
      fontSize: 20,
    },
    itemStyle: {
      areaColor: "#407c99",
      borderColor: "#3bd8ff",
      borderWidth: 2,
    },
    emphasis: {
      //地图选中（地图鼠标悬浮）
      label: {
        show: true,
        color: "black",
      },
      itemStyle: {
        areaColor: "#20cdf9",
      },
    },
    left: "center",
    top: "center",
  },
  series: [
    {
      name: "省市数据",
      mapType: "宁夏", // 自定义扩展图表类型
      type: "scatter",
      coordinateSystem: "geo",
      // symbol: "circle",
      data: convertData(data),
      symbolSize: 0,
      label: {
        show: false,
      },
      emphasis: {
        show: false,
        itemStyle: {
          color: "#5ccbb1",
        },
      },
      itemStyle: {
        borderColor: "white",
        borderWidth: 2,
      },
    },
  ],
};

export { nxMapOption };
