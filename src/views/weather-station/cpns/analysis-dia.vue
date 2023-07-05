<template>
  <div class="analysis-dia">
    <el-dialog title="雨量流量关系图" :visible.sync="dialogVisible" width="40%">
      <div id="analysis" ref="chartRef" style="width: 100%; height: 500px"></div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click.stop="dialogVisible = false">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { options } from "../config/chart.config";
import * as echarts from "echarts";
export default {
  data() {
    return {
      dialogVisible: false,
      myChart: null,
      options,
    };
  },
  methods: {
    show() {
      this.dialogVisible = true;
      setTimeout(() => {
        this.initChart();
      });
    },
    initChart() {
      this.myChart = echarts.init(this.$refs.chartRef);
      this.myChart.setOption(this.options);
    },
  },
};
</script>

<style lang="less" scoped>
.analysis-dia {
  img {
    width: 100%;
  }
}
</style>
