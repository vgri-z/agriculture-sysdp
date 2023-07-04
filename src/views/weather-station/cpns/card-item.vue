<template>
  <div>
    <div class="card-item" :style="{ backgroundColor: info.color }" @click.stop="itemClick">
      <div class="icon">
        <img :src="info.imgUrl" alt="" />
      </div>
      <div class="content">
        <div class="name">{{ info.name }}</div>
        <div class="value">
          <span>{{ info.value }}</span>
          <span class="unit">{{ info.unit }}</span>
        </div>
      </div>
      <div class="tip">{{ info.tip }}</div>
    </div>

    <!-- 雨量分析弹窗 -->
    <AnalysisDia ref="analysisDiaRef" />
  </div>
</template>

<script>
import AnalysisDia from "./analysis-dia.vue";
export default {
  components: {
    AnalysisDia,
  },
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    itemClick() {
      console.log("open dialog");
      this.$refs.analysisDiaRef.show();
    },
  },
};
</script>

<style lang="less" scoped>
.card-item {
  color: #fff;
  padding: 28px;
  display: flex;
  position: relative;

  .icon {
    width: 40px;
    height: 40px;
    margin-right: 40px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .content {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .name {
      font-weight: bold;
      margin-bottom: 30px;
    }
    .value {
      .unit {
        font-size: 14px;
      }
    }
  }

  .tip {
    font-size: 12px;
    position: absolute;
    bottom: 4px;
    left: 8px;
  }
}
</style>
