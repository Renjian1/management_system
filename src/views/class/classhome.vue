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
            <div class="smallspan"><span>套课ID：</span></div>
             <el-input v-model="input1" placeholder="请输入内容" class="put1"></el-input>
          </div>
        </div>
        <!--右侧banner模块-->
        <div class="bannersmall">
          <div class="small_1">
            <div class="smallspan"><span>套课名称：</span></div>
            <el-input v-model="input2" placeholder="请输入内容" class="put1"></el-input>
          </div>
          <div class="small_1">
            <div class="smallspan"><span>套课状态：</span></div>
            <el-radio v-model="radio1" label="1" class="btn1">启用</el-radio>
            <el-radio v-model="radio1" label="2" class="btn1">禁用</el-radio>
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
          label="套课ID">
        </el-table-column>
        <el-table-column
          prop="projectname"
          label="套课名称">
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格">
        </el-table-column>
        <el-table-column
          prop="photo"
          label="图片">
        </el-table-column>
        <el-table-column
          prop="aboutlivelist"
          label="关联视屏列表">
        </el-table-column>
        <el-table-column
          prop="tryvideo"
          label="试听视频">
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
      value4: [new Date(2019, 9, 10, 8, 40), new Date(2019, 9, 10, 9, 40)],
      input1: '' ,
      input2: '',
      radio1: '1',
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
  .btn2{
    width: 80px;
    font-size: 16px;
    margin-left: 20px;
  }
  .label1{
    margin-top: 15px;
  }
</style>
