<template>
    <div>
      <div class="porjectbanner">
        <div class="bannersmall">
          <div class="small_1">
            <div class="smallspan"><span>创建时间：</span></div>
             <el-time-picker
                is-range
                v-model="value4"
                range-separator="至"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                placeholder="选择时间范围" class="timebanner">
              </el-time-picker>
          </div>
          <div class="small_1">
            <div class="smallspan"><span>专题ID：</span></div>
            <el-input v-model="input1" placeholder="请输入内容" class="put1"></el-input>
          </div>
          <div class="small_1">
            <div class="smallspan"><span>专题名：</span></div>
            <el-input v-model="input2" placeholder="请输入内容" class="put1"></el-input>
          </div>
        </div>
        <!--右侧banner模块-->
        <div class="bannersmall">
          <div class="small_1">
            <div class="smallspan"><span>专题分类：</span></div>
            <el-input v-model="input3" placeholder="请输入内容" class="put1"></el-input>
          </div>
          <div class="small_1">
            <div class="smallspan"><span>专题状态：</span></div>
            <el-radio v-model="radio" label="1" class="btn1">启用</el-radio>
            <el-radio v-model="radio" label="2" class="btn1">禁用</el-radio>
          </div>
          <el-button type="primary" style="float: right;margin-right: 170px;">查&nbsp;&nbsp;询</el-button>
        </div>
      </div>
      <el-button class="btn2">新增</el-button>
      <el-table
        :data="tableData"
        border
        style="width: 100%" class="label1">
        <el-table-column
          label="序号"
          width="60"
          type="index">
        </el-table-column>
        <el-table-column
          prop="time"
          label="创建时间">
        </el-table-column>
        <el-table-column
          prop="projectid"
          label="专题ID">
        </el-table-column>
        <el-table-column
          prop="projectname"
          label="专题名"
          width="300">
        </el-table-column>
        <el-table-column
          prop="projectclassification"
          label="专题分类">
        </el-table-column>
        <el-table-column
          prop="liveid"
          label="直播ID">
        </el-table-column>
        <el-table-column
          prop="num"
          label="数字排序">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button size="mini">启用</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000" class="pagebtn">
      </el-pagination>
    </div>
</template>

<script>
export default {
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      radio: '1',
      value4: [new Date(2019, 9, 10, 8, 40), new Date(2019, 9, 10, 9, 40)],
      tableData: [{
        time: '2019.08.08 18:00',
        projectid: '111222',
        projectname: '如何度过大学四年？',
        projectclassification: '学生就业',
        liveid: '31415926',
        num: 3
      }, {
        time: '2019.08.08 18:00',
        projectid: '111222',
        projectname: '如何度过大学四年？',
        projectclassification: '学生就业',
        liveid: '31415926',
        num: 3
      }, {
        time: '2019.08.08 18:00',
        projectid: '111222',
        projectname: '如何度过大学四年？',
        projectclassification: '学生就业',
        liveid: '31415926',
        num: 3
      }, {
        time: '2019.08.08 18:00',
        projectid: '111222',
        projectname: '如何度过大学四年？',
        projectclassification: '学生就业',
        liveid: '31415926',
        num: 3
      }]
    }
  },
  methods: {
    handleClick (row) {
      console.log(row)
    }
  }
}
</script>

<style scoped>
.porjectbanner{
  padding-top: 40px;
  width: 100%;
  height: 200px;
}
  .bannersmall{
    width: 50%;
    height: 100%;
    float: left;
  }
  .small_1{
    width: 100%;
    height: 60px;
  }
  .smallspan{
    float: left;
    width: 100px;
    height: 100%;
    font-size: 20px;
    line-height: 60px;
    margin-left: 40px;
  }
  .smallspan span{
    float: right;
  }
  .timebanner{
    margin-top: 10px;
    line-height: 60px;
  }
  .put1{
    width: 350px;
    float: left;
    line-height: 60px;
  }
  .btn1{
    line-height: 60px;
    margin-right: 60px;
  }
  .btn2{
    width: 80px;
    font-size: 16px;
    margin-left: 20px;
  }
  .label1{
    margin-top: 30px;
  }
  .pagebtn{
    display: block;
    margin-top: 15px;
    text-align: center;
  }
</style>
