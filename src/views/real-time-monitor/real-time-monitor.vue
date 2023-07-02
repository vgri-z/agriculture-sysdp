<template>
  <div class="real-time-monitor" :style="{ background: individual.bgColor || `url(${individual.bgUrl}) no-repeat` }">
    <monitor-header></monitor-header>
    <div class="content">
      <monitor-aside></monitor-aside>
      <monitor-videos></monitor-videos>
    </div>
  </div>
</template>

<script>
import Tab from "../../components/tab/tab.vue";
import MonitorHeader from "./cpns/monitor-header.vue";
import MonitorAside from "./cpns/monitor-aside.vue";
import MonitorVideos from "./cpns/monitor-videos.vue";
import EZUIKit from "ezuikit-js";
import $ from "jquery"; //  npm i jquery

export default {
  components: { MonitorHeader, MonitorAside, MonitorVideos, Tab },
  data() {
    return {};
  },
  created() {
    //This.getbagndianID("F44022744", "1", "ba4321c3187648f889dd387642ee7391", "795c11eb8bfdc346600572409815bb55")
    this.getbagndianID("ba4321c3187648f889dd387642ee7391", "795c11eb8bfdc346600572409815bb55", "F44022744", "1");
  },
  computed: {
    individual: {
      get() {
        return this.$store.state.settings.individual;
      },
    },
  },
  methods: {
    getbagndianID(appKey, appSecret, devid, channelid) {
      const This = this;
      // 获取萤石云的accessToken
      $.ajax({
        url: "https://open.ys7.com/api/lapp/token/get",
        type: "POST",
        dataType: "json",
        data: {
          appKey: appKey, //String	appKey	Y
          appSecret: appSecret, //	String	appSecret	Y
        },
        cache: false,
        success: function (response) {
          This.accessToken = response.data.accessToken;
          console.log(This.accessToken);
          This.getUrl(This.accessToken, devid, channelid);
        },
      });
    },
    // 获取视频播放地址
    getUrl(accessToken, id, typeId) {
      const that = this;
      $.ajax({
        url: "https://open.ys7.com/api/lapp/v2/live/address/get",
        type: "POST",
        data: {
          accessToken: accessToken, //	String	授权过程获取的access_token	Y
          deviceSerial: id, //设备序列号
          protocol: 1, //
          channelNo: typeId, //通道
        },
        dataType: "json",
        success: function (res) {
          console.log(res);
          let item = {
            tdh: "m" + res.data.id,
            url: res.data.url,
          };
          that.player = new EZUIKit.EZUIKitPlayer({
            id: "dev-monitor", // 视频容器ID
            accessToken: accessToken,
            url: res.data.url,
            audio: 0, // 是否默认开启声音 0 - 关闭 1 - 开启
            autoplay: true,
            width: 1500,
            height: 850,
          });
        },
      });
    },
    stop() {
      const This = this;
      This.player && This.player.stop(); //销毁并停止直播视频
    },
    play() {
      const This = this;
      This.player.play(); //开始直播视频
    },
  },
};
</script>

<style lang="less" scoped>
.real-time-monitor {
  width: 1920px;
  height: 1080px;
  background: url("../../assets/img/monitor/bg.png") no-repeat;
  background-size: 100% 100%;
  position: relative;

  .content {
    width: 100%;
    height: calc(100% - 78px);
    padding: 10px 20px;
    box-sizing: border-box;

    display: flex;
  }
}
</style>
