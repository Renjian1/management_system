<template>
    <div>
      <div class="btnbox">
        <el-button type="primary" round>安卓</el-button>
        <el-button round>IOS端</el-button>
        <el-button round>网页端</el-button>
        <el-button round>小程序端</el-button>
      </div>
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%" class="table1">
        <el-table-column
          label="序号"
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          property="name"
          label="用户名">
        </el-table-column>
        <el-table-column
          property="time"
          label="反馈时间">
        </el-table-column>
        <el-table-column
          property="content"
          label="反馈内容">
        </el-table-column>
        <el-table-column
          property="phone"
          label="联系方式">
        </el-table-column>
        <el-table-column
          property="phonemodel"
          label="手机型号">
        </el-table-column>
        <el-table-column
          property="systemVersion"
          label="系统版本">
        </el-table-column>
        <el-table-column
          property="clientVersion"
          label="客户端版本">
        </el-table-column>
      </el-table>
      <el-pagination
        :page-size="20"
        :pager-count="11"
        layout="prev, pager, next"
        :total="100" class="fenpage">
      </el-pagination>
    </div>
</template>

<script>
export default {
  name: 'askfeedback',
  data () {
    return {
      tableData: [{
        name: '王二狗',
        time: '2019.9.30 16:00',
        content: '这是一个问题？',
        phone: '18634299350',
        phonemodel: 'iphone 7',
        systemVersion: '1.0.1',
        clientVersion: '1.0.2'
      },{
        name: '王二狗',
        time: '2019.9.30 16:00',
        content: '这是一个问题？',
        phone: '18634299350',
        phonemodel: 'iphone 7',
        systemVersion: '1.0.1',
        clientVersion: '1.0.2'
      },{
        name: '王二狗',
        time: '2019.9.30 16:00',
        content: '这是一个问题？',
        phone: '18634299350',
        phonemodel: 'iphone 7',
        systemVersion: '1.0.1',
        clientVersion: '1.0.2'
      },{
        name: '王二狗',
        time: '2019.9.30 16:00',
        content: '这是一个问题？',
        phone: '18634299350',
        phonemodel: 'iphone 7',
        systemVersion: '1.0.1',
        clientVersion: '1.0.2'
      }]
    }
  }
}
</script>

<style scoped>
.btnbox{
  margin-top: 15px;
  margin-left: 50px;
}
  .table1{
    margin-top: 20px;
  }
  .fenpage{
    text-align: center;
    margin-top: 20px;
  }
</style>
