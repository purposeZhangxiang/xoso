<template>
  <aside class="container">
    <header class="header">追踪结果</header>
    <el-form
      class="form"
      :model="form"
      label-position="left"
      label-width="40px"
    >
      <el-form-item label="城市">
        <el-select v-model="form.region" placeholder="活动区域">
          <!-- <el-option label="区域一" value="shanghai"></el-option> -->
          <el-option v-for="item in city" :key="item.name" :label="item.name" :value="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="号码">
        <el-input
          v-model="form.user"
          placeholder="用、分隔。例：66、89、09"
        ></el-input>
      </el-form-item>

      <el-form-item label="起始">
        <el-date-picker
          type="date"
          placeholder="选择起始日期"
          v-model="form.start"
          style="width: 100%"
        ></el-date-picker>
      </el-form-item>

      <el-form-item label="结束">
        <el-date-picker
          type="date"
          placeholder="选择结束日期"
          v-model="form.start"
          style="width: 100%"
        ></el-date-picker>
      </el-form-item>

      <el-form-item>
        <el-button class="rebtn" icon="el-icon-search" @click="handleSubmit"
          >查询</el-button
        >
      </el-form-item>
    </el-form>
  </aside>
</template>

<script lang="ts">
import Vue from "vue";

import { getExpand } from "~/assets/json/city";
export default Vue.extend({
  data() {
    return {
      form: {},
    };
  },
  computed: {
    city() {
      // return expand;
      return getExpand()

    },
  },
  methods: {
    handleSubmit() {},
  },
});
</script>


<style lang="scss" scoped>
.container {
  margin-top: 20px;
  width: 250px;
  border: 1px solid #cdd5df;
  border-radius: 6px;
  overflow: hidden;
  .header {
    height: 40px;
    line-height: 40px;
    background: #f1184c;
    color: #fff;
    padding-left: 20px;
  }
  .form {
    padding: 20px;
    // .rebtn {
    //   background: rgba($color: #f1184c, $alpha: 0.85);

    //   color: #fff;
    //   transition: all 0.3s linear;
    //   &:hover {
    //     transition: all 0.3s linear;
    //     background: #f1184c;
    //   }
    // }
  }
}
</style>