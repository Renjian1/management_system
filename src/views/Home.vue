<template>
  <div class="home">
    <div class="banner_top">
      <img src="../assets/shengzhila_logo.png" alt="">
      <span class="top_word1">后台管理中心</span>
      <a href="#"><div class="exit">退出</div></a>
      <span class="top_word3">王婷婷</span>
      <span class="top_word2">欢迎您&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
    </div>
    <!--侧导航-->
    <div class="navigation">
      <el-row class="tac">
        <el-col>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">

            <el-submenu index="0">
              <template slot="title">
                <router-link to="/dataMan" :replace="true"><div class="full">数据管理</div></router-link>
              </template>
              <el-menu-item-group>
                <router-link to="userdata"><el-menu-item index="0-1" class="smalltitle">用户数据</el-menu-item></router-link>
                <router-link to="incomedata"><el-menu-item index="0-2" class="smalltitle">收入数据</el-menu-item></router-link>
                <router-link to="projectdata"><el-menu-item index="0-3" class="smalltitle">专家数据</el-menu-item></router-link>
                <router-link to="livedata"><el-menu-item index="0-4" class="smalltitle">直播数据</el-menu-item></router-link>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="1">
              <template slot="title">
                <router-link to="/zhiboindex" :replace="true"><div class="full">直播列表</div></router-link>
              </template>
              <el-menu-item-group>
                <router-link to="zhibo1"><el-menu-item index="1-1" class="smalltitle">直播详情页</el-menu-item></router-link>
                <router-link to="zhibo2"><el-menu-item index="1-2" class="smalltitle">新增直播</el-menu-item></router-link>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <router-link to="/askindex" :replace="true"><div class="full">问问列表</div></router-link>
              </template>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <router-link to="/projectindex" :replace="true"><div class="full">专题列表</div></router-link>
              </template>
              <el-menu-item-group>
                <router-link to="project"><el-menu-item index="3-1" class="smalltitle">编辑专题</el-menu-item></router-link>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <router-link to="/expertsindex" :replace="true"><div class="full">专家审核</div></router-link>
              </template>
              <el-menu-item-group>
                <router-link to="experts"><el-menu-item index="4-1" class="smalltitle">审核详情</el-menu-item></router-link>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="5">
              <template slot="title">
                <router-link to="/userindex" :replace="true"><div class="full">用户管理</div></router-link>
              </template>
            </el-submenu>

            <el-submenu index="6">
              <template slot="title">
                <router-link to="/editindex" :replace="true"><div class="full">广告管理</div></router-link>
              </template>
              <el-menu-item-group>
                <router-link to="edit"><el-menu-item index="6-1" class="smalltitle">编辑广告</el-menu-item></router-link>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="7">
              <template slot="title">
                <router-link to="/classindex" :replace="true"><div class="full">套课管理</div></router-link>
              </template>
              <el-menu-item-group>
                <router-link to="class"><el-menu-item index="7-1" class="smalltitle">编辑套课</el-menu-item></router-link>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="8">
              <template slot="title">
                <router-link to="/askreedbackindex" :replace="true"><div class="full">用户反馈</div></router-link>
              </template>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <!--右侧大模块-->
    <div class="showdiv">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  .banner_top{
    width: 100%;
    height: 50px;
    background-color: palegreen;
    border-bottom: 2px solid #e6ebee;
  }
  .top_word1{
    float: left;
    line-height: 50px;
    font-weight: 500;
    font-size: 26px;
    margin-left: 30px;
  }
  .exit {
    width: 80px;
    height: 30px;
    border-radius: 5px;
    float: right;
    line-height: 30px;
    margin-right: 30px;
    margin-top: 10px;
    text-align: center;
  }
  .top_word2{
    line-height: 50px;
    float: right;
  }
  .top_word3{
    line-height: 50px;
    float: right;
    margin-right: 30px;
  }
  .navigation{
    width: 13.5%;
    height: auto;
    float: left;
  }
  .showdiv{
    width: 86.3%;
    float: left;
  }
  .el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 45px;
     min-width: 0px;
  }
  .smalltitle{
    font-size: 15px;
    float: right;
  }
  a{
    text-decoration: none;
    color: #000;
  }
  .banner_top img{
    float: left;
    margin-left: 30px;
    margin-top: 5px;
  }
  .full{
    width: 100%;
    height: 100%;
  }
</style>
