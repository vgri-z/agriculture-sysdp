<template>
  <div class="card" :style="{ width: cardWidth, height: cardHeight, backgroundColor: cardBg }">
    <div v-if="showTitle" class="title" :style="{ color: titleColor }">{{ title }}</div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "实时作业数据",
    },
    titleColor: {
      type: String,
      default: "#fff",
    },
    cardWidth: {
      type: String,
      default: "100%",
    },
    cardHeight: {
      type: String,
      default: "100%",
    },
    cardBg: {
      type: String,
      default: "#091430",
    },
    showTitle: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="less" scoped>
.card {
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  > .title {
    font-weight: bold;
    padding: 10px 0;
    padding-left: 25px;
    box-sizing: border-box;
    background-image: linear-gradient(to right, #1f3f96 0%, #0b1432 100%);
    position: relative;

    &::after {
      content: "";
      display: inline-block;
      width: 4px;
      height: 100%;
      background-color: #2faefd;
      position: absolute;
      left: 0px;
      top: 0px;
    }
  }

  .content {
    width: 100%;
    flex: 1;
  }
}
</style>
