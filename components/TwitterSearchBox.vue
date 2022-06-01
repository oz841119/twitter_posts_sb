<template>
  <div class="twitter_search_box">
    <input type="text" class="search_inp" v-model="searchContent">
    <button class="submit_btn" @click="searchSubmit(searchContent)">未實作</button>
  </div>
</template>

<script>
  export default {
    name: 'TwitterSearchBox',
    data() {
      return {
        searchContent: '根據API查參獲得資料'
      }
    },
    methods: {
      searchSubmit(contnet) {}
    }
  }
</script>

<style lang="scss" scoped>
  .twitter_search_box {
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: space-around;

    @media screen and (max-width: 576px) {
      width: 100%;
      height: 90%;
      justify-content: space-around;
    }

    .search_inp, .submit_btn {
      height: 36px;
    }
  }
  
</style>