<template>
  <div>
    <wbc-nav></wbc-nav>
    <div class="container">
      <el-row :gutter="30">
        <el-col :sm="24" :md="16" style="transition:all .5s ease-out;margin-bottom:30px;">
          <wbc-sharelist></wbc-sharelist>
        </el-col>
        <el-col :sm="24" :md="8">
          <wbc-rightlist></wbc-rightlist>
        </el-col>
      </el-row>
    </div>
    <wbc-footer></wbc-footer>
  </div>
</template>
<script>
  import header from '../components/Header'
  import footer from '../components/Footer'
  import temRightlist from '../components/temRightlist.vue'
  import temSharelist from '../components/temSharelist.vue'

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
        this.$http.get('/vue/find').then(
          res => {
            this.tableData = res.data
            console.log(res.data)
          }
        )
      }
    },
    components: {
      'wbc-nav': header,
      'wbc-footer': footer,
      'wbc-rightlist': temRightlist,
      'wbc-sharelist': temSharelist
    }
  }
</script>

<style scoped>

</style>
