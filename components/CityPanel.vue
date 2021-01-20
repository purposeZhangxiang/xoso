<template>
  <div class="container">
    <div v-for="item in city" :key="item.name">
      <p class="classify">{{ item.name }}</p>
      <ul>
        <li v-for="c in item.list" :key="c.name">{{ c.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import cityJson from "~/assets/json/city.js";

export default Vue.extend({
  data() {
    return {};
  },
  computed: {
    city() {
      return cityJson;
    },
  },
});
</script>



<style lang="scss" scoped>
.container {
  border: 1px solid #cdd5df;
  border-radius: 6px;
  overflow: hidden;
  div {
    display: block;
    .classify {
      background: #f1184c;
      color: white;
      font-weight: bold;
      padding-left: 10px;
    }
    ul {
      color: #666666;
      list-style: none;
      font-size: 14px;
      padding: 0;
      li {
        padding: 0px 10px;
        line-height: 16px;
        margin: 5px 0;
        border-left: 3px solid #fff;
        transition: all 0.3s linear;
        cursor: pointer;
        &:hover {
          color: #000;
          background: #f5f5f5;
          border-left: 3px solid #f1184c;
          transition: all 0.3s linear;
        }
      }
    }
  }
}
</style>