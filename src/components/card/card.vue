<template>
  <div class="vgri-card" :style="{ backgroundColor: individual.cardBodyColor }">
    <div class="title" v-if="isShowTitle" :style="{ backgroundColor: individual.cardTopColor }">
      <div class="text" :style="{ color: individual.cardTitleColor }">{{ info.name }}</div>
      <div class="title-right" v-if="isShowTitleRight">
        <slot name="title-right">
          <img :src="info.icon" width="21" height="19" alt="" />
        </slot>
      </div>
    </div>
    <div
      class="card-content"
      :class="isShowTitle ? '' : 'title-none'"
      :style="{ backgroundColor: individual.cardBodyColor }"
    >
      <slot name="content">
        <div class="value">
          <span class="num">{{ info.value }}</span>
          <span class="unit">{{ info.unit }}</span>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => ({
        name: "总作业亩数",
        value: "20",
        unit: "万亩",
        icon: require("../../assets/img/card.png"),
      }),
    },
    isShowTitle: {
      type: Boolean,
      default: true,
    },
    isShowTitleRight: {
      type: Boolean,
      default: true,
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
.vgri-card {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-color: #1e202f;

  .title {
    width: 100%;
    height: 43px;
    color: #fff;
    padding: 13px 36px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #212436;
    display: flex;
    justify-content: space-between;
    position: relative;

    &::before {
      content: "";
      display: inline-block;
      width: 4px;
      height: 15px;
      background-color: #24cbe9;
      border-radius: 2px;
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
    }

    .title-right {
      display: flex;
      align-items: center;
      // img {
      //   width: 21px;
      //   height: 19px;
      // }
    }
  }
  .card-content {
    width: 100%;
    height: calc(100% - 43px);
    background-color: #1e202f;
    position: relative;

    &.title-none {
      height: 100%;
    }

    .value {
      color: #38efff;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      .num {
        font-size: 36px;
        margin-right: 15px;
      }
      .unit {
        font-size: 18px;
      }
    }
  }
}
</style>
