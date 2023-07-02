<template>
  <div class="left-bottom">
    <card :title="'历史作业情况'">
      <div style="width: 100; height: 100%; display: flex; position: relative">
        <div class="title1">年度作业对比</div>
        <div ref="chartRef1" style="width: 60%; height: 100%"></div>
        <div class="title2">各作业类型统计</div>
        <div ref="chartRef2" style="width: 40%; height: 100%"></div>
      </div>
    </card>
  </div>
</template>

<script>
import Card from "./card.vue";
import * as echarts from "echarts";
import { lbOptions1, lbOptions2 } from "../config/chart.config";
export default {
  components: { Card },
  data() {
    return {
      myChart1: null,
      myChart2: null,
      options1: lbOptions1,
      options2: lbOptions2,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart1();
      this.initChart2();
    });
  },
  methods: {
    initChart1() {
      this.myChart1 = echarts.init(this.$refs.chartRef1);
      this.myChart1.setOption(this.options1);
    },
    initChart2() {
      this.myChart2 = echarts.init(this.$refs.chartRef2);
      this.myChart2.setOption(this.options2);
    },
  },
};
</script>

<style lang="less" scoped>
.left-bottom {
  width: 100%;
  height: 33%;

  .title1,
  .title2 {
    font-size: 14px;
    padding: 8px 16px;
    background-image: linear-gradient(to right, #0b193d 0%, #1e3d91 50%, #0b193d 100%);
    position: absolute;

    top: 20px;
  }

  .title1 {
    left: 70px;
  }

  .title2 {
    right: 30px;
  }
}
</style>
