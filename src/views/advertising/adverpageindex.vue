<template>
    <div>
      <div class="porjectbanner">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <div class="bannersmall">
            <div class="small_1">
                <div class="smallspan" style="margin-left: 100px;"><span>创建时间：</span></div>
                 <el-time-picker
                    is-range
                    v-model="ruleForm.value4"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    placeholder="选择时间范围" class="timebanner">
                 </el-time-picker>
            </div>
            <div class="small_1">
              <el-form-item prop="input1">
                <div class="smallspan"><span>广告ID：</span></div>
                <el-input v-model="ruleForm.input1" placeholder="请输入内容" class="put1"></el-input>
              </el-form-item>
            </div>
          </div>
          <!--右侧banner模块-->
          <div class="bannersmall">
            <div class="small_1">
              <el-form-item prop="input2">
                <div class="smallspan"><span>广告名称：</span></div>
                <el-input v-model="ruleForm.input2" placeholder="请输入内容" class="put1"></el-input>
              </el-form-item>
            </div>

            <div class="small_1" style="padding-left: 100px">
              <div class="smallspan"><span>状态：</span></div>
              <el-radio v-model="ruleForm.radio1" label="1" class="btn1">启用</el-radio>
              <el-radio v-model="ruleForm.radio1" label="2" class="btn1">禁用</el-radio>
            </div>

            <el-button type="primary" @click="submitForm('ruleForm')" style="float: right;margin-right: 170px;">查&nbsp;&nbsp;询</el-button>
          </div>
        </el-form>
      </div>
      <el-button class="btn2">新增</el-button>
      <el-table
        :data="tableData"
        border
        style="width: 99%;margin:20px auto;" class="label1">
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
          label="广告ID">
        </el-table-column>
        <el-table-column
          prop="projectname"
          label="广告位名称"
          width="300">
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
  name: 'adverpageindex',
  data () {
    return {
      ruleForm: {
        input1: '',
        input2: '',
        radio1: '1',
        value4: [new Date(0, 0, 0, 0, 0), new Date(0, 0, 0, 0, 0)]
      },
      rules: {
        input1: [
          { required: true, message: '请输入广告ID', trigger: 'blur' },
        ],
        time: [
          { required: true, message: '请填写创建时间', trigger: 'blur' }
        ],
        input2: [
          { required: true, message: '请填写广告名称', trigger: 'blur' }
        ]
      },
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
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
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
    margin-bottom: 20px;
  }
  .smallspan{
    float: left;
    width: 100px;
    height: 100%;
    font-size: 20px;
    line-height: 60px;
  }
  .smallspan span{
    float: left;
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
  .el-form-item__label{
    font-size: 18px;
  }
  .el-form-item__error{
    left: 100px;
  }
</style>
