<template>
  <div class="container">
    <div class="city">
      <el-form>
        <el-radio-group v-model="radio">
          <el-radio v-for="item in city" :key="item.name" :label="item.name">{{
            item.name
          }}</el-radio>
        </el-radio-group>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getDreiction } from "~/assets/json/city";
export default Vue.extend({
  data() {
    return {
      radio: "",
    };
  },
  computed: {
    city() {
      return getDreiction("Miền Bắc");
    },
  },
});
</script>


<style lang="scss" scoped>
</style>