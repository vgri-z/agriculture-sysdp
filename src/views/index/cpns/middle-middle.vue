<template>
  <div class="middle-middle">
    <card :show-title="false">
      <div class="map">
        <div id="map"></div>
        <div class="full-screen">
          <img src="../../../assets/img/qp.png" alt="" />
        </div>
        <div class="tabs">
          <div
            class="tab-item"
            v-for="(item, index) in tabs"
            :key="index"
            :class="currentIndex === index ? 'active' : ''"
          >
            <img :src="item.icon" alt="" />
            <div class="name">{{ item.name }}</div>
          </div>
        </div>
        <map-info />
      </div>
    </card>
  </div>
</template>

<script>
import Card from "./card.vue";
import MapInfo from "./map-info.vue";
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  name: "DrawStation",
  components: { Card, MapInfo },
  data() {
    return {
      tabs: [
        { name: "地块分布", icon: require("../../../assets/img/area.png") },
        { name: "合作社分布", icon: require("../../../assets/img/area.png") },
        { name: "车辆分布", icon: require("../../../assets/img/area.png") },
      ],
      currentIndex: 0,
      // 地图对象
      AMap: null,
      // 地图实例对象
      map: null,
      marker: null,
      // 经纬度
      location: {
        lat: "",
        lng: "",
        address: "",
      },
    };
  },
  mounted() {
    // DOM初始化完成进行地图初始化
    this.initMap();
  },
  methods: {
    /**
     * 创建地图
     */
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
          this.initData();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    // 点击地图事件
    clickMapHandler(e) {
      this.location.lng = e.lnglat.getLng();
      this.location.lat = e.lnglat.getLat();
      this.map.remove(this.marker);
      AMapLoader.load({
        key: "afae044d3e5f5e49b0e06421d2666b7c", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ["AMap.Scale", "AMap.PlaceSearch", "AMap.AutoComplete"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        this.AMap = AMap;
        this.marker = new AMap.Marker({
          position: new AMap.LngLat(e.lnglat.getLng(), e.lnglat.getLat()),
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png", // 添加 Icon 图标 URL
          title: "深圳",
        });
        this.map.add(this.marker);
        // 移除已创建的 marker
        // this.map.remove(marker)
      });
    },
  },
};
</script>

<style lang="less" scoped>
.middle-middle {
  width: 100%;
  height: 58%;

  .map {
    width: 100%;
    height: 100%;
    position: relative;
  }

  #map {
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: #54fbf133;
  }

  .full-screen {
    background-color: rgba(3, 12, 34, 0.8);
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
    img {
      width: 30px;
      height: 30px;
    }
  }

  .tabs {
    width: 300px;
    position: absolute;
    right: 10px;
    top: 10px;

    display: flex;

    .tab-item {
      background-color: rgba(3, 12, 34, 0.8);
      padding: 8px;
      font-size: 12px;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;

      &.active {
        background-color: #1c4cc7;
      }

      img {
        width: 15px;
        margin-right: 3px;
      }
    }
  }
}
</style>
