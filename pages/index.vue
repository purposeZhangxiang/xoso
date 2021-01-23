<template>
  <section :class="['container', layout == 'Mobile' ? 'mobile' : '']">
    <aside class="city">
      <CityPanel></CityPanel>
    </aside>
    <div class="result">
      <LotteryCard :tableData="tableData"></LotteryCard>
      <LotteryCard :tableData="tableData"></LotteryCard>
      <LotteryCard :tableData="tableData"></LotteryCard>
      <LotteryCard :tableData="tableData"></LotteryCard>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import layoutMixin from "~/plugins/mixin";
export default Vue.extend({
  mixins: [layoutMixin],
  data() {
    return {
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
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  .city {
    width: 160px;
    margin-right: 20px;
  }
  .result {
    flex: 1;
    padding: 0 10px;
    box-sizing: border-box;
  }
}

.mobile {
  .city {
    display: none;
  }
}
</style>