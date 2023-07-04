<template>
  <div class="middle-bottom-left">
    <card :title="'设备运行状态'">
      <!-- <dv-scroll-board :config="tableData" style="width: 100%; height: 100%" />
      <div class="empty" v-if="!tableData.data.length">
        <img src="../../../assets/img/no-data.png" alt="" />
        <div>暂无数据</div>
      </div> -->

      <div ref="chartRef" style="width: 100%; height: 100%"></div>
    </card>
  </div>
</template>

<script>
import Card from "./card.vue";
import * as echarts from "echarts";
import { mblOptions } from "../config/chart.config";
export default {
  components: { Card },
  data() {
    return {
      tableData: {
        header: [
          '<span style="font-size: 12px;">设备号</span>',
          '<span style="font-size: 12px;">日期</span>',
          '<span style="font-size: 12px;">告警码</span>',
          '<span style="font-size: 12px;">告警内容</span>',
        ],
        data: [],
        headerBGC: "#009fc1",
        rowNum: 5,
        oddRowBGC: "#11244a",
        evenRowBGC: "#091432",
      },
      myChart: null,
      options: mblOptions,
    };
  },
  mounted() {
    this.setOptions();
  },
  methods: {
    setOptions() {
      this.myChart = echarts.init(this.$refs.chartRef);
      this.myChart.setOption(this.options);
    },
  },
};
</script>

<style lang="less" scoped>
.middle-bottom-left {
  width: 40%;
  height: 100%;
  position: relative;

  .empty {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      margin-bottom: 10px;
    }
  }
}
</style>
