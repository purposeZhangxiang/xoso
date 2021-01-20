<template>
  <div class="container">
     <el-table :data="tableData" border :row-class-name="tableRowClassName">
    <el-table-column prop="date" label="数字" width="180" align="center">
    </el-table-column>
    <el-table-column prop="name" label="统计记录" align="center">
      <template slot-scope="scope">
        <el-progress
          :percentage="scope.row.probability"
          :format="format(scope.row)"
          color="#f1184c"
        >
          {{ scope.row.name }}
        </el-progress>
      </template>
    </el-table-column>
  </el-table>
  </div>
 
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      tableData: [
        {
          date: "00",
          name: 98,
          probability: 20,
        },
        {
          date: "01",
          name: 44,
          probability: 30,
        },
        {
          date: "02",
          name: 66,
          probability: 37,
        },
        {
          date: "03",
          name: 10,
          probability: 15,
        },
      ],
    };
  },
  methods: {
    format(row: any) {
      return () => {
        return `${row.probability}%(${row.name})`;
      };
    },
     tableRowClassName(o: any) {
      if (o.rowIndex === 1) {
        return "warning-row";
      } else if (o.rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
  },
});
</script>


<style lang="scss" scoped>
</style>