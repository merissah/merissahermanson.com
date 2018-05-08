<template>
  <div>
    <b-col col sm="6" v-for="post in posts" :key="post.id" class="portfolio-item preview">
      <router-link class="preview__title" :to="`/${post.id}`" >
      <b-img fluid v-bind:src="post.image" data-rjs="2" alt="Sensorly iOS App"/>
        <div class="info">
          <div class="info-content-wrap">
            <div class="info-content">
              <h3>{{ post.title }}</h3>
            </div>
          </div>
        </div>
      </router-link>
    </b-col>
  </div>
</template>

<script>

export default {
  name: 'app-feed',
  resource: 'AppFeed',

  data() {
    return {
      posts: []
    }
  },

  beforeMount() {
    this.$getResource('feed')
      .then(posts => {
        this.posts = posts
      })
  }
}
</script>
