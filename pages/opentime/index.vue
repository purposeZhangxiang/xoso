<template>
  <div class="container">
    <el-card>
      <h1>彩票奖金开放时间表</h1>
      <!-- table -->
      <el-table :data="tableData" border>
        <el-table-column prop="date" label="日期" width="160" align="center">
          <template slot="header">
            <div>日期</div>
          </template>
          <!-- table content -->
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="north"
          label="北方"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="center"
          label="中央"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="south"
          label="南方"
          align="center"
        ></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      tableData: [
        {
          date: "星期日",
          north: "地名1，地名2",
          south: "地名3，地名5",
          center: "地名8",
        },
        {
          date: "星期一",
          north: "地名1，地名2",
          south: "地名3，地名5",
          center: "地名8",
        },
        {
          date: "星期二",
          north: "地名1，地名2",
          south: "地名3，地名5",
          center: "地名8",
        },
        {
          date: "星期三",
          north: "地名1，地名2",
          south: "地名3，地名5",
          center: "地名8",
        },
        {
          date: "星期四",
          north: "地名1，地名2",
          south: "地名3，地名5",
          center: "地名8",
        },
        {
          date: "星期五",
          north: "地名1，地名2",
          south: "地名3，地名5",
          center: "地名8",
        },
      ],
    };
  },
});
</script>

<style>
</style>