<template>
  <div class="fake_result_list">
    <div class="posts_list" @click="addNewPost()">
      <a class="post_wrap" v-for="(post, index) in this.$store.state.postList" :href="post.postLink" :key="index">
        <div class="user_photo_wrap">
          <img class="photo" :src="post.userPhoto" alt="">
        </div>
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
    methods: {
      addNewPost() {
        this.$store.commit('addPost')
      },
    }
}
</script>

<style lang="scss" scoped>
  .fake_result_list {
    
    .posts_list {
      padding: 20px;

      .post_wrap {
        display: flex;
        margin-bottom: 20px;

        .user_photo_wrap {
          min-width: 150px;
          max-width: 150px;
          height: 200px;
          overflow: hidden;

          .photo {
            width: 100%;
            height: 200px;
          }
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
            word-break: break-all;
          }

          .post_date {
            height: 45px;
          }
        }
        
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>