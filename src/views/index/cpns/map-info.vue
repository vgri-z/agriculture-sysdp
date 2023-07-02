<template>
  <div class="map-info">
    <dv-scroll-board :config="infos" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      infos: {
        header: [
          '<span style="color:#70839b; font-size: 12px;">地块面积(亩)</span>',
          '<span style="color:#70839b; font-size: 12px;">地块数量(个)</span>',
        ],
        data: [
          [
            '<span style="color:#fff; font-size: 12px;"><=500</span>',
            '<span style="color:#2edeff; font-size: 12px;">1094</span>',
          ],
          [
            '<span style="color:#fff; font-size: 12px;">500-100</span>',
            '<span style="color:#2edeff; font-size: 12px;">0</span>',
          ],
          [
            '<span style="color:#fff; font-size: 12px;">1000-1500</span>',
            '<span style="color:#2edeff; font-size: 12px;">0</span>',
          ],
          [
            '<span style="color:#fff; font-size: 12px;">>1500</span>',
            '<span style="color:#2edeff; font-size: 12px;">0</span>',
          ],
        ],
        headerBGC: "transparent",
        rowNum: 5,
        headerHeight: 20,
        oddRowBGC: "transparent",
        evenRowBGC: "transparent",
        align: ["center", "center"],
      },
    };
  },
};
</script>

<style lang="less" scoped>
.map-info {
  width: 200px;
  height: 110px;
  padding-top: 5px;
  box-sizing: border-box;
  background-color: rgba(3, 12, 34, 0.8);
  position: absolute;
  left: 10px;
  bottom: 20px;
}
</style>
