<template>
  <div class="container wow fadeIn">
    <el-card class="box-card">
      <div class="header">
        <p>{{tableData.large_species_code}}彩票结果 <span>2021年01月06日</span></p>
      </div>
      <div class="table">
        <!-- left table -->
        <div class="t1box">
          <el-table :data="tableData.t1" border>
            <el-table-column
              prop="date"
              label="奖项"
              width="160"
              align="center"
            >
              <template slot="header">
                <div>奖项</div>
              </template>
              <!-- table content -->
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="开奖号" align="center">
              <template slot="header">
                <div>首都彩票</div>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- right table -->
        <div class="t2box">
          <el-table :data="tableData.t2" border>
            <el-table-column prop="date" label="奖项" align="center">
              <template slot="header">
                <div>头</div>
              </template>

              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="开奖号" align="center">
              <template slot="header">
                <div>尾</div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
if (process.browser) {
  // 在这里根据环境引入wow.js
  var { WOW } = require("wowjs");
}
export default Vue.extend({
  props: {
    tableData: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  mounted() {
    if (process.browser) {
      new WOW({
        live: false,
        offset: 0,
      }).init();
    }
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin-bottom: 30px;
  .box-card {
    width: 100%;
    .header {
      p {
        font-size: 20px;
        font-weight: bold;
        padding-right: 20px;
        span {
          color: #909399;
          font-size: 16px;
        }
      }
    }
    .table {
      display: flex;
      .t1box {
        width: 70%;
      }
      .t2box {
        // flex: 1; //bug
        margin-left: 15px;
        box-sizing: border-box;
      }
    }
  }
}
</style>