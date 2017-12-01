<template>
  <div class="result">
    <headers></headers>
    <div class="result-main">
      <div class="result-search">
        <div class="result-loaction">当前位置：<i>{{this.$store.state.city}}</i><router-link to="/">[切换地址]</router-link></div>
        <div class="search-input">
          <input type="text" placeholder="搜索商家，美食...">
        </div>
      </div>
      <div class="result-img">
        <img src="../assets/takeout.408a87.png" alt="">
      </div>
      <div class="result-sort">
        <div class="sort-title">商家分类：</div>
        <div class="sort-box"></div>
      </div>
      <div class="result-container">
        <div class="result-shop-box" v-for="key in shop">
          <div class="result-shop">
            <div class="shop-photo">
              <img src="" alt="">
              <p>{{key.detail_info.overall_rating}}分</p>
            </div>
            <div class="shop-info">
              <h3>{{key.name}}</h3>
              <div class="shop-star">
                <span>{{key.detail_info.facility_rating}}分</span>
                <i>{{key.detail_info.atmosphere}}</i>
              </div>
              <p>{{key.detail_info.shop_hours}}</p>
              <div class="shop-guarantee">
                {{key.detail_info.featured_service}}
              </div>
            </div>
          </div>
          <div class="result-shop-detail">
            <div class="detail-tilte"></div>
            <div class="detail-content">
              <div class="detail-guarantee">
                <i>保</i><span></span>
              </div>
              <div class="detail-guarantee">
                <i>票</i><span></span>
              </div>
              <div class="detail-info">
                <a href="javascript:;"></a>
                <a href="javascript:;"></a>
              </div>
              <div class="detail-des">

              </div>
            </div>
          </div>
        </div>
        <p v-on:click="nextPage()">加载更多</p>
      </div>
    </div>
  </div>
</template>
<script>
  import headers from './headers'
  import store from '../store/store'

  export default {
    name: 'result',
    components: {
      headers
    },
    data () {
      return {
        shop: [],
        shopDetail: [],
        page: 1
      }
    },
    store,
    mounted () {
      this.getInfo()
    },
    methods: {
      getInfo: function () {
        let city = this.$store.state.city
        let url = 'http://api.map.baidu.com/place/v2/search?query=' + this.$store.state.city + '&tag=美食&page_size=20&page_num=' + this.page + '&radius=2000&&location=' + this.$store.state.locationX + ',' + this.$store.state.locationY + '&scope=2&output=json&ak=' + this.$store.state.ak + ''
        if (city) {
          this.$http.jsonp(url).then(response => {
            let data = response.data
            if (data.status === 0) {
              for (var k = 0; k < data.results.length; k++) {
                this.shop.push(data.results[k])
              }
              let uids = []
              for (var i = 0; i < data.results.length; i++) {
                uids.push(data.results[i].uid)
              }
              let detailUrl = 'http://api.map.baidu.com/place/v2/detail?uids=' + uids.join(',') + '&output=json&scope=2&ak=' + this.$store.state.ak + ''
              this.$http.jsonp(detailUrl).then(response => {
                let detailData = response.data
                if (detailData === 0) {
                  this.shopDetail = detailData.results
                }
              }, response => {
                console.log('error')
              })
            }
          }, response => {
            console.log('error')
          })
        }
      },
      nextPage: function () {
        this.page++
        this.getInfo()
      }
    }
  }
</script>
<style>
  @import "../../static/css/global.css";
  @import "../../static/css/result.css";
</style>
