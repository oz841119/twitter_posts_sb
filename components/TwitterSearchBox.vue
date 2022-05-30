<template>
  <div class="twitter_search_box">
    <input type="text" class="search_inp">
    <button class="submit_btn">Search</button>
  </div>
</template>

<script>
  export default {
    name: 'TwitterSearchBox'
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