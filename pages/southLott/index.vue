<template>
  <div class="container">
    <div class="city">
      <el-form>
        <el-form-item>
          <el-radio-group v-model="radio">
          <el-radio class="radioWidth" v-for="item in city" :key="item.name" :label="item.name">{{
            item.name
          }}</el-radio>
        </el-radio-group>
        </el-form-item>
      </el-form>
    </div>

    <LotteryCard></LotteryCard>
    <LotteryCard></LotteryCard>
    <LotteryCard></LotteryCard>
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
      return getDreiction("Miền Nam");
    },
  },
});
</script>


<style lang="scss" scoped>
.city{
  margin-bottom: 20px;
}
.radioWidth{
  width: 20%;
  margin: 5px 0;
}
</style>