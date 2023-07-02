<template>
  <div class="car-use">
    <div class="header">
      <tab :currentIndex="3"></tab>
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
            <el-table-column prop="date" label="统计日期"> </el-table-column>
            <el-table-column prop="carName" label="作业车辆"> </el-table-column>
            <el-table-column prop="workType" label="作业类型"> </el-table-column>
            <el-table-column prop="driver" label="车主姓名"> </el-table-column>
            <el-table-column prop="phone" label="车主电话"> </el-table-column>
            <el-table-column prop="vehicleModel" label="车辆型号"> </el-table-column>
            <el-table-column prop="workingArea" label="作业面积(亩)"> </el-table-column>
            <el-table-column prop="passArea" label="达标面积(亩)"> </el-table-column>
            <el-table-column prop="passRate" label="达标比"> </el-table-column>
            <el-table-column prop="townName" label="乡(镇)名称"> </el-table-column>
            <el-table-column prop="groupName" label="村(组)名称" width="180"> </el-table-column>
          </el-table>
        </div>
        <div class="page">
          <div class="export">
            <div class="btn">
              <img src="../../assets/img/car-use/export.png" alt="" />
              <span>导出</span>
            </div>
            <div class="infos">
              作业农机数：<span class="num">110</span>台，总作业面积：<span class="num">385,180.00</span
              >亩，总达标作业面积：<span class="num">379,019.15</span>亩。
            </div>
          </div>

          <div class="pagenation">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="20"
            >
            </el-pagination>
          </div>
        </div>
      </el-main>
      <div class="fold">
        <i style="color: #fff; cursor: pointer; font-weight: bold" class="el-icon-arrow-right"></i>
      </div>
      <el-aside width="250px">
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
    </el-container>
  </div>
</template>

<script>
import Tab from "../../components/tab/tab.vue";
import { tableData } from "./config/config";
export default {
  components: {
    Tab,
  },
  data() {
    return {
      tabs: [
        { name: "视频监控", icon: "el-icon-picture-outline", url: "/real-time-monitor" },
        { name: "农机实时监测", icon: "el-icon-s-management", url: "/car-use" },
        { name: "数字地块", icon: "el-icon-menu", url: "/area-manage" },
      ],
      currentPage: 1,
      tableData,
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
    };
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
  },
};
</script>

<style lang="less" scoped>
.car-use {
  width: 1920px;
  height: 1080px;
  position: relative;

  .header {
    width: 100%;
    height: 78px;
    background-color: rgba(4, 35, 82);
    display: flex;
    justify-content: center;
  }

  .el-container {
    height: 100%;
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
        }

        ::v-deep .el-table .odd-row {
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
