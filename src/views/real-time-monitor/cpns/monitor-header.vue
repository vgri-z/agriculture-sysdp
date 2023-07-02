<template>
  <new-header :currentIndex="2"></new-header>
  <!-- <div class="monitor-header">
    <div class="name">视频监控数据中心</div>
    <div class="tab left-tab">
      <div class="item">园区概况</div>
      <div class="item active">实时监控</div>
    </div>
    <div class="tab right-tab">
      <div class="item">云仓概况</div>
      <div class="item">云仓作业</div>
    </div>
  </div> -->
</template>

<script>
import Tab from "../../../components/tab/tab.vue";
import NewHeader from "@/components/new-header/new-header.vue";
export default {
  components: { Tab, NewHeader },
  data() {
    return {
      tabs: [
        { name: "田间四情数据监测", icon: "el-icon-picture-outline", url: "/weather-station" },
        { name: "视频监控", icon: "el-icon-s-management", url: "/real-time-monitor" },
        { name: "农机实时监测", icon: "el-icon-menu", url: "/car-use" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.monitor-header {
  width: 100%;
  height: 78px;
  background-color: rgba(4, 35, 82, 0.6);
  display: flex;
  justify-content: center;

  // .name {
  //   color: #fff;
  //   font-size: 36px;
  //   position: absolute;
  //   left: 50%;
  //   top: 40%;
  //   transform: translate(-50%, -40%);
  // }

  // .tab {
  //   font-size: 22px;
  //   color: #fff;
  //   display: flex;
  //   position: absolute;
  //   top: 50%;
  //   transform: translateY(-50%);

  //   .item {
  //     background-color: rgba(7, 69, 132, 0.5);
  //     padding: 10px 20px;
  //     margin-right: 20px;
  //     cursor: pointer;

  //     &.active {
  //       color: #83f2fa;
  //     }
  //   }

  //   &.left-tab {
  //     left: 350px;
  //   }
  //   &.right-tab {
  //     right: 350px;
  //   }
  // }
}
</style>
