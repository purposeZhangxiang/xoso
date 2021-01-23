<template>
  <section>
    <header>
      <div class="left">
        <h1>
          <img src="https://cdn.xoso.com.vn/images/logo-xoso.svg" alt="xoso" />
        </h1>
      </div>
      <div class="right">
        <i class="el-icon-menu" @click="expandMenu=!expandMenu"></i>
      </div>
    </header>
    <main class="main">
      <Nuxt/>
    </main>
    <footer>
      <RecordInfo/>
    </footer>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      expandMenu: false,
    };
  },
  watch:{
    expandMenu(val,oval){
      if(val){

      }
    }
  },
  methods:{
    
  }

});
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  background: #f1184c;
  div {
    margin: 0 20px;
  }
  .left {
    img {
      height: 40px;
    }
  }
  .right {
    font-size: 30px;
    i {
      // border: 1px solid #f7dc66;
      // background: #f7dc66;
      color: #fff;
      border-radius: 3px;
    }
  }
}
</style>