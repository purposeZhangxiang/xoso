<template>
  <div class="container">
    <el-form
      :inline="false"
      :model="form"
      label-position="right"
      size="small"
      label-width="100px"
    >
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
      <el-form-item label="号码">
        <el-input
          style="width: 192px"
          v-model="form.user"
          placeholder="用、分隔。例：66、89、09"
        ></el-input>
      </el-form-item>
      <el-form-item label="统计天数">
        <el-input-number
          v-model="form.num"
          :min="1"
          :max="30"
          label="描述文字"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="特等奖">
        <el-switch v-model="form.te"> </el-switch>
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
      form: {
        num: 7,
      },
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

<style lang="scss" scoped>

</style>