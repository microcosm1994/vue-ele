<template>
  <div class="result">
    <headers></headers>
    <div class="result-main">
      <div class="result-search">
        <div class="result-loaction">当前位置：<i>1235465</i><router-link to="/">[切换地址]</router-link></div>
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
        <button @click="$store.commit('add')">+</button>
        <button @click="$store.commit('reduce')">-</button>
        <br>
        {{$store.state.count}}
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
        a: 1
      }
    },
    store,
    methods: {}
  }
</script>
<style>
  @import "../../static/css/global.css";
  @import "../../static/css/result.css";
</style>
