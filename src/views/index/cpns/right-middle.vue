<template>
  <div class="right-middle">
    <card :title="'传感器数据'">
      <div class="cgq">
        <div class="tabs">
          <div
            class="tab-item"
            v-for="(item, index) in tabs"
            :key="index"
            :class="currentIndex === index ? 'active' : ''"
            @click="tabClick(index)"
          >
            {{ item.name }}
          </div>
        </div>

        <div class="datas">
          <div class="data-item" v-for="(item, index) in datas" :key="index">
            <div class="inner">
              <img :src="item.icon" alt="" />
              <div class="info">
                <div class="value">{{ item.value }}</div>
                <div class="name">{{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import Card from "./card.vue";
export default {
  components: { Card },
  data() {
    return {
      tabs: [{ name: "气象站3" }, { name: "气象站2" }, { name: "气象站1" }],
      datas: [
        { name: "空气温度(℃)", icon: require("../../../assets/img/weather-station/sun.png"), value: "25.00" },
        { name: "空气湿度(%)", icon: require("../../../assets/img/weather-station/sun.png"), value: "34.40" },
        { name: "露点(℃)", icon: require("../../../assets/img/weather-station/sun.png"), value: "无数据" },
        { name: "光照(lux)", icon: require("../../../assets/img/weather-station/sun.png"), value: "13179" },
        { name: "气压(hpa)", icon: require("../../../assets/img/weather-station/sun.png"), value: "900.00" },
        { name: "降雨量(mm)", icon: require("../../../assets/img/weather-station/sun.png"), value: "无数据" },
        { name: "日降雨量(mm)", icon: require("../../../assets/img/weather-station/sun.png"), value: 0 },
        { name: "风向", icon: require("../../../assets/img/weather-station/sun.png"), value: "东北风" },
      ],
      currentIndex: 0,
    };
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
.right-middle {
  width: 100%;
  height: 38%;

  .cgq {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .tabs {
    width: 22%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    .tab-item {
      font-size: 12px;
      width: 100%;
      margin-bottom: 10px;
      border: 1px solid #17487b;
      padding: 7px 0px;
      text-align: center;
      border-radius: 6px;
      cursor: pointer;

      &.active {
        border: 1px solid #6ecef0;
      }
    }
  }

  .datas {
    width: 78%;
    height: 100%;

    .data-item {
      width: 24%;
      height: 70px;
      font-size: 14px;
      padding: 0px 10px;
      background-color: #002d65;
      display: inline-block;
      margin-right: 10px;
      margin-bottom: 10px;

      .inner {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        margin-right: 10px;
      }

      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 10px;
      }

      .info {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .name {
        font-size: 12px;
        margin-top: 5px;
      }

      .value {
        color: #2edeff;
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
}
</style>
