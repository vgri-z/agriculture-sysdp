<template>
  <div class="analysis-dia">
    <el-dialog title="雨量流量关系图" :visible.sync="dialogVisible" width="40%">
      <img src="../../../assets/img/rain-fx.jpg" alt="" />
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click.stop="dialogVisible = false">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    show() {
      this.dialogVisible = true;
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
