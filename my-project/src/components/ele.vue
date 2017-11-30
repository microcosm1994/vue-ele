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
          <div class="ele-select-address" v-on:click="getaddress();getAddress()">{{ selectCity }}</div>
        </div>
        <div class="ele-input">
          <input type="text" placeholder="请输入你的地址" v-model="searchText" v-on:keyup="prompt()">
          <transition name="fade1">
            <div class="prompt-box" v-if="promptShow">
              <ul>
                <li v-for="key in promptName" v-on:click="setregion($event,key.location.lat,key.location.lng)"><router-link to="/result">{{key.name}}</router-link></li>
              </ul>
            </div>
          </transition>
        </div>
        <div class="ele-search-btn">搜索</div>
        <transition name="fade">
          <div class="address-box" v-if="addressBox" ref="address">
            <div class="ele-region" v-for="(key, index) in city" style="width:100%;height:auto;text-align: center;">
              <div class="ele-index" style="height:auto;">
                {{index}}
              </div>
              <div class="ele-region-box">
                <a href="javascript:;" v-for="value in key" v-on:click="setaddress($event)">
                  {{value.name}}
                </a>
              </div>
            </div>
          </div>
        </transition>
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
    name: 'ele',
    data () {
      return {
        ak: 'qkKs9dxI75yUR1HSP9TPuV1pQnLgRp2o',
        addressBox: false,
        city: '',
        citytype: [],
        selectCity: '',
        searchText: '',
        localtionX: '',
        localtionY: '',
        promptShow: false,
        promptName: []
      }
    },
    mounted () {
      this.getLocation()
    },
    methods: {
      getaddress: function () {
        this.addressBox = !this.addressBox
      },
      getAddress: function () {
        let self = this
        this.$http.get('http://jklib.org/ele/cities.ashx').then(response => {
          let data = response.data
          self.city = data
          for (let key in data) {
            self.citytype.push(key)
          }
          console.log(self.citytype)
        }, response => {
          console.log('error')
        })
      },
      setaddress: function (e) {
        this.selectCity = e.target.innerText
      },
      getLocation () {
        let self = this
        self.$http.jsonp('http://api.map.baidu.com/location/ip?ak=' + self.ak + '&coor=bd09ll').then(response => {
          let data = response.data
          if (data) {
            self.selectCity = data.content.address
          }
        }, response => {
          console.log('error')
        })
      },
      prompt: function () {
        let self = this
        let url = 'http://api.map.baidu.com/place/v2/suggestion?query=' + this.searchText + '&region=' + this.selectCity + '&output=json&ak=' + this.ak + ''
        if (this.searchText !== '') {
          this.promptShow = true
        } else {
          this.promptName = ''
          this.promptShow = false
        }
        this.$http.jsonp(url).then(response => {
          let data = response.data
          console.log(data)
          if (data) {
            self.promptName = data.result
          }
        }, response => {})
      },
      setregion: function (e, lat, lng) {
        this.searchText = e.target.innerText
        this.localtionX = lat
        this.localtionY = lng
        this.search()
      },
      search: function () {
        let url = 'http://api.map.baidu.com/place/v2/search?query=' + this.searchText + '&tag=美食&location=' + this.localtionX + ',' + this.localtionY + '&radius=2000&output=json&ak=' + this.ak + ''
        console.log(url)
        this.$http.jsonp(url).then(response => {
          let data = response.data
          console.log(data)
        }, response => {
          console.log('error')
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import "../../static/css/global.css";
  @import "../../static/css/ele.css";
</style>
