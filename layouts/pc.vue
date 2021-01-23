<template>
  <section class="container">
    <header class="header">
      <LogoBar></LogoBar>
      <HeaderNav :class="{ isFixed: isFixed }"></HeaderNav>
    </header>
    <div v-if="isFixed" style="height: 50px"></div>

    <!-- <div class="bread">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div> -->

    <main class="main">
      <aside class="left">
        <Nuxt />
      </aside>
      <aside class="right">
        <div class="calendar">
          <calendar class="animated pulse"></calendar>
          <OtherQuick class="animated pulse"></OtherQuick>
        </div>
      </aside>
    </main>

    <footer class="footer">
      <RecordInfo></RecordInfo>
    </footer>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      isFixed: false,
      offsetTop: 51,
    };
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", (e) => {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > this.offsetTop ? true : false;
      // console.log(this.isFixed);
    });
  },
  destroyed() {
    // window.removeEventListener('scroll', this.handleScroll)
  },
});
</script>


<style lang="scss" scoped>
.container {
  .header {
    width: 100%;
    // background: #fff;
  }
  .bread {
    width: 1100px;
    margin: 0 auto;
    padding: 15px 0;
  }
  .main {
    width: 1100px;
    min-height: calc(100vh - 151px);
    margin: 20px auto;
    display: flex;
    .left {
      flex: 1;
    }
    .right {
      width: 272px;
      .calendar {
        padding: 0 0 20px 20px;
      }
    }
  }
  .footer {
    position: relative;
    z-index: 1;
  }
}

.isFixed {
  position: fixed;
  z-index: 99;
  top: 0;
}
</style>