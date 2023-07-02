<template>
  <div class="index" :style="{ background: individual.bgColor || `url(${individual.bgUrl}) no-repeat` }">
    <new-header :currentIndex="0"></new-header>

    <div class="content">
      <div class="left">
        <left-top></left-top>
        <left-bottom></left-bottom>
      </div>
      <div class="middle">
        <middle-top></middle-top>
        <middle-middle></middle-middle>
        <div class="middle-bottom">
          <middle-bottom-left></middle-bottom-left>
          <middle-bottom-right></middle-bottom-right>
        </div>
      </div>
      <div class="right">
        <right-top></right-top>
        <right-middle></right-middle>
        <right-bottom></right-bottom>
      </div>
    </div>
  </div>
</template>

<script>
import NewHeader from "@/components/new-header/new-header.vue";
import {
  LeftTop,
  LeftBottom,
  MiddleTop,
  MiddleMiddle,
  MiddleBottomLeft,
  MiddleBottomRight,
  RightTop,
  RightMiddle,
  RightBottom,
} from "./cpns/index";
export default {
  components: {
    NewHeader,
    LeftTop,
    LeftBottom,
    MiddleTop,
    MiddleMiddle,
    MiddleBottomLeft,
    MiddleBottomRight,
    RightTop,
    RightMiddle,
    RightBottom,
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
.index {
  width: 1920px;
  height: 1080px;
  background-color: #181a28;
  position: relative;

  .content {
    width: 100%;
    height: calc(100% - 78px);
    padding: 10px 20px;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
  }

  .content > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .content .left {
    width: 24%;
    height: 100%;
  }

  .content .middle {
    width: 50%;
    height: 100%;
  }

  .content .middle .middle-bottom {
    width: 100%;
    height: 30%;

    display: flex;
    justify-content: space-between;
  }

  .content .right {
    width: 24%;
    height: 100%;
  }
}
</style>
