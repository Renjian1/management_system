<template>
    <div>
      <div class="content">
        <div class="headphoto"></div>
        <div class="boxsmall">
          <span>所属类别：</span>
           <el-button class="btn1">学长学姐</el-button>
           <el-button type="primary" class="btn1">行业专家</el-button>
           <el-button class="btn1">学校官方</el-button>
        </div>
        <div class="boxsmall">
          <span>姓名：</span>
          <span class="boxspan">李四</span>
        </div>
        <div class="boxsmall">
          <span>身份证号：</span>
          <span class="boxspan">142402199608176353</span>
        </div>
        <div class="boxsmall">
          <span>所在公司：</span>
          <span class="boxspan">成都机遇华夏科技有限公司</span>
        </div>
        <div class="boxsmall">
          <span>所在岗位：</span>
          <span class="boxspan">前端工程师</span>
        </div>
        <div class="boxsmall">
          <span>工作年限：</span>
          <span class="boxspan">10年</span>
        </div>
        <div class="boxsmall">
          <span>工作邮箱：</span>
          <span class="boxspan">2280741033@qq.com</span>
        </div>
        <div class="boxsmall">
          <span>名片展示身份：</span>
          <span class="boxspan">阿里巴巴高级前端工程师</span>
        </div>
        <div class="boxsmall">
          <span>兴趣标签：</span>
          <el-button type="primary" class="btn1">专业大佬</el-button>
          <el-button type="primary" class="btn1">代码专家</el-button>
           <el-button type="primary" class="btn1">资深程序员</el-button>
        </div>
      </div>
      <el-button type="success" class="successbtn">通过</el-button>
      <el-button type="danger" class="dangerbtn">不通过</el-button>
    </div>
</template>

<script>
export default {
  name: 'ReviewDetails'
}
</script>

<style scoped>
.content{
  width: 50%;
  height: 100%;
  margin:auto;
  padding-top: 80px;
}
  .headphoto{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border:1px solid #000;
    margin:auto;
  }
  .boxsmall{
    width: 100%;
    height: 60px;
    margin-top: 15px;
    font-size: 20px;
    line-height: 60px;
    text-align: center;
  }
  .btn1{
    border-radius: 20px;
  }
  .successbtn{
    position: absolute;
    top: 100px;
    left: 300px;
    width: 100px;
  }
  .dangerbtn{
    position: absolute;
    top: 150px;
    left: 290px;
    width: 100px;
  }
</style>
