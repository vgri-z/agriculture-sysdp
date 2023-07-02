<template>
  <div class="tabs">
    <div
      class="tab-item"
      v-for="(item, index) in tabs"
      :key="index"
      :style="{
        color: individual.tabColor,
        backgroundColor: currentIndex === index ? individual.tabActiveColor : '',
        fontWeight: individual.tabFontWeight,
      }"
      @click="tabItemClick(item, index)"
    >
      <i :class="item.icon"></i>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => [
        { name: "首页大屏", icon: "el-icon-picture-outline", url: "/index" },
        { name: "首页大屏", icon: "el-icon-picture-outline", url: "/data-summary" },
        { name: "四情监测", icon: "el-icon-s-management", url: "/weather-station" },
        { name: "视频监控", icon: "el-icon-menu", url: "/real-time-monitor" },
        { name: "智慧农机", icon: "el-icon-s-cooperation", url: "/car-use" },
        { name: "数字地块", icon: "el-icon-s-help", url: "/area-manage" },
        { name: "农废回收", icon: "el-icon-s-platform", url: "/farming-waste" },
        { name: "无人农场", icon: "el-icon-s-ticket", url: "" },
        { name: "共享农机", icon: "el-icon-s-ticket", url: "" },
      ],
    },
    currentIndex: {
      type: Number,
      default: 0,
    },
    tabColor: {
      type: String,
      default: "#6d8ac0",
    },
  },
  data() {
    return {
      //currentIndex: 1,
    };
  },
  computed: {
    individual: {
      get() {
        return this.$store.state.settings.individual;
      },
    },
  },
  methods: {
    tabItemClick(item, index) {
      var that = this;
      if (item.name === "共享农机") {
        window.open("http://36.103.224.148:8081/");
      }
      if (item.name === "无人农场") {
        that.$message({
          message: "开始调用农机模拟器生成轨迹",
          type: "success",
        });

        setTimeout(function () {
          that.$message({
            message: "轨迹获取成功，准备渲染农场地块 回放农机轨迹",
            type: "success",
          });
        }, 3000);
      } else {
        // this.currentIndex = index;
        this.$router.push(item.url);
        // this.$emit(itemClick, { item, index });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.tabs {
  color: #6d8ac0;
  width: 50%;
  height: 100%;
  font-size: 18px;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .tab-item {
    flex: 1;
    height: 100%;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    i {
      margin-right: 4px;
    }

    &.active {
      color: #fff;
      background-color: rgba(184, 182, 182, 0.1);
    }
  }
}
</style>
