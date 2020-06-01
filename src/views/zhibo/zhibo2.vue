<template>
    <div class="addlive">
      <div class="addlive_small">
        <span>直播ID：</span>
        <el-input placeholder="123456" v-model="input1" :disabled="true"></el-input>
      </div>
      <div class="addlive_small">
        <span>直播标题：</span>
        <el-input placeholder="输入直播标题，不超过17个字" v-model="input2"></el-input>
      </div>
      <div class="photo_upload">
        <span>上传图片：</span>
        <input type="file" accept="image/*">
      </div>
      <div class="addlive_small">
        <span>专家手机号：</span>
        <el-input placeholder="输入11位手机号" v-model="input3"></el-input>
      </div>
      <div class="addlive_small">
        <span>专家名：</span>
        <el-input placeholder="输入姓名" v-model="input4"></el-input>
      </div>
      <div class="addlive_small">
        <span>开播时间：</span>
        <el-input placeholder="输入直播标题，不超过17个字" v-model="input5"></el-input>
      </div>
      <div class="addlive_small">
        <span>预计直播时长：</span>
        <el-input placeholder="输入直播标题，不超过17个字" v-model="input6"></el-input>
      </div>
      <div class="addlive_small">
        <span>允许提问人数：</span>
        <el-input placeholder="" v-model="input7"></el-input>
      </div>
      <div class="addlive_small">
        <span>观看直播价格：</span>
        <span class="addlive_small_word2">&nbsp;&nbsp;&nbsp;(机遇币)</span>
        <el-input placeholder="eg:99" v-model="input8" style="width: 230px;"></el-input>
      </div>
      <div class="addlive_small">
        <span>观看并提问价格：</span>
        <el-input placeholder="eg:109" v-model="input9" style="width: 230px;"></el-input>
        <span class="addlive_small_word2">&nbsp;&nbsp;&nbsp;(机遇币)</span>
      </div>
       <el-button type="primary">取消</el-button>
       <el-button type="primary">保存</el-button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      input8: '',
      input9: ''
    }
  }
}
</script>

<style scoped>
  .addlive{
    text-align: center;
  }
.addlive_small{
  width: 450px;
  height: 50px;
  margin:10px auto;
  line-height: 50px;
}
  .addlive_small span{
    float: left;
  }
  .el-input{
    width: 300px;
    float: right;
  }
  .photo_upload{
    width: 400px;
    height: 100px;
    margin:10px auto;
    /*background-color: burlywood;*/
  }
  .photo_upload span{
    float: left;
  }
  .addlive_small_word2{
    float: right;
  }
</style>
