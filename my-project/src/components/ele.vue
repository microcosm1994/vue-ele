<template>
  <div class="ele">
    <div class="ele-container">
      <div class="ele-header">
        <div class="ele-logo">
          模仿饿了么
        </div>
        <div class="ele-login">
          <a href="https://h5.ele.me/login/#redirect=https%3A%2F%2Fwww.ele.me%2Fhome%2F">注册</a> |
          <a href="https://h5.ele.me/login/#redirect=https%3A%2F%2Fwww.ele.me%2Fhome%2F">登录</a>
          <a href="https://kaidian.ele.me/" class="ele-openshop">我要开店</a>
        </div>
      </div>
      <div class="ele-logo-photo"></div>
      <div class="ele-search">
        <div class="ele-select">
          <div class="ele-select-address" v-on:click="getaddress">北京</div>
        </div>
        <div class="ele-input">
          <input type="text" placeholder="请输入你的地址">
        </div>
        <div class="ele-search-btn">搜索</div>
        <div class="address-box" v-if="addressBox">

        </div>
      </div>

    </div>
    <div class="ele-qrcode-box">
      <div class="ele-qrcode">
        <div class="ele-code">
          <img src="../assets/appqc.95e532.png" alt="">
          <div class="ele-qrcode-text">扫码下载APP</div>
        </div>
        <div class="ele-code-text">
          <p>新用户首次下单</p>
          <h1>最高立减30元</h1>
          <span>立即下载APP，享受更多优惠吧！</span>
        </div>
      </div>
    </div>
    <div class="ele-foot">
      <div class="ele-foot-nav"></div>
      <div class="ele-foot-certificate"></div>
      <div class="ele-foot-logo">
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        addressBox: false
      }
    },
    methond: {
      getaddress: function () {
        this.addressBox = true
        console.log(1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import "../css/ele.css";
</style>
