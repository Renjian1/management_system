<template>
    <div>
      <div class="datasmall" style="border-right: 1px solid #000;border-bottom: 1px solid #000">
        <span>用户数据</span>
        <div class="small_1" style="margin-left: 25px;">
          <span>总用户数</span>
          <h1>238.4万</h1>
        </div>
        <div class="small_1" style="border-right: 1px solid #000;border-left: 1px solid #000;">
          <span>日新增用户数</span>
          <h1>4274人</h1>
        </div>
        <div class="small_1">
          <span>日活跃用户数</span>
          <h1>30万</h1>
        </div>
      </div>
      <div class="datasmall" style="border-bottom: 1px solid #000">
        <span>收入数据</span>
        <div class="datasmall_2">
          <div class="small2_box" style="border-right: 1px solid #000;border-bottom: 1px solid #000;">
            <span>总流水</span>
            <h1 style="margin-top: 25px">2233万</h1>
          </div>
          <div class="small2_box" style="border-bottom: 1px solid #000;">
            <span>日流水</span>
            <h1 style="margin-top: 25px">20万</h1>
          </div>
          <div class="small2_box" style="border-right: 1px solid #000">
            <span>总收入</span>
            <h1 style="margin-top: 25px">82万</h1>
          </div>
          <div class="small2_box">
            <span>日收入</span>
            <h1 style="margin-top: 25px">7万</h1>
          </div>
        </div>
      </div>

      <div class="datasmall" style="border-right: 1px solid #000;position: relative;">
        <span>专家数据</span>
        <h3>专家平均活跃时间</h3>
        <h4>1.25 小时</h4>
        <div class="small3_box" style="margin-top: 35px">
          <span>提交审核数</span>
          <h2>145</h2>
        </div>
        <div class="small3_box" style="border-bottom: 1px solid #000;border-top: 1px solid #000;">
          <span>专家总数</span>
          <h2>7,788</h2>
        </div>
        <div class="small3_box">
          <span>专家日活跃数</span>
          <h2>5,223</h2>
        </div>
      </div>
      <div class="datasmall">
        <span>直播数据</span>
        <div class="small_1" style="margin-left: 25px;">
          <span>直播间创建数量</span>
          <h1>23</h1>
        </div>
        <div class="small_1" style="border-right: 1px solid #000;border-left: 1px solid #000;">
          <span>日订阅直播数</span>
          <h1>11.2万</h1>
        </div>
        <div class="small_1">
          <span>日购买直播数</span>
          <h1>30，233</h1>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'dataManagement'
}
</script>

<style scoped>
.datasmall{
  width: 49.9%;
  height: 360px;
  float: left;
}
  .datasmall span{
    display: block;
    margin-left: 15px;
    margin-top: 10px;
  }
  .small_1{
    width: 200px;
    height: 200px;
    margin-top: 40px;
    float: left;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
  .small_1 span{
    display: block;
    margin-top: 30px;
  }
  h1{
    margin-top: 50px;
    font-size: 26px;
    font-weight: 800;
  }
  .datasmall_2{
    width: 500px;
    height: 250px;
    margin:30px auto;
  }
  .small2_box{
    width: 49.9%;
    height: 49%;
    float: left;
    text-align: center;
  }
  .small2_box span{
    font-size: 20px;
  }
  .small3_box{
    width: 40%;
    height: 80px;
    margin-left: 50px;
  }
  .small3_box span{
    line-height: 60px;
    display: block;
    float: left;
    font-size: 16px;
    font-weight: 800;
  }
  h2{
    display: block;
    float: right;
    line-height: 80px;
    font-size: 18px;
    margin-right: 20px;
  }
  h3{
    position: absolute;
    top:100px;
    right: 60px;
  }
  h4{
    position: absolute;
    top:200px;
    right: 90px;
    font-size: 20px;
  }
</style>
