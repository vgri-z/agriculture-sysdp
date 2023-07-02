<template>
  <div class="weather-station">
    <new-header :currentIndex="2"></new-header>
    <el-container>
      <el-aside width="250px">
        <div class="aside">
          <!--                    <el-input placeholder="请输入编号" suffix-icon="el-icon-search"/>-->
          <div class="equ-list">
            <div class="title">
              <span>设备列表</span>
              <!--              <i class="el-icon-minus"></i>-->
            </div>
            <div class="list">
              <div
                class="list-item"
                v-for="(item, index) in equList"
                :key="index"
                :class="currentEquIndex === index ? 'active' : ''"
              >
                设备：{{ item.name }}
              </div>
            </div>
          </div>
          <!--                    <div class="page">-->
          <!--                        <el-pagination background :page-size="20" layout="prev, pager, next"-->
          <!--                                       :total="30"></el-pagination>-->
          <!--                    </div>-->
        </div>
      </el-aside>
      <el-main>
        <div class="search">
          <div class="left">
            <span class="text">实时状态</span>
          </div>
          <div class="center">
            <span class="update-time">数据更新时间:{{ updateTime }}</span>
            <div class="icon">
              <i class="el-icon-refresh"></i>
            </div>
          </div>
          <!--          <div class="right">-->
          <!--            <span>{{ currentTime }}</span>-->
          <!--            <div class="icon">-->
          <!--              <i style="color: #fff; font-size: 20px" class="el-icon-s-tools"></i>-->
          <!--            </div>-->
          <!--          </div>-->
        </div>
        <div class="card-list">
          <div class="item" v-for="(item, index) in cards" :key="index">
            <card-item :info="item"></card-item>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import CardItem from "./cpns/card-item.vue";
import { cardInfos } from "./config/config";
import Tab from "../../components/tab/tab.vue";
import NewHeader from "@/components/new-header/new-header.vue";
import * as echarts from "echarts";
import $ from "jquery"; //  npm i jquery
export default {
  components: { CardItem, Tab, NewHeader },
  data() {
    return {
      tabs: [
        { name: "灵武市智慧农业数据总览", icon: "el-icon-picture-outline", url: "/data-summary" },
        { name: "田间四情数据监测", icon: "el-icon-s-management", url: "/weather-station" },
        { name: "视频监控", icon: "el-icon-menu", url: "/real-time-monitor" },
      ],
      apidata: {},
      currentTime: "18:27:59",
      updateTime: "2023/06/08 22:56:05",
      equList: [{ name: "GDZS23040831" }],
      currentEquIndex: 0,
      cards: cardInfos,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var that = this;
      that.updatatime();
      window.setInterval(() => {
        that.updatatime();
      }, 10000);
    },
    updatatime() {
      var that = this;
      var date = new Date();
      var year = date.getFullYear(); //月份从0~11，所以加一
      let month = date.getMonth();
      console.log("month", month);
      var dateArr = [date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()];
      //如果格式是MM则需要此步骤，如果是M格式则此循环注释掉
      for (var i = 0; i < dateArr.length; i++) {
        if (dateArr[i] >= 1 && dateArr[i] <= 9) {
          dateArr[i] = "0" + dateArr[i];
        }
      }
      var strDate = year + "/" + dateArr[0] + "/" + dateArr[1] + " " + dateArr[2] + ":" + dateArr[3] + ":" + dateArr[4];
      //此处可以拿外部的变量接收  strDate:2022-05-01 13:25:30
      //this.date = strDate;
      that.updateTime = strDate;
      $.ajax({
        url: "http://8.130.23.195:8091/system/gdqxdevice/xianq/GDZS23040831",
        type: "GET",
        dataType: "json",
        cache: false,
        success: function (response) {
          console.log(response.data);
          that.apidata = response.data;
          for (var i = 0; i < response.data.length; i++) {
            that.cards[i].value = response.data[i].digital;
          }
        },
      });
    },
    /**
     * 获取当前时间
     */
    currentTime() {},
  },
};
</script>

<style lang="less" scoped>
.weather-station {
  width: 1920px;
  height: 1080px;
  position: relative;

  .el-container {
    height: 100%;
    // background-color: lime;
    .el-aside {
      .aside {
        width: 100%;
        height: 100%;
        padding: 15px;
        box-sizing: border-box;

        .equ-list {
          margin-top: 20px;
          border: 1px solid #f0f0f0;

          .title {
            background-color: #f1f1f1;
            padding: 8px 10px;
            font-weight: bold;
            display: flex;
            justify-content: space-between;

            .el-icon-minus {
              cursor: pointer;
            }
          }

          .list {
            font-size: 14px;

            .list-item {
              padding: 8px 10px;
              display: flex;
              align-items: center;
              position: relative;
              cursor: pointer;

              &.active {
                color: #45bbcc;
              }

              &.active::after {
                content: "";
                display: inline-block;
                width: 4px;
                height: 100%;
                background-color: #45bbcc;
                position: absolute;
                left: 0;
                top: 0;
              }

              &:last-child {
                margin-bottom: 0;
              }
            }
          }
        }

        .page {
          margin-top: 10px;
        }
      }
    }

    .el-main {
      .search {
        height: 40px;
        box-sizing: border-box;
        margin-bottom: 20px;
        background-color: #f9f9f9;

        display: flex;
        justify-content: space-between;

        .left {
          height: 100%;
          font-weight: bold;
          padding: 0 10px;
          display: flex;
          align-items: center;
          position: relative;

          &::after {
            content: "";
            width: 100%;
            height: 3px;
            background-color: #79b1d1;
            position: absolute;
            bottom: 0px;
            left: 0;
          }

          .text {
            display: inline-block;
          }
        }

        .center {
          height: 100%;
          display: flex;

          .update-time {
            height: 100%;
            color: #939ca2;
            border: 1px solid #79b1d1;
            box-sizing: border-box;
            padding: 0 15px;
            margin-right: 10px;
            display: flex;
            align-items: center;
          }

          .icon {
            border: 1px solid #79b1d1;
            padding: 0 12px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .right {
          height: 100%;
          display: flex;
          align-items: center;
          color: #585858;

          .icon {
            height: 100%;
            background-color: #f8d69c;
            padding: 0 12px;
            margin-left: 10px;
            border-radius: 5px;
            display: flex;
            align-items: center;
          }
        }
      }

      .card-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        .item {
          width: 32%;
          margin-right: 10px;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
