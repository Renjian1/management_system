<template>
    <div>
      <div class="porjectbanner">
        <div class="bannersmall">
          <div class="small_1">
            <div class="smallspan"><span>提审时间：</span></div>
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
            <div class="smallspan"><span>专家类别：</span></div>
            <el-radio v-model="radio" label="1" class="btn1">专家</el-radio>
            <el-radio v-model="radio" label="2" class="btn1">学长学姐</el-radio>
            <el-radio v-model="radio" label="3" class="btn1">学校官方</el-radio>
          </div>
          <div class="small_1">
            <div class="smallspan"><span>审核状态：</span></div>
            <el-radio v-model="radio1" label="1" class="btn1">专家</el-radio>
            <el-radio v-model="radio1" label="2" class="btn1">学长学姐</el-radio>
            <el-radio v-model="radio1" label="3" class="btn1">学校官方</el-radio>
          </div>
        </div>
        <!--右侧banner模块-->
        <div class="bannersmall">
          <div class="small_1">
            <div class="smallspan"><span>专家名：</span></div>
            <el-input v-model="input3" placeholder="请输入内容" class="put1"></el-input>
          </div>
          <div class="small_1">
            <div class="smallspan"><span>联系电话：</span></div>
            <el-input v-model="input4" placeholder="请输入内容" class="put1"></el-input>
          </div>
          <el-button type="primary" style="float: right;margin-right: 170px;">查&nbsp;&nbsp;询</el-button>
        </div>
      </div>
      <!--表单模块-->
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
          label="专家名">
        </el-table-column>
        <el-table-column
          prop="projectid"
          label="专家行业">
        </el-table-column>
        <el-table-column
          prop="projectname"
          label="提审时间"
          width="300">
        </el-table-column>
        <el-table-column
          prop="projectclassification"
          label="联系电话">
        </el-table-column>
        <el-table-column
          prop="liveid"
          label="审核状态">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">点击查看</el-button>
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
      input4: '',
      radio: '1',
      radio1: '1',
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
  .pagebtn{
    display: block;
    margin-top: 15px;
    text-align: center;
  }
</style>
