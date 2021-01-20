<!--  -->
<template>
  <div class="calendar-box">
    <div class="c">
      <v-calendar
        :attributes="attrs"
        title-position="left"
        @dayclick="onDayClick"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
export default Vue.extend({
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      attrs: [],
      isDot: false,
      desc: new Date().toLocaleString() + "暂无日程",
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getAttrs();
  },
  mounted() {},
  methods: {
    onDayClick(day: any) {
      console.log(day);
      let { ariaLabel, attributes } = day;
      console.log(ariaLabel);
      if (attributes.length == 0) {
        this.isDot = false;
        this.desc = `${ariaLabel} 暂无日程`;
      } else {
        this.isDot = true;
      }
    },
    mockData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let data = [
            {
              key: "id001",
              highlight: {
                color: "red",
                fillMode: "light",
              },
              dates: new Date(),
              popover: {
                label: "今日事情",
              },
            },
            {
              key: "id002",
              dot: {
                color: "red",
              },
              dates: new Date(2020, 11, 20),
              popover: {
                label: "今日事情",
              },
            },
            {
              key: "id003",
              dot: {
                color: "red",
              },
              dates: new Date(2020, 11, 15),
              popover: {
                label: "今日事情",
              },
            },
          ];
          resolve(data);
        }, 2000);
      });
    },
    async getAttrs() {
      let attrs = await this.mockData();
      this.attrs = attrs as any;
    },
  },
});
</script>
<style lang='scss' scoped>
.calendar-box {
  display: flex;
}
.day {
  flex: 1;
  text-align: center;
  .no {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

