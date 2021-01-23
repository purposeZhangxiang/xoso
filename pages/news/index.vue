<!--  -->
<template>
  <div class="container">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">新闻{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <el-card class="box-card">
      <h2>彩票咨询各种标题</h2>
      <div class="context">
        <div class="left">
          <el-image
            src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
          ></el-image>
        </div>
        <div class="right">
          领先的彩票网站对KQXSMB进行了评论，提供了2021年1月21日今天的射击后的彩票结果的完整详细信息
        </div>
      </div>
    </el-card>

    <el-card class="box-card">
      <h2>彩票咨询各种标题</h2>
      <div class="context">
        <div class="left">
          <el-image
            src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
          ></el-image>
        </div>
        <div class="right">
          领先的彩票网站对KQXSMB进行了评论，提供了2021年1月21日今天的射击后的彩票结果的完整详细信息
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {};
  },
  created() {},
  methods: {},
});
</script>
<style lang='scss' scoped>
.box-card {
  margin-bottom: 20px;
  h2 {
    padding: 5px;
  }
  .context {
    display: flex;
    .left {
      flex: 1;
      img {
        width: 100%;
      }
    }
    .right {
      flex: 2;
      padding-left: 20px;
    }
  }
}
</style>


<style>
.el-carousel__item h3 {
  color: #475669;
  text-align: center;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>