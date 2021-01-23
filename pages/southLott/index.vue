<template>
  <div class="container">
    <div class="city">
      <el-form>
        <el-form-item>
          <el-radio-group v-model="radio">
            <el-radio
              class="radioWidth"
              v-for="item in city"
              :key="item.name"
              :label="item.name"
              >{{ item.name }}</el-radio
            >
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>

    <LotteryCard :tableData="tableData"></LotteryCard>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getDreiction } from "~/assets/json/city";
export default Vue.extend({
  data() {
    return {
      radio: "",
      tableData: {
        large_species_code: "SOUTH",
        period: "13/01/2021",
        t1: [
          {
            date: "特等奖",
            name: "23456",
          },
          {
            date: "一等奖",
            name: "123456",
          },
          {
            date: "三等奖",
            name: "123456，67892",
          },
          {
            date: "四等奖",
            name: "778889",
          },
        ],

        t2: [
          {
            date: "1",
            name: "2,3,4",
          },
          {
            date: "2",
            name: "3,5,6",
          },
          {
            date: "3",
            name: "2,3",
          },
          {
            date: "6",
            name: "6,7",
          },
        ],
      },
    };
  },
  computed: {
    city() {
      // return getDreiction("Miền Nam");
      let south = getDreiction("Miền Nam");
      this.radio = south[0].name;
      return south;
    },
  },
});
</script>


<style lang="scss" scoped>
.city {
  margin-bottom: 20px;
}
.radioWidth {
  width: 20%;
  margin: 5px 0;
}
</style>