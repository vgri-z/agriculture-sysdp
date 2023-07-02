<template>
  <div class="monitor-aside">
    <div class="title">
      <div>资源视图</div>
    </div>
    <div class="tree">
      <div v-for="(item, index) in treeData" :key="index" class="tree-item" @click="itemClick(item, index)">
        <div class="top">
          <div class="name">{{ item.name }}</div>
          <div class="collapse">
            <i v-if="!item.isFold" class="el-icon-arrow-right"></i>
            <i v-else class="el-icon-arrow-down"></i>
          </div>
        </div>
        <!--        <div v-if="item.isFold" class="children">-->
        <!--          <div-->
        <!--            v-for="(iten, indey) in item.children"-->
        <!--            :key="indey"-->
        <!--            class="children-tree-item"-->
        <!--            @click="childrenClick($event, iten, indey)"-->
        <!--          >-->
        <!--            <div class="name">{{ iten.name }}</div>-->
        <!--            <div class="collapse">-->
        <!--              <i v-if="!iten.isFold" class="el-icon-arrow-right"></i>-->
        <!--              <i v-else class="el-icon-arrow-down"></i>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery"; //  npm i jquery

export default {
  data() {
    return {
      treeData: [],
    };
  },
  created() {
    var that = this;
    //初始化摄像头列表
    $.ajax({
      url: "http://192.168.1.17:1937/api/1.0/XcCameralist",
      type: "GET",
      dataType: "json",
      cache: false,
      success: function (response) {
        //console.log("获取摄像头列表", response)
        for (var i = 0; i < response.rows.length; i++) {
          var data = response.rows[i];
          that.treeData.push({
            name: data.cameraname,
            info: data,
            isFold: false,
            children: [{ name: data.cameraname, children: [] }],
          });
        }
      },
    });
  },
  computed: {
    individual: {
      get() {
        return this.$store.state.settings.individual;
      },
    },
  },
  methods: {
    itemClick(item, index) {
      // console.log(item)
      item.isFold = !item.isFold;
      this.$parent.getbagndianID(item.info.purchaseprice, item.info.installer, item.info.buyer, item.info.purchasetime);
    },
    childrenClick(event, item, index) {
      event.stopPropagation();
    },
  },
};
</script>

<style lang="less" scoped>
.monitor-aside {
  width: 400px;
  height: 93%;
  margin-right: 20px;
  background: linear-gradient(to bottom, #2382e7, #2382e7) left top / 2px 10px no-repeat,
    linear-gradient(to right, #2382e7, #2382e7) left top / 10px 2px no-repeat,
    linear-gradient(to left, #2382e7, #2382e7) right top / 10px 2px no-repeat,
    linear-gradient(to bottom, #2382e7, #2382e7) right top / 2px 10px no-repeat,
    linear-gradient(to top, #2382e7, #2382e7) bottom left / 2px 10px no-repeat,
    linear-gradient(to right, #2382e7, #2382e7) bottom left / 10px 2px no-repeat,
    linear-gradient(to left, #2382e7, #2382e7) bottom right / 10px 2px no-repeat,
    linear-gradient(to top, #2382e7, #2382e7) bottom right / 2px 10px no-repeat;

  background-color: rgba(4, 35, 82, 0.6);

  .title {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    width: 100%;
    height: 50px;
    padding: 0 40px;
    box-sizing: border-box;

    > div {
      width: 100%;
      height: 100%;
      border-bottom: 2px solid #3b7bb4;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .tree {
    color: #fff;
    padding: 30px;

    .tree-item {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      font-size: 22px;

      .top {
        display: flex;
        justify-content: space-between;
      }

      .children {
        margin-top: 10px;
        padding-left: 15px;
        box-sizing: border-box;

        .children-tree-item {
          display: flex;
          justify-content: space-between;
        }
      }

      .el-icon-arrow-down,
      .el-icon-arrow-right {
        color: #587cb1;
        font-weight: bold;
      }
    }
  }
}
</style>
