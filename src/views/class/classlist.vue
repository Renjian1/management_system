<template>
    <div>
        <div class="editorsmall" style="margin-top: 80px;">
        <div class="editorspan">
          <span>套课ID：</span>
        </div>
        <el-input v-model="input" placeholder="123456" class="put1" :disabled="true"></el-input>
      </div>
      <div class="editorsmall">
        <div class="editorspan">
          <span>套课名称：</span>
        </div>
        <el-input v-model="input1" placeholder="" class="put1"></el-input>
      </div>
      <div class="editorsmall">
        <div class="editorspan">
          <span>价格：</span>
        </div>
        <el-input v-model="input1" placeholder="" class="put1" style="width: 300px;"></el-input>
        <div class="editorspan">
          <span style="float: left;margin-left: 15px;">机遇币</span>
        </div>
      </div>
      <div class="editorsmall">
        <div class="editorspan">
          <span>关联视频ID：</span>
        </div>
        <el-input v-model="input1" placeholder="" class="put1"></el-input>
      </div>
      <div class="editorsmall">
        <div class="editorspan">
          <span>关联试听视频ID：</span>
        </div>
        <el-input v-model="input1" placeholder="" class="put1"></el-input>
      </div>
      <div class="editorsmall2">
        <div class="editorspan">
          <span>上传图片：</span>
        </div>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div class="btndiv">
        <el-button type="primary">取消</el-button>
       <el-button type="primary">保存</el-button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'classlist'
}
</script>

<style scoped>
.editorsmall{
  width: 100%;
  height: 50px;
  margin-top: 20px;
}
.editorsmall2{
  width: 100%;
  height: 200px;
  margin-top: 20px;
}
  .editorspan{
    width: 200px;
    height: 100%;
    font-size: 24px;
    font-weight: 600;
    float: left;
  }
  .editorspan span{
    display: block;
    float: right;
    line-height: 50px;
  }
  .put1{
    line-height: 50px;
    width: 800px;
    display: block;
    float: left;
  }
  .avatar-uploader .el-upload {
    border: 2px dashed #000;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .avatar-uploader-icon[data-v-5f487179]{
   border: 2px solid #e6ebee;
  }
  .btnbottom{
    margin:20px auto;
    width: 200px;
  }
  .el-upload{
     border: 2px solid #e6ebee;
  }
  .btndiv{
    width: 200px;
    margin:15px auto;
  }
</style>
