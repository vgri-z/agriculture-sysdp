<template>
  <div class="pop-info">
    <div class="title">
      <div class="title-icon">
        <img src="../../assets/img/info.png" alt="" />
      </div>
      <div class="text">{{ name }}</div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="less" scoped>
.pop-info {
  color: #fff;
  width: 457px;
  height: 237px;
  border: solid 1px #ffffff;
  padding: 15px;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 10px;

  .title {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .title-icon {
      width: 30px;
      height: 30px;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
