<template>
  <el-row class="sharelistBox">
    <el-col :span="24" class="s-item tcommonBox" :index="item.id+''" v-for="item in tableData" :key="'item.id'">
       <span class="s-round-date">
                <span class="month" v-html="showInitDate(item.createtime,'month')+'月'"></span>
                <span class="day" v-html="showInitDate(item.createtime,'date')"></span>
            </span>
      <header>
        <h1>
          <a :href="'#/DetailShare?aid='+item.id" target="_blank">
            {{item.name}}
          </a>
        </h1>
        <h2>
          <i class="fa fa-fw fa-user"></i>发表于
          <i class="fa fa-fw fa-clock-o"></i><span v-html="showInitDate(item.createtime,'all')">{{showInitDate(item.createtime,'all')}}</span>
          •
          <i class="fa fa-fw fa-eye"></i>{{item.id}} 次围观 •
          <i class="fa fa-fw fa-comments"></i>活捉 {{item.id}} 条 •
          <span class="rateBox">
                        <i class="fa fa-fw fa-heart"></i>{{item.id?item.id:0}}点赞 •
                        <i class="fa fa-fw fa-star"></i>{{item.id?item.id:0}}收藏
                    </span>
        </h2>
        <div class="ui label">
          <a :href="'#/Share?classId='+item.class_id">{{item.name}}</a>
        </div>
      </header>
      <div class="article-content">
        <p style="text-indent:2em;">
          {{item.name}}
        </p>
        <p  style="max-height:300px;overflow:hidden;text-align:center;">
          <img :src="'http://cdn.libowen.xyz/QQ.png'" alt="" class="maxW">
        </p>
      </div>
      <div class="viewdetail">
        <a class="tcolors-bg" :href="'#/DetailShare?aid='+item.id" target="_blank">
          阅读全文>>
        </a>
      </div>
    </el-col>
  </el-row>
</template>

<script>

  import {initDate} from '../utils/server.js'

  export default {
    data() {
      return {
        tableData: []
      }
    }, created() {
      this.getMenuList()
    },
    methods: {
      showInitDate: function (oldDate, full) {
        // console.log(oldDate,full);
        return initDate(oldDate, full)
      },
      getMenuList() {
        this.$http.get('/vue/find').then(
          res => {
            this.tableData = res.data
            console.log(res.data)
          }
        )
      }
    },
  }
</script>

<style>
  /*分享标题*/
  .shareTitle {
    margin-bottom: 40px;
    position: relative;
    border-radius: 5px;
    background: #fff;
    padding: 15px;
  }

  .shareclassTwo {
    width: 100%;
  }

  .shareclassTwo li {
    display: inline-block;
  }

  .shareclassTwo li a {
    display: inline-block;
    padding: 3px 7px;
    margin: 5px 10px;
    color: #fff;
    border-radius: 4px;
    background: #64609E;
    border: 1px solid #64609E;
    transition: transform 0.2s linear;
    -webkit-transition: transform 0.2s linear;
  }

  .shareclassTwo li a:hover {
    transform: translate(0, -3px);
    -webkit-transform: translate(0, -3px);
  }

  .shareclassTwo li a.active {
    background: #fff;
    color: #64609E;

  }

  /*文章列表*/
  .sharelistBox {
    transition: all 0.5s ease-out;
    font-size: 15px;
  }


  /*.sharelistBox .viewmore a:hover,.s-item .viewdetail a:hover{
      background: #48456C;
  }*/
</style>
