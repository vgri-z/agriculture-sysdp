<template>
  <div class="left-top">
    <card :title="'历史作业情况'">
      <div class="table">
        <div class="tab">
          <span>作业补贴</span>
        </div>

        <dv-scroll-board :config="tableData" style="width: 100%; height: 100%" />
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
      tableData: {
        header: [
          '<span style="color:#2be7ed; font-size: 12px;">设备号</span>',
          '<span style="font-size: 12px;">车主名称</span>',
          '<span style="font-size: 12px;">作业类型</span>',
          '<span style="font-size: 12px;">作业面积</span>',
          '<span style="font-size: 12px;">补贴金额</span>',
          '<span style="font-size: 12px;">日期</span>',
        ],
        data: [
          [
            '<span style="color:#2be7ed; font-size: 12px;">18647264bh</span>',
            '<span style="font-size: 12px;">张三</span>',
            '<span style="font-size: 12px;">其他作业</span>',
            '<span style="font-size: 12px;">10.06</span>',
            '<span style="font-size: 12px;">100</span>',
            '<span style="font-size: 12px;">2023-09-09</span>',
          ],
          [
            '<span style="color:#2be7ed; font-size: 12px;">18647264bh</span>',
            '<span style="font-size: 12px;">张三</span>',
            '<span style="font-size: 12px;">其他作业</span>',
            '<span style="font-size: 12px;">10.06</span>',
            '<span style="font-size: 12px;">100</span>',
            '<span style="font-size: 12px;">2023-09-09</span>',
          ],
          [
            '<span style="color:#2be7ed; font-size: 12px;">18647264bh</span>',
            '<span style="font-size: 12px;">张三</span>',
            '<span style="font-size: 12px;">其他作业</span>',
            '<span style="font-size: 12px;">10.06</span>',
            '<span style="font-size: 12px;">100</span>',
            '<span style="font-size: 12px;">2023-09-09</span>',
          ],
          [
            '<span style="color:#2be7ed; font-size: 12px;">18647264bh</span>',
            '<span style="font-size: 12px;">张三</span>',
            '<span style="font-size: 12px;">其他作业</span>',
            '<span style="font-size: 12px;">10.06</span>',
            '<span style="font-size: 12px;">100</span>',
            '<span style="font-size: 12px;">2023-09-09</span>',
          ],
          [
            '<span style="color:#2be7ed; font-size: 12px;">18647264bh</span>',
            '<span style="font-size: 12px;">张三</span>',
            '<span style="font-size: 12px;">其他作业</span>',
            '<span style="font-size: 12px;">10.06</span>',
            '<span style="font-size: 12px;">100</span>',
            '<span style="font-size: 12px;">2023-09-09</span>',
          ],
          [
            '<span style="color:#2be7ed; font-size: 12px;">18647264bh</span>',
            '<span style="font-size: 12px;">张三</span>',
            '<span style="font-size: 12px;">其他作业</span>',
            '<span style="font-size: 12px;">10.06</span>',
            '<span style="font-size: 12px;">100</span>',
            '<span style="font-size: 12px;">2023-09-09</span>',
          ],
          [
            '<span style="color:#2be7ed; font-size: 12px;">18647264bh</span>',
            '<span style="font-size: 12px;">张三</span>',
            '<span style="font-size: 12px;">其他作业</span>',
            '<span style="font-size: 12px;">10.06</span>',
            '<span style="font-size: 12px;">100</span>',
            '<span style="font-size: 12px;">2023-09-09</span>',
          ],
          [
            '<span style="color:#2be7ed; font-size: 12px;">18647264bh</span>',
            '<span style="font-size: 12px;">张三</span>',
            '<span style="font-size: 12px;">其他作业</span>',
            '<span style="font-size: 12px;">10.06</span>',
            '<span style="font-size: 12px;">100</span>',
            '<span style="font-size: 12px;">2023-09-09</span>',
          ],
          [
            '<span style="color:#2be7ed; font-size: 12px;">18647264bh</span>',
            '<span style="font-size: 12px;">张三</span>',
            '<span style="font-size: 12px;">其他作业</span>',
            '<span style="font-size: 12px;">10.06</span>',
            '<span style="font-size: 12px;">100</span>',
            '<span style="font-size: 12px;">2023-09-09</span>',
          ],
          [
            '<span style="color:#2be7ed; font-size: 12px;">18647264bh</span>',
            '<span style="font-size: 12px;">张三</span>',
            '<span style="font-size: 12px;">其他作业</span>',
            '<span style="font-size: 12px;">10.06</span>',
            '<span style="font-size: 12px;">100</span>',
            '<span style="font-size: 12px;">2023-09-09</span>',
          ],
          [
            '<span style="color:#2be7ed; font-size: 12px;">18647264bh</span>',
            '<span style="font-size: 12px;">张三</span>',
            '<span style="font-size: 12px;">其他作业</span>',
            '<span style="font-size: 12px;">10.06</span>',
            '<span style="font-size: 12px;">100</span>',
            '<span style="font-size: 12px;">2023-09-09</span>',
          ],
          [
            '<span style="color:#2be7ed; font-size: 12px;">18647264bh</span>',
            '<span style="font-size: 12px;">张三</span>',
            '<span style="font-size: 12px;">其他作业</span>',
            '<span style="font-size: 12px;">10.06</span>',
            '<span style="font-size: 12px;">100</span>',
            '<span style="font-size: 12px;">2023-09-09</span>',
          ],
          [
            '<span style="color:#2be7ed; font-size: 12px;">18647264bh</span>',
            '<span style="font-size: 12px;">张三</span>',
            '<span style="font-size: 12px;">其他作业</span>',
            '<span style="font-size: 12px;">10.06</span>',
            '<span style="font-size: 12px;">100</span>',
            '<span style="font-size: 12px;">2023-09-09</span>',
          ],
          [
            '<span style="color:#2be7ed; font-size: 12px;">18647264bh</span>',
            '<span style="font-size: 12px;">张三</span>',
            '<span style="font-size: 12px;">其他作业</span>',
            '<span style="font-size: 12px;">10.06</span>',
            '<span style="font-size: 12px;">100</span>',
            '<span style="font-size: 12px;">2023-09-09</span>',
          ],
          [
            '<span style="color:#2be7ed; font-size: 12px;">18647264bh</span>',
            '<span style="font-size: 12px;">张三</span>',
            '<span style="font-size: 12px;">其他作业</span>',
            '<span style="font-size: 12px;">10.06</span>',
            '<span style="font-size: 12px;">100</span>',
            '<span style="font-size: 12px;">2023-09-09</span>',
          ],
          [
            '<span style="color:#2be7ed; font-size: 12px;">18647264bh</span>',
            '<span style="font-size: 12px;">张三</span>',
            '<span style="font-size: 12px;">其他作业</span>',
            '<span style="font-size: 12px;">10.06</span>',
            '<span style="font-size: 12px;">100</span>',
            '<span style="font-size: 12px;">2023-09-09</span>',
          ],
          [
            '<span style="color:#2be7ed; font-size: 12px;">18647264bh</span>',
            '<span style="font-size: 12px;">张三</span>',
            '<span style="font-size: 12px;">其他作业</span>',
            '<span style="font-size: 12px;">10.06</span>',
            '<span style="font-size: 12px;">100</span>',
            '<span style="font-size: 12px;">2023-09-09</span>',
          ],
        ],
        headerBGC: "#009fc1",
        rowNum: 14,
        oddRowBGC: "#11244a",
        evenRowBGC: "#091432",
      },
    };
  },
};
</script>

<style lang="less" scoped>
.left-top {
  width: 100%;
  height: 66%;

  .table {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .table .tab {
    font-size: 12px;
    position: absolute;
    right: 10px;
    top: -25px;
    padding-bottom: 5px;
    border-bottom: 2px solid #2fe5ff;
  }
}
</style>
