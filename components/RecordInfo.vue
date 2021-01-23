<template>
  <div :class="['container', layout == 'Mobile' ? 'mobile' : '']">
    <div class="foot">
      <div class="f_left">
        <p class="banquan">
          <strong>
            <font>
              Copyright © 2007 - 2021 Xoso.com.vn,
            </font>
          </strong>
        </p>
        <p class="suoyouzhe"></p>
        <address>地址地址 地址</address>
        <p><font>email：xoso@ctc.com.vn</font></p>
      </div>
      <div class="f_right">
        <!-- <p>广告合作</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import layoutMixin from "~/plugins/mixin";
export default {
  mixins: [layoutMixin],
};
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
    .f_left {
      p {
        line-height: 30px;
      }
      .banquan {
        font-weight: bold;
      }
    }
    .f_right {
      padding-right: 30px;
    }
  }
}

.mobile {
  .foot {
    width: 100%;
    font-size: 12px;
    .f_left{
      padding-left: 20px;
    }
  }
}
</style>