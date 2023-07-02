<template>
  <div class="card-item" :style="{ backgroundColor: info.color }">
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
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => ({}),
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
