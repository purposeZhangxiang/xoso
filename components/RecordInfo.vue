<template>
  <div class="container">
    <div class="foot">
      <div class="f_left">
        <p class="banquan">
          Copyright © 2007 - 2021 Xoso.com.vn, All Rights Reserved
        </p>
        <p class="suoyouzhe"></p>
        <p>地址地址 地址</p>
        <p>email：xoso@ctc.com.vn</p>
      </div>
      <div class="f_right">
          <!-- <p>广告合作</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  background: #555;
  color: #fff;
  .foot {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .f_left{
        p{
            line-height: 30px;
        }
        .banquan{
            font-weight: bold;
        }
    }
    .f_right{
        padding-right: 30px;
    }
  }
}
</style>