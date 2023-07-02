<template>
  <div class="middle-top">
    <card :show-title="false">
      <div class="datas">
        <div class="data-item" v-for="(item, index) in datas" :key="index">
          <div class="name">{{ item.name }}</div>
          <div class="value">{{ item.value }}</div>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import { color } from "echarts";
import Card from "./card.vue";
export default {
  components: { Card },
  data() {
    return {
      datas: [
        { name: "地块面积(亩)", value: 45837.19 },
        { name: "作业总量(亩)", value: 456837.19 },
        { name: "农机总数(辆)", value: 234 },
        { name: "作业补贴(万元)", value: "--" },
        { name: "合作社总数(个)", value: 48 },
      ],
    };
  },
  created() {
    this.setDatas();
  },
  methods: {
    setDatas() {
      this.datas.forEach((item) => {
        item.value = this.formatter(item.value);
      });
    },
    formatter(number) {
      const numStr = number.toString();
      let numbers = null;
      let dotnumber = null;
      if (numStr.includes(".")) {
        numbers = numStr.split(".")[0].split("").reverse();
        dotnumber = numStr.split(".")[1];
      } else {
        numbers = numStr.split("").reverse();
      }

      if (numStr.includes(".")) {
        const segs = [];
        while (numbers.length) segs.push(numbers.splice(0, 3).join(""));
        return segs.join(",").split("").reverse().join("") + `.${dotnumber}`;
      } else {
        const segs = [];
        while (numbers.length) segs.push(numbers.splice(0, 3).join(""));
        return segs.join(",").split("").reverse().join("");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.middle-top {
  width: 100%;
  height: 10%;

  .datas {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
  }

  .datas .data-item {
    width: 19%;
    background-color: rgba(11, 97, 204, 0.7);
    padding: 20px 0;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .datas .data-item .value {
    color: #2edeff;
    font-weight: bold;
    font-size: 25px;
  }
}
</style>
