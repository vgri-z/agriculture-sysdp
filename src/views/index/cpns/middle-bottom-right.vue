<template>
  <div class="middle-bottom-right">
    <card :title="'在田种植规模分析'">
      <div class="charts">
        <div class="list">
          <div class="list-item" v-for="(item, index) in list" :key="index">
            <img :src="item.img" alt="" />
            <div class="info">
              <div class="name">{{ item.name }}</div>
              <div class="value">
                <span class="num">{{ item.value }}</span>
                <span class="unit">{{ item.unit }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="chart">
          <div ref="chartRef" style="width: 100%; height: 100%"></div>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import Card from "./card.vue";
import { mbrOptions } from "../config/chart.config";
import * as echarts from "echarts";
export default {
  components: { Card },
  data() {
    return {
      list: [
        {
          name: "水稻",
          value: 893.82,
          unit: "亩",
          img: require("../../../assets/img/yumi.webp"),
        },
        {
          name: "玉米",
          value: 893.82,
          unit: "亩",
          img: require("../../../assets/img/yumi.webp"),
        },
      ],
      myChart: null,
      options: mbrOptions,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  methods: {
    initChart() {
      this.myChart = echarts.init(this.$refs.chartRef);
      this.myChart.setOption(this.options);
    },
  },
};
</script>

<style lang="less" scoped>
.middle-bottom-right {
  width: 59%;
  height: 100%;

  .charts {
    width: 100%;
    height: 100%;
    padding-left: 10px;
    padding-top: 10px;
    box-sizing: border-box;
    display: flex;

    .list {
      width: 40%;
      height: 100%;

      .list-item {
        font-size: 14px;
        padding: 10px;
        background-color: #091a38;
        display: flex;
        align-items: center;

        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 10px;
        }

        .name {
          margin-bottom: 5px;
        }

        .value {
          .num {
            font-size: 18px;
            font-weight: bold;
            margin-right: 3px;
          }
        }
      }
    }

    .chart {
      width: 60%;
      height: 100%;
    }
  }
}
</style>
