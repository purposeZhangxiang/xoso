<template>
  <div class="container">
    <el-form :inline="true" :model="form" label-position="left" size="small">
      <el-form-item label="城市">
        <el-select v-model="form.region" placeholder="活动区域">
          <el-option
            v-for="item in city"
            :key="item.name"
            :label="item.name"
            :value="item.name"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-date-picker
          v-model="form.date"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-form-item>

      <el-form-item>
        <el-button class="rebtn" icon="el-icon-search" @click="handleSubmit"
          >查询</el-button
        >
      </el-form-item>
    </el-form>
  </div>
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
      return getExpand();
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("collrect", this.form);
    },
  },
});
</script>

<style>
</style>