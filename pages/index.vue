<template>
  <div class="index">
    <div class="searchWrap">
      <TwitterSearchBox/>
    </div>
    <div class="mainWrap" @scroll="scroolEvent">
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
  },
  methods: {
    scroolEvent(e) {
      if(e.srcElement.scrollTop + e.srcElement.offsetHeight >= e.srcElement.scrollHeight - 10) {
        if(this.$store.state.isAllowGetPostData) { // 簡易throttle
          this.$store.dispatch('getPostData')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .index {
    display: flex;
    width: 100vw;
    flex-direction: row;
    justify-content: center;

    @media screen and (max-width: 576px) {
      flex-direction: column;
    }

    .searchWrap {
      width: 150px; // Desktop固定150px
      height: 100vh;
      padding: 20px 20px 0 20px;

      @media screen and (max-width: 576px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw; 
        height: 120px;
        padding: 0 20px 0 20px;
      }
    }

    .mainWrap {
      max-width: 720px;
      height: 100vh;
      min-height: 100vh;
      flex: 1;
      padding: 20px 20px 0 20px;
      overflow: scroll;

      @media screen and (max-width: 576px) {
        padding: 0px 20px 0 20px;
      }
    }
  }
</style>