<template>
    <div>
      <div class="editorsmall" style="margin-top: 80px;">
        <div class="editorspan">
          <span>广告ID：</span>
        </div>
        <el-input v-model="input" placeholder="123456" class="put1" :disabled="true"></el-input>
      </div>
      <div class="editorsmall">
        <div class="editorspan">
          <span>广告位名称：</span>
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
      <div class="editorsmall">
        <div class="editorspan">
          <span>跳转链接：</span>
        </div>
        <el-input v-model="input2" placeholder="" class="put1"></el-input>
      </div>
      <div class="editorsmall">
        <div class="editorspan">
          <span>排序数字：</span>
        </div>
        <el-input v-model="input3" placeholder="" class="put1"></el-input>
      </div>
      <div class="btndiv">
        <el-button type="primary">取消</el-button>
       <el-button type="primary">保存</el-button>
      </div>

    </div>
</template>

<script>
export default {
  name: 'adverlist',
  data () {
    return {
      input: '',
      input1: '',
      input2: '',
      input3: '',
      imageUrl: ''
    }
  },
   methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
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
