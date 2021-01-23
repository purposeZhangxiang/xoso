<template>
  <component :is="layout"></component>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      layout: "PC",
    };
  },
  components: {
    Mobile: () => import("./mobile.vue"),
    PC: () => import("./pc.vue"),
  },
  mounted() {
    if (this.isMobile()) {
      this.layout = "Mobile";
      return;
    }
    this.layout = "PC";
  },
  methods: {
    isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
  },
});
</script>

<style lang="scss" scoped>
</style>