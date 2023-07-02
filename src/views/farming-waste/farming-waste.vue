<template>
  <div class="farming-waste">
    <new-header :currentIndex="6"></new-header>
    <div style="width: 100%; height: 400px; padding: 10px 20px; box-sizing: border-box; display: flex">
      <div class="card" style="width: 30%">
        <card :info="bottomInfo1">
          <template v-slot:title-right>
            <div style="color: #fff">单位：公斤</div>
          </template>
          <template v-slot:content>
            <!-- <div ref="chartRef3" style="width: 100%; height: 100%"></div> -->
            <div style="height: 100%; display: flex; justify-content: center; align-items: center">
              <div @click="toBaidu">
                <span style="color: #4cc5d5; font-size: 50px; margin-right: 5px">{{ listconunt }}</span>
                <span style="font-size: 20px; color: #4cc5d5">公斤</span>
              </div>
            </div>
          </template>
        </card>
      </div>
      <div
        ref="chartRef1"
        style="width: 100%; height: 100%; background-color: #1e202f; border-radius: 10px; margin-left: 10px"
      ></div>
    </div>
    <el-container>
      <el-main>
        <div class="table-data">
          <el-table
            :data="tableData"
            border
            :row-class-name="tableRowClassName"
            style="width: 100%"
            :header-cell-style="{
              backgroundColor: '#269baf',
              color: '#fff',
            }"
          >
            <el-table-column prop="orgname" label="单位名称"></el-table-column>
            <el-table-column prop="nfaddress" label="位置"></el-table-column>
            <el-table-column prop="puser" label="联系人"></el-table-column>
            <el-table-column prop="phone" label="手机号"></el-table-column>
            <el-table-column prop="date" label="数据更新时间"></el-table-column>
            <el-table-column prop="numbers" label="数量(公斤)"></el-table-column>
            <el-table-column width="100" label="操作">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="page">
          <!--          <div class="export">-->
          <!--            <div class="btn">-->
          <!--              <img src="../../assets/img/car-use/export.png" alt="" />-->
          <!--              <span>导出</span>-->
          <!--            </div>-->
          <!--            <div class="infos">-->
          <!--              作业农机数：<span class="num">110</span>台，总作业面积：<span class="num">385,180.00</span-->
          <!--              >亩，总达标作业面积：<span class="num">379,019.15</span>亩。-->
          <!--            </div>-->
          <!--          </div>-->

          <!--          <div class="pagenation">-->
          <!--            <el-pagination-->
          <!--              @size-change="handleSizeChange"-->
          <!--              @current-change="handleCurrentChange"-->
          <!--              :current-page="currentPage"-->
          <!--              :page-sizes="[100, 200, 300, 400]"-->
          <!--              :page-size="100"-->
          <!--              layout="total, sizes, prev, pager, next, jumper"-->
          <!--              :total="20"-->
          <!--            >-->
          <!--            </el-pagination>-->
          <!--          </div>-->
        </div>
      </el-main>
      <div v-if="false" class="fold">
        <i style="color: #fff; cursor: pointer; font-weight: bold" class="el-icon-arrow-right"></i>
      </div>
      <el-aside v-if="false" width="250px">
        <div class="aside">
          <el-form ref="reqsForm" :rules="{}" :model="formData.request" label-width="55px">
            <el-row>
              <el-col :span="24">
                <div class="title">归属区域</div>
              </el-col>
              <el-col :span="24">
                <el-form-item label="省(市):">
                  <el-select v-model="formData.province" placeholder="请选择省(市)" clearable>
                    <el-option v-for="(item, index) in province" :key="index" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="地(市):">
                  <el-select v-model="formData.land" placeholder="请选择省(市)" clearable>
                    <el-option v-for="(item, index) in land" :key="index" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="县(旗):">
                  <el-select v-model="formData.county" placeholder="请选择省(市)" clearable>
                    <el-option v-for="(item, index) in county" :key="index" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="乡(镇):">
                  <el-select v-model="formData.town" placeholder="请选择省(市)" clearable>
                    <el-option v-for="(item, index) in town" :key="index" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="村(组):">
                  <el-select v-model="formData.group" placeholder="请选择省(市)" clearable>
                    <el-option v-for="(item, index) in group" :key="index" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="24">
                <div class="title">作业车辆</div>
              </el-col>
              <el-col :span="24">
                <el-form-item label="编号:">
                  <el-select v-model="formData.workCars" placeholder="请选择作业车辆" clearable>
                    <el-option v-for="(item, index) in workCars" :key="index" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="24">
                <div class="title">作业类型</div>
              </el-col>
              <el-col :span="24">
                <el-form-item label="作业:">
                  <el-select v-model="formData.workType" placeholder="请选择作业车辆" clearable>
                    <el-option v-for="(item, index) in workType" :key="index" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="24">
                <div class="title">统计时间</div>
              </el-col>
              <el-col :span="24">
                <el-form-item label="时段:">
                  <el-select v-model="formData.statisticalTime" placeholder="请选择作业车辆" clearable>
                    <el-option
                      v-for="(item, index) in statisticalTime"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <div class="operate">
                  <img src="../../assets/img/car-use/chart.png" alt="" />
                  <span>图标汇总</span>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="operate">
                  <img src="../../assets/img/car-use/print.png" alt="" />
                  <span>报单打印</span>
                </div>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-aside>

      <el-dialog title="农业废弃物回收记录" :visible.sync="dialogVisible" top="25%" width="1000px">
        <el-descriptions :column="3" border>
          <el-descriptions-item label="联系人" label-class-name="my-label" content-class-name="my-content">
            {{ showdata.puser }}
          </el-descriptions-item>
          <el-descriptions-item label="手机号">{{ showdata.phone }}</el-descriptions-item>
          <el-descriptions-item label="总回收量">
            <el-tag size="small">{{ showdata.numbers }}公斤</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="单位名称">
            <el-tag size="small">{{ showdata.orgname }}</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="联系地址" :contentStyle="{ 'text-align': 'right' }"
            >{{ showdata.nfaddress }}
          </el-descriptions-item>
        </el-descriptions>

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>回收时间轴</span>
          </div>
          <div class="text item">
            <el-timeline :reverse="true">
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :icon="activity.icon"
                :type="activity.type"
                :color="activity.color"
                :size="activity.size"
                :timestamp="activity.timestamp"
              >
                {{ activity.content }}
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-card>
      </el-dialog>
    </el-container>
  </div>
</template>

<script>
//import { tableData } from "./config/config";
import * as echarts from "echarts";
import Card from "../../components/card/card.vue";
import { options1 } from "./config/chart.config";
import NewHeader from "@/components/new-header/new-header.vue";
import $ from "jquery"; //  npm i jquery

export default {
  components: {
    NewHeader,
    Card,
  },
  data() {
    return {
      showdata: {},
      dialogVisible: false,
      activities: [],
      bottomInfo1: { name: "总回收量" },
      tabs: [
        { name: "视频监控", icon: "el-icon-picture-outline", url: "/real-time-monitor" },
        { name: "农机实时监测", icon: "el-icon-s-management", url: "/car-use" },
        { name: "数字地块", icon: "el-icon-menu", url: "/area-manage" },
      ],
      listconunt: 1,
      currentPage: 1,
      tableData: [],
      county: [{ label: "灵武市", value: 1 }],
      land: [{ label: "银川市", value: 1 }],
      province: [{ label: "宁夏回族自治区", value: 1 }],
      town: [{ label: "全部", value: 1 }],
      group: [{ label: "全部", value: 1 }],
      workCars: [{ label: "全部", value: 1 }],
      workType: [{ label: "全部", value: 1 }],
      statisticalTime: [{ label: "今年汇总", value: 1 }],
      formData: {
        county: 1,
        land: 1,
        province: 1,
        town: 1,
        group: 1,
        workCars: 1,
        workType: 1,
        statisticalTime: 1,
      },
      options1,
    };
  },
  mounted() {
    this.setOptions1();
    const that = this;
    //获取农废总量
    $.ajax({
      url: "http://192.168.1.17:1937/api/1.0/xcNyfqwCount",
      type: "GET",
      dataType: "json",
      cache: false,
      success: function (response) {
        console.log("获取农废总量", response.data);
        that.listconunt = response.data.count;
      },
    });
    //获取农废列表
    $.ajax({
      url: "http://192.168.1.17:1937/api/1.0/XcNyfqwlist",
      type: "GET",
      dataType: "json",
      cache: false,
      success: function (response) {
        console.log("获取农废列表", response);
        that.tableData = response.rows;
      },
    });
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return "even-row";
      } else if (rowIndex % 2 === 1) {
        return "odd-row";
      }
      return "";
    },
    handleSizeChange() {},
    handleCurrentChange() {},
    setOptions1() {
      const that = this;
      //获取农废曲线
      $.ajax({
        url: "http://192.168.1.17:1937/api/1.0/xcNyfqwCurve",
        type: "GET",
        dataType: "json",
        cache: false,
        success: function (response) {
          console.log("获取农废曲线", response.data);
          var curve = [
            response.data[2021],
            response.data[2022],
            response.data[2023],
            response.data[2024],
            response.data[2025],
            response.data[2026],
          ];
          that.options1.series[0].data = curve;
          console.log("获取农废曲线", that.options1);
          that.myChart1 = echarts.init(that.$refs.chartRef1);
          that.myChart1.setOption(that.options1);
        },
      });
    },
    toBaidu() {},
    handleEdit(row, data) {
      var that = this;
      that.showdata = data;

      that.dialogVisible = true;

      that.activities = [];
      var data = {
        pageNum: 1,
        pageSize: 10000,
        nyfqwid: data.id,
      };

      $.ajax({
        url: "http://192.168.1.17:1937/api/1.0/XcNyfqwloglist",
        type: "GET",
        dataType: "json",
        data: data,
        cache: false,
        success: function (response) {
          console.log("获取农废时间轴", response);
          for (var i = 0; i < response.rows.length; i++) {
            that.activities.push({
              content: "添加农药废弃物数量" + response.rows[i].fqsize + "公斤",
              timestamp: response.rows[i].date,
              color: "#0bbd87",
            });
          }
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.farming-waste {
  width: 1920px;
  height: 1080px;
  position: relative;

  .el-container {
    height: calc(100% - 400px);

    .el-aside {
      height: 100%;
      background-color: #16525d;

      .aside {
        width: 100%;
        height: 100%;
        padding: 15px;
        box-sizing: border-box;

        ::v-deep .el-form-item__label {
          color: #fff;
        }

        .title {
          margin-bottom: 10px;
          color: #fff;
          font-weight: bold;
        }

        .operate {
          color: #fff;
          display: flex;
          align-items: center;
          cursor: pointer;

          img {
            width: 25px;
            margin-right: 5px;
          }
        }
      }
    }

    .fold {
      width: 25px;
      height: 100%;
      background-color: #0a75a7;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .el-main {
      height: 100%;
      padding: 0;
      position: relative;

      .table-data {
        height: calc(100% - 33px);
        overflow: auto;
        margin-bottom: 10px;

        ::v-deep .el-table .even-row {
          background: #e6e6e6;
          color: black;
          font-weight: 500;
        }

        ::v-deep .el-table .odd-row {
          color: black;
          font-weight: 500;
          background: #8caaae;
        }

        ::v-deep .el-table__body tr:hover > td {
          background-color: #f4d1ab !important;
        }
      }

      .page {
        color: #fff;
        padding: 2px 4px;
        box-sizing: border-box;
        background-color: #43747b;
        display: flex;
        justify-content: space-between;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;

        .export {
          display: flex;
          align-items: center;

          .btn {
            margin-right: 15px;
            display: flex;
            align-items: center;

            img {
              width: 20px;
              margin-right: 3px;
            }
          }

          .infos {
            .num {
              color: #b7e34f;
            }
          }
        }

        ::v-deep .el-pagination__total {
          color: #fff !important;
        }

        ::v-deep .el-pagination__jump {
          color: #fff;
        }
      }
    }
  }
}
</style>
