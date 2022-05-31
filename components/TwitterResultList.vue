<template>
  <div class="twitter_result_list">
    <FakeResultList/>
  </div>
</template>

<script>
import FakeResultList from './TwitterResultList/FakeResultList.vue';
  export default {
    name: "TwitterResultList",
    components: { FakeResultList }
}
</script>

<style lang="scss" scoped>
  
</style>