<template>
  <div class="container wow fadeIn">
    <el-card class="box-card">
      <div class="header">
        <p>北方彩票结果 <span>2021年01月06日</span></p>
      </div>
      <div class="table">
        <!-- left table -->
        <div class="t1box ">
          <el-table :data="tableData" border>
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
          <el-table :data="tableData2" border>
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
  data() {
    return {
      tableData: [
        {
          date: "特等奖",
          name: "23456",
        },
        {
          date: "一等奖",
          name: "123456",
        },
        {
          date: "三等奖",
          name: "123456，67892",
        },
        {
          date: "四等奖",
          name: "778889",
        },
      ],

      tableData2: [
        {
          date: "1",
          name: "2,3,4",
        },
        {
          date: "2",
          name: "3,5,6",
        },
        {
          date: "3",
          name: "2,3",
        },
        {
          date: "6",
          name: "6,7",
        },
      ],
    };
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
      width: 100%;
      .t1box {
        width: 70%;
      }
      .t2box {
        flex: 1;
        margin-left: 15px;
        box-sizing: border-box;
      }
    }
  }
}
</style>