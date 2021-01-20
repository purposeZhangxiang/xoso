<template>
  <div class="container">
    <div class="city">
      <CityPanel></CityPanel>
    </div>
    <div class="result">
      <LotteryCard></LotteryCard>
      <LotteryCard></LotteryCard>
      <LotteryCard></LotteryCard>
      <LotteryCard></LotteryCard>
      <LotteryCard></LotteryCard>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  .city{
    width: 160px;
    margin-right: 20px;
  }
  .result {
    flex: 1;
    // width: 600px;

    padding: 0 10px;
    box-sizing: border-box;
  }
}
</style>