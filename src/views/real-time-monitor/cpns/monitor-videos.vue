<template>
  <div class="monitor-videos">
    <div class="infos">
<!--      <div class="info-item" v-for="(item, index) in infos" :key="index">-->
<!--        <div class="icon">-->
<!--          <img :src="item.icon" alt="" />-->
<!--        </div>-->
<!--        <div class="display">-->
<!--          <div class="name">{{ item.name }}</div>-->
<!--          <div class="count">{{ item.count }}</div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
    <div class="monitors">
      <div class="top">
        <div class="main-monitor">
          <div id="dev-monitor" style="width: 100%; height: 100%;"></div>
          <!--          <video-->
          <!--            preload="metadata"-->
          <!--            crossorigin="anonymous"-->
          <!--            autoplay=""-->
          <!--            poster="../img/2.png"-->
          <!--          ></video>-->
        </div>
        <!--        <div class="aside-monitors">-->
        <!--          <div v-for="item in 4" :key="item">-->
        <!--            <video-->
        <!--              preload="metadata"-->
        <!--              crossorigin="anonymous"-->
        <!--              autoplay=""-->
        <!--              poster="../img/1.png"-->
        <!--            ></video>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
      <!--      <div class="bottom">-->
      <!--        <div v-for="item in 5" :key="item">-->
      <!--          <video-->
      <!--            preload="metadata"-->
      <!--            crossorigin="anonymous"-->
      <!--            autoplay=""-->
      <!--            poster="https://gimg3.baidu.com/rel/src=https%3A%2F%2Fgips2.baidu.com%2Fit%2Fu%3D415634427%2C3486829419%26fm%3D3028%26app%3D3028%26f%3DPNG%26fmt%3Dauto%26q%3D92%26size%3Df1138_640&refer=http%3A%2F%2Fwww.baidu.com&app=2010&size=w560&n=0&g=0n&q=100&fmt=auto?sec=1673197200&t=f9609898668a3fe329eb9b035290645c"-->
      <!--            src="blob:https://www.bilibili.com/f144c75c-3af0-49d1-9527-68f423967aad"-->
      <!--          ></video>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infos: [
        { name: "总监控点位", count: "75", icon: require("../../../assets/img/monitor/zjkdw.png") },
        { name: "异常监控点位", count: "0", icon: require("../../../assets/img/monitor/ycjkdw.png") },
        { name: "巡检侦测点位", count: "24", icon: require("../../../assets/img/monitor/xjzcdw.png") },
        { name: "巡检异常事件", count: "0", icon: require("../../../assets/img/monitor/xjycsj.png") },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.monitor-videos {
  flex: 1;
  height: 93%;
  padding: 20px;
  box-sizing: border-box;
  background: linear-gradient(to bottom, #2382e7, #2382e7) left top / 2px 10px no-repeat,
    linear-gradient(to right, #2382e7, #2382e7) left top / 10px 2px no-repeat,
    linear-gradient(to left, #2382e7, #2382e7) right top / 10px 2px no-repeat,
    linear-gradient(to bottom, #2382e7, #2382e7) right top / 2px 10px no-repeat,
    linear-gradient(to top, #2382e7, #2382e7) bottom left / 2px 10px no-repeat,
    linear-gradient(to right, #2382e7, #2382e7) bottom left / 10px 2px no-repeat,
    linear-gradient(to left, #2382e7, #2382e7) bottom right / 10px 2px no-repeat,
    linear-gradient(to top, #2382e7, #2382e7) bottom right / 2px 10px no-repeat;

  background-color: rgba(4, 35, 82, 0.6);

  display: flex;
  flex-direction: column;

  .infos {
    color: #fff;
    font-weight: bold;
    border-bottom: 2px solid #3989b1;
    margin-bottom: 20px;
    display: flex;

    .info-item {
      flex: 1;
      padding: 30px 0;
      // background-color: red;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &::after {
        content: "";
        display: inline-block;
        width: 2px;
        height: 50px;
        background-color: #3989b1;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }

      &:last-child::after {
        display: none;
      }

      .icon {
        width: 30px;
        margin-right: 10px;
        img {
          width: 100%;
        }
      }

      .display {
        display: flex;
        flex-direction: column;
        .name {
          margin-bottom: 10px;
        }
      }
    }
  }

  .monitors {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;

    video {
      width: 100%;
      height: 100%;
    }
    .top {
      display: flex;
      .main-monitor {
        width: 80%;
        height: 100%;
      }

      .aside-monitors {
        flex: 1;
        height: 100%;
      }
    }
    .bottom {
      width: 100%;
      flex: 1;
      display: flex;
    }
  }
}
</style>
