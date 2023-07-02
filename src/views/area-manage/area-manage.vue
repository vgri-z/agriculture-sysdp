<template>
  <div class="area-manage" :style="{ background: individual.bgColor || `url(${individual.bgUrl}) no-repeat` }">
    <!-- <TopHeader :tabs="tabs" /> -->
    <new-header :currentIndex="5"></new-header>
    <div class="content">
      <div class="left">
        <div class="main">
          <card :info="leftInfo" :is-show-title-right="false">
            <template v-slot:content>
              <div class="table">
                <!--                                <div class="header">-->
                <!--                                    <div class="item" v-for="(item, index) in headers" :key="index">{{ item }}</div>-->
                <!--                                </div>-->
                <div class="tbody" style="height: 90%; overflow-y: auto">
                  <!--                                    <div class="tr" v-for="(item, index) in datas" :key="index">-->
                  <!--                                        <div class="td">{{ index + 1 }}</div>-->
                  <!--                                        <div class="td">{{ item.name }}</div>-->
                  <!--                                        <div class="td">{{ item.area }}</div>-->
                  <!--                                        <div class="td preview" @click="toshow2(item, false)">预览</div>-->
                  <!--                                    </div>-->
                  <el-tree
                    style="background-color: #1b1e2c"
                    :data="treedata"
                    :props="defaultProps"
                    accordion
                    @node-click="handleNodeClick"
                  >
                  </el-tree>
                </div>
              </div>
            </template>
          </card>
        </div>
        <!--        <div class="more">查看更多</div>-->
      </div>
      <div class="middle">
        <!-- <card :info="middleInfo" :is-show-title-right="false">
                          <template v-slot:content>
                            <div ref="chartRef1" style="width: 100%; height: 100%"></div>
                          </template>
                        </card> -->
        <div id="map"></div>
      </div>
      <div class="right">
        <!-- <div class="right-top">
                          <card :info="rightTopInfo" :is-show-title-right="false">
                            <template v-slot:content>
                              <div ref="chartRef2" style="width: 100%; height: 100%"></div>
                            </template>
                          </card>
                        </div>
                        <div class="right-bottom">
                          <card :info="rightBottomInfo" :is-show-title-right="false">
                            <template v-slot:content>
                              <div ref="chartRef3" style="width: 100%; height: 100%"></div>
                            </template>
                          </card>
                        </div>
                        <div class="more">查看更多</div> -->
      </div>
      <!-- 侧边弹出窗 -->
      <drawer ref="drawerRef"></drawer>
    </div>
  </div>
</template>

<script>
import TopHeader from "../../components/top-header/top-header.vue";
import Card from "../../components/card/card.vue";
import { nxMapOption } from "./config/map.config";
import { options2, options3 } from "./config/chart.config";
import * as echarts from "echarts";
import AMapLoader from "@amap/amap-jsapi-loader";
import NewHeader from "@/components/new-header/new-header.vue";
import $ from "jquery"; //  npm i jquery
import Drawer from "../../components/drawer/drawer.vue";

export default {
  components: { TopHeader, Card, NewHeader, Drawer },
  data() {
    return {
      treedata: [],
      defaultProps: {
        children: "children",
        label: "label",
      },
      tabs: [
        { name: "农机实时监测", icon: "el-icon-picture-outline", url: "/car-use" },
        { name: "数字地块", icon: "el-icon-s-management", url: "/area-manage" },
        { name: "灵武市智慧农业数据总览", icon: "el-icon-menu", url: "/data-summary" },
      ],
      leftInfo: { name: "地块种植规模分析" },
      middleInfo: { name: "地块展示" },
      rightTopInfo: { name: "地块流程信息" },
      rightBottomInfo: { name: "生长周期分类展示" },
      headers: ["单位名称"],
      datas: [],
      map: null,
      options1: nxMapOption,
      options2,
      options3,
      myChart1: null,
      myChart2: null,
      myChart3: null,
      mappolygon: [],
      maptext: [],
      apidata: [],
    };
  },
  computed: {
    individual: {
      get() {
        return this.$store.state.settings.individual;
      },
    },
  },
  mounted() {
    this.initMap("circle");
    // this.setOptions1();
    //this.setOptions2();
    // this.setOptions3();
  },
  methods: {
    initData() {
      //地块列表
      const that = this;
      //显示全部地块

      $.ajax({
        url: "http://192.168.1.17:1937/api/1.0/XcLandlistBytree",
        type: "GET",
        dataType: "json",
        cache: false,
        success: function (response) {
          console.log("获取组织树", response);
          that.treedata = response;
        },
      });
    },
    initMap() {
      AMapLoader.load({
        key: "59e50354d1ff0466892b69be3add3518",
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [
          "AMap.Scale",
          "AMap.ToolBar",
          "AMap.AutoComplete",
          "AMap.PlaceSearch",
          "AMap.ControlBar",
          "AMap.MouseTool",
          "AMap.Geocoder",
        ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          // 初始化地图
          const satellite = new AMap.TileLayer.Satellite();
          const roadNet = new AMap.TileLayer.RoadNet();
          this.map = new AMap.Map("map", {
            viewMode: "2D", //  是否为3D地图模式
            zoom: 14, // 初始化地图级别106.34,38.10
            center: [106.356579, 37.937973], //中心点坐标  银川
            resizeEnable: true,
            layers: [satellite, roadNet], // 卫星地图
          });
          this.mouseTool = new AMap.MouseTool(this.map);
          this.geoCoder = new AMap.Geocoder();
          /*
                        this.map.on("click", (e) => {
                            // console.log(e);
                            this.markersPosition = [e.lnglat.lng, e.lnglat.lat];
                            this.removeMarker();
                            this.setMapMarker();
                        });*/
          this.initData();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getapidata() {
      const that = this;
      $.ajax({
        url: "http://8.130.23.195:8091/system/gdqxdevice/xianq/GDZS23040831",
        type: "GET",
        dataType: "json",
        cache: false,
        success: function (response) {
          var data = [];
          data.push(response.data[7]);
          data.push(response.data[8]);
          that.$refs.drawerRef.realDatas = data;
          console.log("传感器", response.data);
        },
      });
    },
    toshow(res, isall) {
      console.log("显示地块", res);
      if (!isall) {
        if (this.mappolygon.length > 0) {
          this.map.remove(this.mappolygon);
        }
        if (this.maptext.length > 0) {
          this.map.remove(this.maptext);
        }
      }
      var mappoint = JSON.parse(res.mappoint);
      var center = this.calculateCenter(mappoint);
      var path = [];
      for (let i = 0; i < mappoint.length; i++) {
        path.push(new AMap.LngLat(mappoint[i].lng, mappoint[i].lat));
      }
      var polygon = new AMap.Polygon({
        path: path,
        fillColor: "#29ED3C", // 多边形填充颜色
        borderWeight: 2, // 线条宽度，默认为 1
        strokeColor: "#fff", // 线条颜色
        strokeStyle: "dashed",
      });
      this.map.setZoomAndCenter(15, [center.lng, center.lat]);
      this.map.add(polygon);
      this.mappolygon.push(polygon);

      var text = new AMap.Text({
        position: new AMap.LngLat(center.lng, center.lat),
        anchor: "center",
        text: res.name,
        zooms: [15],
        style: {
          "background-color": "transparent",
          "border-width": "0",
          color: "#fff",
          "font-size": "12px",
        },
      });
      text.on("click", () => {
        console.log("点击地块ID 获取详情", res.id);
        this.showSide(res);
      });
      this.map.add(text);
      this.maptext.push(text);
    },
    toshow2(res, isall) {
      console.log("显示地块", res);
      if (!isall) {
        if (this.mappolygon.length > 0) {
          this.map.remove(this.mappolygon);
        }
        if (this.maptext.length > 0) {
          this.map.remove(this.maptext);
        }
      }
      var mappoint = JSON.parse(res.mappoint);
      var center = this.calculateCenter(mappoint);
      var path = [];
      for (let i = 0; i < mappoint.length; i++) {
        path.push(new AMap.LngLat(mappoint[i].lng, mappoint[i].lat));
      }
      var polygon = new AMap.Polygon({
        path: path,
        fillColor: "#29ED3C", // 多边形填充颜色
        borderWeight: 2, // 线条宽度，默认为 1
        strokeColor: "#fff", // 线条颜色
        strokeStyle: "dashed",
      });
      this.map.setZoomAndCenter(15, [center.lng, center.lat]);
      this.map.add(polygon);
      this.mappolygon.push(polygon);

      var text = new AMap.Text({
        position: new AMap.LngLat(center.lng, center.lat),
        anchor: "center",
        text: res.thelotnumber,
        zooms: [15],
        style: {
          "background-color": "transparent",
          "border-width": "0",
          color: "#fff",
          "font-size": "12px",
        },
      });
      this.map.add(text);
      this.maptext.push(text);
      this.showSide(res);
    },
    calculateCenter(lnglatarr) {
      var total = lnglatarr.length;
      var X = 0,
        Y = 0,
        Z = 0;
      $.each(lnglatarr, function (index, lnglat) {
        var lng = (lnglat.lng * Math.PI) / 180;
        var lat = (lnglat.lat * Math.PI) / 180;
        var x, y, z;
        x = Math.cos(lat) * Math.cos(lng);
        y = Math.cos(lat) * Math.sin(lng);
        z = Math.sin(lat);
        X += x;
        Y += y;
        Z += z;
      });

      X = X / total;
      Y = Y / total;
      Z = Z / total;

      var Lng = Math.atan2(Y, X);
      var Hyp = Math.sqrt(X * X + Y * Y);
      var Lat = Math.atan2(Z, Hyp);
      //返回的数据格式根据你自己的需要改变
      return { lng: (Lng * 180) / Math.PI, lat: (Lat * 180) / Math.PI };
    },
    showSide(res) {
      const that = this;
      this.$refs.drawerRef.show();
      //获取传感器数据
      this.getapidata();

      //获取农事接口
      $.ajax({
        url: "http://192.168.1.17:1937/api/1.0/GetCropInfo?id=" + res.id,
        type: "GET",
        dataType: "json",
        cache: false,
        success: function (response) {
          that.$refs.drawerRef.steps = response.data;
          that.$refs.drawerRef.xcCrops = response.xcCrops[0];
          that.$refs.drawerRef.areaInfos[0].value = response.LandInfo.name;
          that.$refs.drawerRef.areaInfos[1].value = response.LandInfo.area;
          that.$refs.drawerRef.areaInfos[2].value = response.LandInfo.latitude + "," + response.LandInfo.plot;
          console.log("农事/农资", response.data);
        },
      });
    },
    handleNodeClick(data) {
      const that = this;
      if (data.children.length == 0) {
        console.log(data);
        if (this.mappolygon.length > 0) {
          this.map.remove(this.mappolygon);
        }
        if (this.maptext.length > 0) {
          this.map.remove(this.maptext);
        }
        //获取地块列表
        $.ajax({
          url: "http://192.168.1.17:1937/api/1.0/XcLandlist?deptid=" + data.deptid,
          type: "GET",
          dataType: "json",
          cache: false,
          success: function (response) {
            console.log("获取地块列表", response);
            that.datas = response.rows;
            for (var i = 0; i < response.rows.length; i++) {
              that.toshow(response.rows[i], true);
            }
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.area-manage {
  width: 1920px;
  height: 1080px;
  background-color: #181a28;
  position: relative;

  .more {
    width: 100%;
    height: 52px;
    color: #fff;
    text-align: center;
    line-height: 52px;
    border-radius: 10px;
    background-color: #1e202f;
    cursor: pointer;
  }

  .content {
    width: 100%;
    padding: 0 18px;
    margin-top: 30px;
    box-sizing: border-box;
    position: relative;

    display: flex;

    .left {
      width: 300px;
      height: 949px;
      margin-right: 14px;

      .main {
        width: 100%;
        height: 952px;
        margin-bottom: 15px;

        .table {
          width: 100%;
          height: 100%;
          color: #fff;
          padding: 24px 22px;
          box-sizing: border-box;

          .header {
            height: 81px;
            // padding: 30px 50px;
            font-size: 18px;
            box-sizing: border-box;
            background-color: #1b1e2c;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .item {
              flex: 1;
              text-align: center;
            }
          }

          .tbody {
            width: 100%;
            font-size: 16px;

            .tr {
              width: 100%;
              height: 72px;
              display: flex;
              justify-content: space-between;
              align-items: center;

              > .td {
                flex: 1;
                text-align: center;

                &.preview {
                  color: #25d3ff;
                  text-decoration: underline;
                }
              }
            }

            .tr:nth-child(2n) {
              background-color: #1b1e2c;
            }
          }
        }
      }
    }

    .middle {
      width: 718px;
      height: 949px;
      margin-right: 15px;

      #map {
        width: 1450px;
        height: 100%;
        overflow: hidden;
        color: #54fbf133;
      }
    }

    .right {
      width: 532px;
      height: 949px;

      .right-top {
        width: 100%;
        height: 430px;
        margin-bottom: 15px;
      }

      .right-bottom {
        width: 100%;
        height: 436px;
        margin-bottom: 16px;
      }
    }
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>
