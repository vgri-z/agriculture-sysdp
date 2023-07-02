<template>
  <div class="vgri-border" :style="wrapperStyle">
    <div
      class="border zj1"
      :style="{
        '--bgColor': angleColor,
        '--width': angleWidth,
        '--height': angleHeight,
        '--transBefore1': transBeforeObj.leftTop,
        '--transAfter1': transAfterObj.leftTop,
      }"
    ></div>
    <div
      class="border zj2"
      :style="{
        '--bgColor': angleColor,
        '--width': angleWidth,
        '--height': angleHeight,
        '--transBefore2': transBeforeObj.leftBottom,
        '--transAfter2': transAfterObj.leftBottom,
      }"
    ></div>
    <div
      class="border zj3"
      :style="{
        '--bgColor': angleColor,
        '--width': angleWidth,
        '--height': angleHeight,
        '--transBefore3': transBeforeObj.rightTop,
        '--transAfter3': transAfterObj.rightTop,
      }"
    ></div>
    <div
      class="border zj4"
      :style="{
        '--bgColor': angleColor,
        '--width': angleWidth,
        '--height': angleHeight,
        '--transBefore4': transBeforeObj.rightBottom,
        '--transAfter4': transAfterObj.rightBottom,
      }"
    ></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#465a69",
    },
    angleColor: {
      type: String,
      default: "#fff",
    },
    angleWidth: {
      type: String,
      default: "10px",
    },
    borderWidth: {
      type: String,
      default: "1px",
    },
    angleHeight: {
      type: String,
      default: "1px",
    },
  },
  data() {
    return {
      wrapperStyle: {
        borderColor: this.color,
        borderWidth: this.borderWidth,
      },
      transAfterObj: {
        leftTop: "",
        leftBottom: "",
        rightTop: "",
        rightBottom: "",
      },
      transBeforeObj: {
        leftTop: "",
        leftBottom: "",
        rightTop: "",
        rightBottom: "",
      },
    };
  },
  created() {
    this.getTransformAfter(parseInt(props.angleHeight));
    this.getTransformBefore(parseInt(props.angleWidth));
  },
  methods: {
    getTransformAfter(height) {
      this.transAfterObj.leftTop = `translate(-${height}px, -${height}px)`;
      this.transAfterObj.leftBottom = `translate(-${height}px, ${height}px)`;
      this.transAfterObj.rightTop = `translate(${height}px, -${height}px)`;
      this.transAfterObj.rightBottom = `translate(${height}px, ${height}px)`;
    },
    getTransformBefore(width) {
      const transWidth = width / 2;
      let transX = transWidth - 1.5 * parseInt(this.angleHeight);
      let transY = transWidth + 0.5 * parseInt(this.angleHeight);
      this.transBeforeObj.leftTop = `rotateZ(90deg) translate(${transX}px, ${transY}px)`;
      this.transBeforeObj.leftBottom = `rotateZ(90deg) translate(-${transX}px, ${transY}px)`;
      this.transBeforeObj.rightTop = `rotateZ(90deg) translate(${transX}px, -${transY}px)`;
      this.transBeforeObj.rightBottom = `rotateZ(90deg) translate(-${transX}px, -${transY}px)`;
    },
  },
};
</script>

<style lang="less" scoped>
.borderCommon() {
  content: "";
  display: inline-block;
  width: var(--width);
  height: var(--height);
  // background: #fff;
  background: var(--bgColor);
  position: absolute;
}
.vgri-border {
  width: 100%;
  height: 100%;
  border-width: 1px;
  border-style: solid;
  position: relative;
  .border {
    width: 10px;
    height: 10px;
    background: transparent;
    position: absolute;
    z-index: 10;
    &.zj1 {
      left: 0;
      top: 0;
    }
    &.zj2 {
      left: 0;
      bottom: 0;
    }
    &.zj3 {
      right: 0;
      top: 0;
    }
    &.zj4 {
      right: 0;
      bottom: 0;
    }
  }
  .zj1::after {
    .borderCommon();
    transform: var(--transAfter1);
  }
  .zj1::before {
    // 6 -> 0 4 / 1.5 3.5
    // 7 -> 0.5 4.5 / 2 4
    // 8 -> 1 5 / 2.5 4.5
    // 10 -> 2 6
    .borderCommon();
    // transform: rotateZ(90deg) translate(2px, 6px);
    transform: var(--transBefore1);
  }
  .zj2::after {
    .borderCommon();
    left: 0;
    bottom: 0;
    transform: var(--transAfter2);
  }
  .zj2::before {
    .borderCommon();
    left: 0;
    bottom: 0;
    // transform: rotateZ(90deg) translate(-2px, 6px);
    transform: var(--transBefore2);
  }
  .zj3::after {
    .borderCommon();
    right: 0;
    top: 0;
    transform: var(--transAfter3);
  }
  .zj3::before {
    .borderCommon();
    right: 0;
    top: 0;
    // transform: rotateZ(90deg) translate(2px, -6px);
    transform: var(--transBefore3);
  }
  .zj4::after {
    .borderCommon();
    right: 0;
    bottom: 0;
    transform: var(--transAfter4);
  }
  .zj4::before {
    .borderCommon();
    right: 0;
    bottom: 0;
    // transform: rotateZ(90deg) translate(-2px, -6px);
    transform: var(--transBefore4);
  }
}
</style>
