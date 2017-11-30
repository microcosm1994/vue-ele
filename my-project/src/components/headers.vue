<template>
<div class="ele-header">
  <div class="main">
    <div class="logo"><a href="javascript:;">饿了么</a></div>
    <div class="nav">
      <a href="javascript:;" class="active">首页</a>
      <a href="javascript:;">我的订单</a>
      <a href="javascript:;">加盟合作</a>
    </div>
    <div class="login-box">
      <div class="mobile">
        <a href="javascript:;">规则中心</a>
        <a href="javascript:;">手机应用</a>
      </div>
      <div class="login"><a href="javascript:;">登录/注册</a></div>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    name: 'result',
    data () {
      return {
        a: 1
      }
    },
    methods: {}
  }
</script>
<style>
  .ele-header{
    width: 100%;
    height:60px;
    background: #1E89E0;
  }
  .main{
    width: 1180px;
    height: 60px;
    margin: 0 auto;
    overflow: hidden;
  }
  .logo{
    width: 120px;
    height: 60px;
    position: relative;
    float: left;
  }
  .logo a{
    width: 100%;
    height: 50px;
    display: block;
    line-height: 50px;
    color:#1E89E0;
    background: #ffffff;
    font-size: 30px;
    font-weight: 800;
    text-align: center;
    border-radius:10px;
    position: absolute;
    top:5px;
  }
  .nav{
    height: 60px;
    float: left;
    overflow: hidden;
    margin-left: 10px;
  }
  .nav a{
    width: 110px;
    height: 60px;
    line-height: 60px;
    display: block;
    float: left;
    text-align: center;
    color: #ffffff;
    font-size: 18px;
    margin-left: 10px;
  }
  .login-box{
    float: right;
    height: 60px;
    overflow: hidden;
  }
  .mobile{
    float: left;
    height: 60px;
    overflow: hidden;
  }
  .mobile a{
    height: 60px;
    display: block;
    float: left;
    color:#f5f5f5;
    line-height: 60px;
    margin-left: 50px;
    font-size: 14px;
  }
  .login{
    float: left;
    margin-left: 100px;
    height: 60px;
  }
  .login a{
    display: block;
    line-height: 60px;
    color:#fff;
    font-size: 14px;
  }
  .active{
    background: #006BC7;
  }
</style>
