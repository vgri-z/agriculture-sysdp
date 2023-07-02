<template>
  <div class="right-bottom">
    <card :title="'经营数据分析'">
      <div style="width: 100; height: 100%; display: flex; position: relative">
        <div class="title1">利润</div>
        <div ref="chartRef1" style="width: 50%; height: 100%"></div>
        <div class="title2">生产成本</div>
        <div ref="chartRef2" style="width: 50%; height: 100%"></div>
      </div>
    </card>
  </div>
</template>

<script>
import Card from "./card.vue";
import * as echarts from "echarts";
import { rbOptions1, rbOptions2 } from "../config/chart.config";
export default {
  components: { Card },
  data() {
    return {
      myChart1: null,
      myChart2: null,
      options1: rbOptions1,
      options2: rbOptions2,
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
.right-bottom {
  width: 100%;
  height: 30%;

  .title1,
  .title2 {
    font-size: 14px;
    padding: 8px 16px;
    background-image: linear-gradient(to right, #0b193d 0%, #1e3d91 50%, #0b193d 100%);
    position: absolute;

    top: 10px;
  }

  .title1 {
    left: 70px;
  }

  .title2 {
    right: 50px;
  }
}
</style>
