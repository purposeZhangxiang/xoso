<template>
   
  <component :is="layout"></component>

</template>

<script lang="ts">
// <pc v-if="layout=='PC'" />
  //  <mobile v-else> 
//
import Vue from "vue";
export default Vue.extend({
  data() {
    return {};
  },
  computed: {
    layout() {
      return this.$store.state.layout;
    },
  },
  components: {
    Mobile: () => import("./mobile.vue"),
    PC: () => import("./pc.vue"),
  },
  mounted() {
    if (this.isMobile()) {
      // console.log(this.$store.commit('changeLayout', ));
      this.$store.commit("changeLayout", "Mobile");
      console.log(this.$store.state.layout);
      return;
    }
    this.$store.commit("changeLayout", "PC");
    console.log(this.$store.state.layout);
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