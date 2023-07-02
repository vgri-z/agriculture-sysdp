<template>
  <div class="new-header" :style="{ backgroundColor: individual.topColor }">
    <div class="sys-name">绿先锋智慧农业管理平台</div>
    <tab :currentIndex="currentIndex"></tab>
    <div class="logo" v-if="individual.topColor === '#478afd'">
      <img src="../../assets//img/logo.png" alt="" />
      <div class="name">后台管理系统</div>
    </div>
  </div>
</template>

<script>
import Tab from "../tab/tab.vue";

export default {
  components: { Tab },
  props: {
    currentIndex: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    individual: {
      get() {
        return this.$store.state.settings.individual;
      },
    },
  },
};
</script>

<style lang="less" scoped>
.new-header {
  width: 100%;
  height: 78px;
  background-color: rgba(4, 35, 82);
  display: flex;
  justify-content: center;
  position: relative;

  .sys-name {
    color: #fff;
    font-size: 20px;
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  .logo {
    width: 200px;

    position: absolute;
    right: 100px;
    top: 50%;
    transform: translateY(-50%);

    img {
      width: 100%;
    }

    > .name {
      color: #fff;
      font-weight: bold;

      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
