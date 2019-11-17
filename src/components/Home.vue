<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      prop="id"
      label="编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id: '',
          name: ''

        }]
      }
    }, created() {
      this.getMenuList()
    },
    methods: {
      getMenuList() {
        this.$http.get('http://localhost:8300/find').then(
          res => {
            this.tableData = res.data
            console.log(res.data)
          }
        )
      }
    }
  }
</script>

<style scoped>

</style>
