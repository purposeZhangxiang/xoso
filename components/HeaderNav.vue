<template>
  <div class="container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#f1184c"
      text-color="#fff"
      active-text-color="#f7dc66"
      router
    >
      <template v-for="(item, index) in menu">
        <template v-if="item.children">
          <el-submenu :key="index + ''" :index="index + ''">
            <template slot="title">{{ item.label }}</template>
            <el-menu-item
              v-for="(sub, subIndex) in item.children"
              :index="sub.router"
              :key="index + '' + subIndex"
            >
              {{ sub.label }}
            </el-menu-item>
          </el-submenu>
        </template>

        <el-menu-item :key="index" :index="item.router" v-else>
          {{ item.label }}
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      activeIndex: "0",
      menu: [
        { label: "今日开奖", router: "/" },
        {
          label: "往期开奖",
          children: [
            { label: "北方彩票", router: "/northLott" },
            { label: "南方彩票", router: "/southLott" },
            { label: "中央彩票", router: "/centerLott" },
          ],
        },
        { label: "统计分析", router: "/statistics" },
        { label: "开奖时间表", router: "/opentime" },
        { label: "外部链接", router: "" },
      ],
    };
  },
  methods: {
    handleSelect(row: any) {
      console.log(row);
    },
  },
});
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  //   background: #f36943;
  background: #f1184c;
  margin-bottom: 10px;
  
}
.el-menu-demo {
  max-width: 1100px;
  margin: 0 auto;
}
</style>