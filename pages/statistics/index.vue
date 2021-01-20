<template>
  <div class="container">
    <el-card class="operation mb20">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          v-for="(item, index) in tabsMenu"
          :key="item.label"
          :label="item.label"
          :name="index + ''"
        >
          <component :is="item.component" @collrect="collrect"></component>
        </el-tab-pane>
      </el-tabs>
    </el-card>

    <el-card class="result mb20">
      <h1>{{ tabsMenu[activeName].label }}结果</h1>
      <component :is="ResComp"></component>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import tab1ResVue from "~/components/statisticRes/tab1Res.vue";
import tab2ResVue from "~/components/statisticRes/tab2Res.vue";
import tab3ResVue from "~/components/statisticRes/tab3Res.vue";
import tab1Vue from "~/components/statisticsSearch/tab1.vue";
import tab2Vue from "~/components/statisticsSearch/tab2.vue";

export default Vue.extend({
  data() {
    return {
      activeName: "0",
      ResComp: tab1ResVue, // 渲染结果的表格
      tabsMenu: [
        { label: "头尾", component: tab1Vue, resComp: tab1ResVue },
        { label: "0~9", component: tab2Vue, resComp: tab2ResVue },
        { label: "00~99", component: tab2Vue, resComp: tab3ResVue },
      ],
    };
  },
  methods: {
    collrect(form: object) {
      console.log(form);
    },
    handleClick(tab: any, event: Event) {
      this.ResComp = this.tabsMenu[tab.name].resComp as any;
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  .mb20 {
    margin-bottom: 20px;
  }
}
</style>