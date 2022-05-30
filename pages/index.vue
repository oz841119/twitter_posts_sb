<template>
  <div class="index">
    <div class="searchWrap">
      <TwitterSearchBox/>
    </div>

    <div class="mainWrap">
      <TwitterResultList/>
    </div>
  </div>
</template>

<script>
import '../assets/style/initStyle.css'
import TwitterSearchBox from '../components/TwitterSearchBox.vue'
import TwitterResultList from '../components/TwitterResultList.vue'
export default {
  name: 'IndexPage',
  components: {
    TwitterSearchBox,
    TwitterResultList
  }
}
</script>

<style lang="scss" scoped>
  .index {
    display: flex;
    width: 100vw;
    overflow: hidden;
    flex-direction: row;
    justify-content: center;

    @media screen and (max-width: 576px) {
      flex-direction: column;
    }

    .searchWrap {
      width: 150px; // Desktop固定150px
      height: 100vh;
      background-color: red;
      padding: 0 20px;

      @media screen and (max-width: 576px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw; 
        height: 120px;
        padding: 0 20px;
      }
    }

    .mainWrap {
      max-width: 720px;
      background-color: blue;
      flex: 1;
    }
  }
</style>