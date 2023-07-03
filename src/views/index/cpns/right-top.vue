<template>
  <div class="right-top">
    <card :title="'实时监控'">
      <div class="monitor">
        <!-- tab切换 -->
        <div class="tabs">
          <div
            class="tab-item"
            v-for="(item, index) in tabs"
            :key="index"
            :class="currentIndex === index ? 'active' : ''"
            @click="tabClick(index)"
          >
            {{ item.name }}
          </div>
        </div>
        <!-- 视频监控 -->
        <div class="video">
          <div class="img"></div>
        </div>
        <!-- 操作部分 -->
        <div class="operate">
          <div class="switch">
            <div class="title">监控开关</div>
            <el-switch v-model="isSwitch" active-color="#1055c8" :width="60" />
          </div>
          <div class="rotate">
            <div class="inner"></div>
            <div class="arrow left-arrow">
              <img src="../../../assets/img/right-arrow.png" alt="" />
            </div>
            <div class="arrow right-arrow">
              <img src="../../../assets/img/right-arrow.png" alt="" />
            </div>
            <div class="arrow top-arrow">
              <img src="../../../assets/img/right-arrow.png" alt="" />
            </div>
            <div class="arrow bottom-arrow">
              <img src="../../../assets/img/right-arrow.png" alt="" />
            </div>
          </div>
          <div class="name">变倍</div>
          <div class="incre">
            <img class="inc" src="../../../assets/img/incre.png" alt="" />
            <img src="../../../assets/img/sub.png" alt="" />
          </div>
        </div>
        <!-- 选择下拉框 -->
        <div class="select-area">
          <el-select v-model="option" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import Card from "./card.vue";
export default {
  components: { Card },
  data() {
    return {
      tabs: [{ name: "服务中心" }, { name: "乡级服务中心" }, { name: "服务中心2" }],
      currentIndex: 0,
      options: [
        { label: "服务中心", value: 1 },
        { label: "乡级服务中心", value: 2 },
        { label: "服务中心2", value: 3 },
      ],
      option: 1,
      isSwitch: true,
    };
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
.right-top {
  width: 100%;
  height: 30%;

  .monitor {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
  }

  .tabs {
    width: 22%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    .tab-item {
      font-size: 12px;
      width: 100%;
      margin-bottom: 10px;
      border: 1px solid #17487b;
      padding: 7px 0px;
      text-align: center;
      border-radius: 6px;
      cursor: pointer;

      &.active {
        border: 1px solid #6ecef0;
      }
    }
  }

  .video {
    width: 62%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;

    .img {
      width: 100%;
      height: 100%;
      background-color: #6ecef0;
    }
  }

  .operate {
    width: 16%;
    height: 100%;
    padding: 10px 0;
    padding-right: 10px;
    text-align: center;

    .switch {
      width: 100%;
      background-color: #0c224c;
      padding: 5px 0;
      box-sizing: border-box;
      .title {
        font-size: 12px;
        margin-bottom: 6px;
      }
    }

    .name {
      font-size: 14px;
      margin-top: 10px;
    }

    .incre {
      margin-top: 10px;
      width: 100%;
      padding: 5px 0;
      background-color: rgba(26, 88, 190, 0.5);
      img {
        width: 15px;
        height: 15px;
        cursor: pointer;
      }
      .inc {
        margin-right: 10px;
      }
    }
    .rotate {
      margin-top: 5px;
      width: 100%;
      height: 70px;
      border-radius: 50%;
      background-color: #0e295b;
      position: relative;

      .inner {
        width: 20px;
        height: 20px;
        background-color: #1a58be;
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        cursor: pointer;
        margin: auto;
      }

      .arrow {
        position: absolute;
        img {
          width: 20px;
          cursor: pointer;
        }
      }

      .left-arrow {
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        img {
          transform: rotate(180deg);
        }
      }

      .right-arrow {
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }

      .top-arrow {
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        img {
          transform: rotate(-90deg);
        }
      }

      .bottom-arrow {
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        img {
          transform: rotate(90deg);
        }
      }
    }
  }

  .select-area {
    position: absolute;
    right: 12px;
    top: -32px;
    /deep/ .el-input__inner {
      width: 150px;
      height: 30px;
    }

    /deep/ .el-select__caret.el-input__icon.el-icon-arrow-up::before {
      position: relative;
      top: -6px;
    }
  }
}
</style>
