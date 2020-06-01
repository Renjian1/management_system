<template>
    <div>
      <!--头部-->
      <div class="top">
        <div class="topsmall">
          <span class="topsmall_word1">直播ID：</span>
          <span class="topsmall_word1" style="margin-top: 12px;">123456</span>
          <div class="topsmall_tp"></div>
        </div>
        <div class="topsmall" style="width: 25%;">
          <span class="topsmall_word1" style="margin-top: 30px;">直播标题：<span>如何迈向职场第一步</span></span><br>
          <span class="topsmall_word1" style="margin-top: 30px;">创建时间：<span>2019.07.15 16：48</span></span><br>
          <span class="topsmall_word1" style="margin-right: 100px;margin-top: 30px;">开播时间：<span>2019.07.15 16：48</span></span><br>
          <span class="topsmall_word1" style="margin-top: 30px;">预计直播时长：<span>1小时45分钟</span></span>
        </div>
        <div class="topsmall" style="position: relative;">
          <span class="topsmall_word1" style="margin-top: 30px;margin-right: 200px;">专家名：<span>张三</span></span><br>
          <span class="topsmall_word1" style="margin-top: 30px;margin-right: 200px;">允许提问人数：<span>10</span></span><br>
          <span class="topsmall_word1" style="margin-right: 100px;margin-top: 30px;">观看直播价格：<span>99机遇币</span></span><br>
          <span class="topsmall_word1" style="margin-top: 30px;">观看并提问价格：<span>100机遇币</span></span><br>
          <el-button type="primary" class="bianBtn">编&nbsp;&nbsp;辑</el-button>
          <el-button type="primary" class="baoBtn">保&nbsp;&nbsp;存</el-button>
          <el-button type="primary" plain class="qiBtn">启&nbsp;&nbsp;用</el-button>
          <el-button type="info" plain class="duanBtn">断&nbsp;&nbsp;流</el-button>
        </div>
      </div>
      <!--中间部分-->
      <div class="middle">
        <div class="middlesmall_1">
          <div class="middlesmall_box"><span>浏览量：<span>35</span></span></div>
          <div class="middlesmall_box"><span>订阅数：<span>35</span></span></div>
          <div class="middlesmall_box"><span>购买量：<span>35</span></span></div>
        </div>
        <div class="middlesmall_2">
          <div class="middlesmall_box"><span>点赞数：<span>35</span></span></div>
          <div class="middlesmall_box"><span>打赏数：<span>35</span></span></div>
          <div class="middlesmall_box"><span>打赏金额：<span>1123机遇币</span></span></div>
        </div>
        <div class="middlesmall_3">
          <div class="middlesmall_box"><span>免费评论数：<span>56</span></span></div>
          <div class="middlesmall_box"><span>付费评论数：<span>56</span></span></div>
        </div>
        <div class="middlesmall_3">
          <div class="middlesmall_box"><span>直播时间：<span>2019.07.15 16：48</span></span></div>
          <div class="middlesmall_box"><span>结束时间：<span>2019.07.15 16：48</span></span></div>
          <div class="middlesmall_box"><span>直播延迟时间：<span>35min</span></span></div>
        </div>
      </div>
      <!--列表信息-->
      <a href="#"><span class="tishi1" @click="askInformation">提问信息</span></a>
      <a href="#"><span class="tishi2" @click="buyInformation">购买信息</span></a>
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 99%;" v-show="xian1">
        <el-table-column
          type="index">
        </el-table-column>
        <el-table-column
          property="name"
          label="用户名">
        </el-table-column>
        <el-table-column
          property="ask"
          label="问题内容">
        </el-table-column>
        <el-table-column
          property="asktime"
          label="提问时间">
        </el-table-column>
        <el-table-column
          property="givelike"
          label="点赞数">
        </el-table-column>
        <el-table-column
          property="exceptional"
          label="打赏数">
        </el-table-column>
         <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-table
        ref="singleTable"
        :data="tableData2"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 99%;"
        v-show="xian2">
        <el-table-column
          type="index">
        </el-table-column>
        <el-table-column
          property="name"
          label="用户名">
        </el-table-column>
        <el-table-column
          property="buytime"
          label="购买时间">
        </el-table-column>
        <el-table-column
          property="buyproject"
          label="购买项目">
        </el-table-column>
        <el-table-column
          property="paynum"
          label="支付金额">
        </el-table-column>
         <el-table-column
            fixed="right"
            label="操作台">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData2)"
                type="text"
                size="small">
                退款
              </el-button>
            </template>
          </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="100" style="text-align: center;margin-top: 20px;">
      </el-pagination>
    </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        name: '用户1',
        ask: '大学英语需要什么条件？',
        asktime: '2019.07.15 16:40',
        givelike: '11',
        exceptional: '22'
      }, {
        name: '用户2',
        ask: '大学英语需要什么条件？',
        asktime: '2019.07.15 16:40',
        givelike: '11',
        exceptional: '22'
      }, {
        name: '用户3',
        ask: '大学英语需要什么条件？',
        asktime: '2019.07.15 16:40',
        givelike: '11',
        exceptional: '22'
      }, {
        name: '用户4',
        ask: '大学英语需要什么条件？',
        asktime: '2019.07.15 16:40',
        givelike: '11',
        exceptional: '22'
      }],
      tableData2: [{
        name: '用户1',
        buytime: '2019.07.15 16:40',
        buyproject: '课程1',
        paynum: '22'
      }, {
        name: '用户2',
        buytime: '2019.07.15 16:40',
        buyproject: '课程1',
        paynum: '22'
      }, {
        name: '用户3',
        buytime: '2019.07.15 16:40',
        buyproject: '课程1',
        paynum: '22'
      }, {
        name: '用户4',
        buytime: '2019.07.15 16:40',
        buyproject: '课程1',
        paynum: '22'
      }],
      currentRow: null,
      xian1: true,
      xian2: false
    }
  },

  methods: {
    handleDelete (index, row) {
      console.log(index, row)
    },
    handleCurrentChange (val) {
      this.currentRow = val
    },
    deleteRow (index, rows) {
      // rows.splice(index, 1)
      console.log(index)
    },
    askInformation () {
      this.xian1 = true,
      this.xian2 = false
    },
    buyInformation () {
      this.xian2 = true,
      this.xian1 = false
    }
  }
}
</script>

<style scoped>
.top{
  width: 100%;
  height: 280px;
  border-bottom: 1px solid #000;
}
  .topsmall{
    width: 33.33%;
    height: 100%;
    float: left;
  }
  .topsmall_word1{
    display: block;
    float: left;
    margin-left: 10px;
    margin-top: 10px;
  }
  .topsmall_tp{
    margin-top: 50px;
    margin-left: 10px;
    width: 300px;
    height: 200px;
    border: 1px solid #000;
  }
  .bianBtn{
    position: absolute;
    bottom: 20px;
    left: 30px;
  }
  .baoBtn{
    position: absolute;
    bottom: 20px;
    left: 120px;
  }
  .qiBtn{
    position: absolute;
    top: 40px;
    right: 50px;
  }
  .duanBtn{
    position: absolute;
    top: 100px;
    right: 50px;
  }
  .middle{
    width: 100%;
    height: 120px;
    border-bottom: 1px solid #000;
  }
  .middlesmall_1{
    width: 25%;
    height: 100%;
    overflow: hidden;
    padding-bottom: 10px;
    float: left;
  }
  .middlesmall_2{
    width: 25%;
    height: 100%;
    overflow: hidden;
    padding-bottom: 10px;
    float: left;
  }
  .middlesmall_3{
    width: 25%;
    height: 100%;
    overflow: hidden;
    padding-bottom: 10px;
    float: left;
  }
  .middlesmall_1 span{
    margin-left: 20px;
  }
  .middlesmall_box{
    width: 100%;
    margin-top: 15px;
  }
  .tishi1{
    margin-left: 20px;
    font-size: 20px;
    color: #409EFF;
    display: block;
    float: left;
    margin-bottom: 15px;
  }
  .tishi2{
    margin-left: 20px;
    font-size: 20px;
    color: #409EFF;
  }
</style>
