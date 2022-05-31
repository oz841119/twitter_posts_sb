<template>
  <div class="fake_result_list">
    <div class="posts_list">
      <a class="post_wrap" v-for="post in this.$store.state.postList" :href="post.postLink" :key="post.postLink">
        <div class="user_photo">{{post.userPhoto}}</div>
        <div class="post_info">
          <div class="user_name">{{post.userName}}</div>
          <div class="post_content">{{post.postContent}}</div>
          <div class="post_date">
            <div class="date">{{post.postDate}}</div>
            <div class="time_before">1hr ago</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FakeResultList",
    components: {},
}
</script>

<style lang="scss" scoped>
  .fake_result_list {
    
    .posts_list {
      padding: 20px;
      background-color: green;

      .post_wrap {
        display: flex;
        background-color: aqua;
        margin-bottom: 20px;

        .user_photo {
          min-width: 150px;
          height: 200px;
          background-color: bisque;
        }

        .post_info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0 20px 0 20px;
          .user_name {
            font-size: 26px;
            font-weight: 700;
          }

          .post_content {
            font-size: 16px;
            height: 90px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
          }

        }
        
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>