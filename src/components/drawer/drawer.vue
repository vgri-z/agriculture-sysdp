<template>
  <div class="drawer" v-show="isShow" :style="{ right: drawerRight }">
    <div class="top">
      <div class="drawer-select">
        <div class="name">{{xcCrops.name}} ({{xcCrops.varietycode}})</div>
        <div class="select-area">
          <el-select v-model="options" placeholder="预留接口">
           <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </div>
      </div>

      <div class="img-info">
        <div class="img">
          <img
            src="https://img1.baidu.com/it/u=40706516,2635896049&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
            alt=""
          />
        </div>
        <div class="text-info">
          <div class="name">{{xcCrops.name}}({{xcCrops.varieties}})</div>
          <div class="tag">生长管理期</div>
        </div>
        <div class="code-img">
<!--          <img-->
<!--            src="https://img0.baidu.com/it/u=582752653,3386538207&fm=253&fmt=auto&app=138&f=GIF?w=500&h=500"-->
<!--            alt=""-->
<!--          />-->
        </div>
      </div>

      <div class="area-info">
        <div class="info-item" v-for="(item, index) in areaInfos" :key="index">
          <div class="title">
            <img src="../../assets/img/area.png" alt="" />
            <div class="name">{{ item.name }}</div>
          </div>
          <div class="value">{{ item.value }}</div>
        </div>
      </div>

      <div class="tabs">
        <div
          class="tab-item"
          :class="currentIndex === index ? 'active' : ''"
          v-for="(item, index) in tabs"
          :key="item.name"
          @click="tabItemClick(index)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>

    <div class="tab-content">
      <!-- 土壤/气象 -->
      <template v-if="currentIndex === 0">
        <div class="title">
          {{ tabs[currentIndex].name }}
        </div>
        <div class="tags">
          <div
            class="tag-item"
            :class="currentTagIndex === index ? 'active' : ''"
            v-for="(item, index) in tags1"
            :key="index"
            @click="tagItemClick(item, index)"
          >
            {{ item.name }}
          </div>
        </div>

        <!-- 实时数据 -->
        <div class="real-data">
          <div class="title">
            <div class="name">实时数据</div>
            <div class="eqp-id">设备ID：GDZS23040831</div>
          </div>
          <div class="datas">
            <div class="data-item" v-for="(item, index) in realDatas" :key="item.digitalName">
              <div class="left">
                <img :src="item.backImage" alt="" />
              </div>
              <div class="right">
                <div class="value">{{ item.digital }}</div>
                <div class="name">
                  {{ item.digitalName }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="week-change">
          <div class="title">土壤温度一周变化</div>
          <div class="name">
            <span>土壤温度</span>
          </div>
          <div class="chart" ref="chartRef"></div>
        </div>

        <!-- <div class="no-data">
          <img src="../../assets/img/no-data.png" alt="" />
          <div>暂无数据</div>
        </div> -->
      </template>
      <!-- 农事/投入 -->
      <template v-if="currentIndex === 1 || currentIndex === 2">
<!--        <div class="tags">-->
<!--          <div-->
<!--            class="tag-item"-->
<!--            :class="currentTagIndex === index ? 'active' : ''"-->
<!--            v-for="(item, index) in tags2"-->
<!--            :key="index"-->
<!--            @click="tagItemClick(item, index)"-->
<!--          >-->
<!--            {{ item.name }}-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="tag-content">{{ tags2[currentTagIndex].name }} {{ tags2[currentTagIndex].value }}</div>-->

        <div class="step">
          <el-steps direction="vertical" :active="steps.length">
            <el-step v-for="(item, index) in steps" :key="index">
              <template #description>
                <div class="step-item">
                  <div class="top">
<!--                    <div class="time">{{ item.time }}</div>-->
                    <div class="time">{{ item.ordertime }}</div>
                  </div>

                  <div class="info">
                    <div class="area">
                      <span class="name">作业：</span>
                      <span class="value">{{ item.remarks }}</span>
                    </div>
                    <div class="area">
                      <span class="name">类型：</span>
                      <span class="value">{{ item.type }}</span>
                    </div>
                  </div>
                </div>
              </template>
            </el-step>
          </el-steps>
        </div>
      </template>
    </div>

    <!-- 操作 -->
    <div class="btn">
      <el-button type="primary" >产量趋势分析预测</el-button>
    </div>
    <div class="fold" @click="fold">
      <div class="text">收起</div>
      <img src="../../assets/img/fold.png" alt="" />
    </div>
<!--    <div class="rules">种植规范</div>-->
  </div>
</template>

<script>
import * as echarts from "echarts";
import { options1 } from "./config/chart.config";
export default {
  data() {
    return {
      isShow: false,
      isFold: false,
      drawerRight: "-424px",
      areaInfos: [
        { name: "地块名称", value: "梧桐树村二队11|HD-640181-1582" },
        { name: "地块面积", value: "33.37亩" },
        { name: "地块经纬度", value: "宁夏回族自治区银川市灵武市梧桐树乡梧桐树村" }
      //  { name: "地块归属", value: "梧桐树村" },
      ],
      tabs: [{ name: "土壤/气象" }, { name: "农事/农资" }],
      activeName: "second",
      tags2: [
        { name: "播前准备", value: "2023-02-11~2023-04-29" },
        { name: "播种期", value: "2023-02-11~2023-04-29" },
        { name: "生长管理期", value: "2023-02-11~2023-04-29" },
        { name: "成熟收成期", value: "2023-02-11~2023-04-29" },
        { name: "收后管理", value: "2023-02-11~2023-04-29" },
      ],
      tags1: [{ name: "土壤xxx", value: "2023-02-11~2023-04-29" }],
      realDatas: [
        { name: "土壤温度(℃)", value: "31.10", img: require("../../assets/img/map-side/wenduji.png") },
        { name: "土壤湿度(%)", value: "23.30", img: require("../../assets/img/map-side/shidu.png") },
      ],
      steps: [
        { name: "施肥作业", time: "2023-04-29", workArea: "37.49", reporter: "宁夏绿先锋农业科技发展公司" },
      ],
      currentTagContent: "2023-02-11~2023-04-29",
      options: [
        {
          value: "1",
          label: "历史作物",
        },
        {
          value: "2",
          label: "历史作物",
        },
      ],
      xcCrops:{},
      currentIndex: 0,
      currentTagIndex: 0,
      myChart1: null,
      options1,
    };
  },
  mounted() {
    this.setOptions1();
  },
  methods: {
    show() {
      this.isShow = true;
      setTimeout(() => {
        this.drawerRight = "0px";
      }, 10);
    },
    fold() {
      this.drawerRight = "-424px";
      setTimeout(() => {
        this.isShow = false;
      }, 500);
    },
    tabItemClick(index) {
      this.currentIndex = index;
      setTimeout(() => {
        if (index === 0) {
          this.setOptions1();
        }
      }, 0);
    },
    tagItemClick(item, index) {
      this.currentTagIndex = index;
      this.currentTagContent = item.value;
    },
    setOptions1() {
      this.myChart1 = echarts.init(this.$refs.chartRef);
      this.myChart1.setOption(this.options1);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/scroll.less";
.drawer {
  width: 400px;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  background-color: #182749;
  transition: all 0.5s;
  position: absolute;
  top: 0;

  .top {
    width: 100%;
    height: 35%;
  }

  .drawer-select {
    width: 100%;
    display: flex;
    align-items: center;
    .name {
      font-size: 14px;
      color: #fff;
      width: 100%;
    }

    .select-area {
      /deep/ .el-input__inner {
        background-color: transparent;
        border-color: transparent;
      }
    }
  }

  .img-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    .img {
      width: 150px;

      img {
        width: 100%;
      }
    }

    .text-info {
      color: #fff;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .tag {
        color: #63cd7b;
        font-size: 12px;
        text-align: center;
        background-color: #3c7661;
        border: 1px solid #63cd7b;
        padding: 2px 15px;
        border-radius: 10px;
        margin-top: 10px;
      }
    }

    .code-img {
      width: 100px;
      height: 100px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .area-info {
    color: #fff;
    font-size: 12px;
    width: 100%;
    .info-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      .title {
        display: flex;
        align-items: center;

        img {
          width: 15px;
          height: 15px;
        }

        .name {
          margin-left: 5px;
        }
      }
    }
  }

  .tabs {
    width: 100%;
    display: flex;
    color: #40536e;
    font-size: 14px;

    .tab-item {
      flex: 1;
      cursor: pointer;
      padding-bottom: 10px;

      display: flex;
      justify-content: center;

      &.active {
        color: #5887e0;
        border-bottom: 2px solid #5887e0;
      }
    }
  }

  .tab-content {
    height: 60%;
    background-color: #0e1c3e;
    padding: 20px;
    box-sizing: border-box;
    padding-top: 10px;
    box-sizing: border-box;
    overflow: auto;
    overflow-x: hidden;

    .title {
      font-size: 14px;
      color: #7cbdd3;
    }

    > .title {
      margin-bottom: 10px;
      position: relative;

      &::after {
        content: "";
        display: inline-block;
        width: 4px;
        height: 15px;
        background-color: #4c89d1;
        position: absolute;
        left: -10px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .real-data {
      .title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
      }

      .datas {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        .data-item {
          color: #fff;
          width: 49%;
          padding: 15px;
          background-color: #1a2d56;
          border-radius: 5px;

          &:first-child {
            margin-right: 10px;
          }

          display: flex;
          align-items: center;

          .left {
            img {
              width: 40px;
              height: 40px;
            }
          }

          .value {
            margin-bottom: 5px;
          }
        }
      }
    }

    .week-change {
      position: relative;

      .title {
        margin-bottom: 10px;
      }
      .name {
        text-align: center;
        color: #fff;
        margin-bottom: 10px;

        display: flex;
        justify-content: center;

        > span {
          font-size: 14px;
          padding: 4px 20px;
          border: 1px solid #1f4168;
          background-color: #0a3056;
          border-radius: 3px;
        }
      }
      .chart {
        width: 350px;
        height: 300px;
      }
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 10px;

      .tag-item {
        font-size: 12px;
        color: #4d6179;
        padding: 3px 10px;
        border-radius: 12px;
        border: 1px solid #182749;
        background-color: #182749;
        margin-right: 5px;
        margin-bottom: 5px;
        cursor: pointer;

        &.active {
          color: #5887e0;
          border-color: #5887e0;
        }
      }
    }

    .tag-content {
      font-size: 14px;
      padding: 5px 20px;
      box-sizing: border-box;
      background-color: #3d3341;
      color: #eb8a4a;
    }

    .step {
      margin-top: 10px;
      .step-item {
        width: 100%;
        color: #fff;
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;

        .top {
          width: 100%;
          padding: 10px 15px;
          background-color: #162340;
          display: flex;
          justify-content: space-between;
        }
      }

      .info {
        width: 100%;
        padding: 15px;
        background-color: #0a1736;

        .value {
          color: #70d3e0;
        }
      }
    }

    .no-data {
      font-size: 14px;
      color: #fff;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 80px;
        height: 80px;
        margin-bottom: 5px;
      }
    }
  }

  .fold {
    font-size: 14px;
    color: #7ebbe2;
    writing-mode: vertical-rl;
    background-color: #14213f;
    padding: 5px;
    position: absolute;
    left: -24px;
    top: 0;
    cursor: pointer;

    display: flex;

    img {
      width: 15px;
      height: 15px;
      margin-top: 2px;
      transform: rotate(180deg);
      // transform: ;
    }
  }

  .rules {
    font-size: 14px;
    writing-mode: vertical-rl;
    color: #7ebbe2;
    background-color: #14213f;
    padding: 5px;
    position: absolute;
    left: -24px;
    top: 60px;
    cursor: pointer;
  }

  .btn {
    width: 100%;
    padding-top: 8px;

    /deep/ .el-button {
      width: 100%;
      background-color: #3e61c9;
      border-color: #3e61c9;
    }
  }
}

/deep/ .el-step__icon.is-text {
  background-image: linear-gradient(to bottom, #cd7047, #e3bd6e);
  color: transparent;
  border-color: #4e3f32;
}

/deep/ .el-step__head.is-finish {
  border-color: #21315b;
}
</style>
