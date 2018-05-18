<template>
  <div id="print">
    <b-col col sm="6" v-for="post in posts" :key="post.id" class="portfolio-item preview">
      <router-link :to="`/${post.id}`">
      <b-img fluid v-bind:src="post.image" v-bind:alt="post.title"/>
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
  name: 'print-feed',
  resource: 'PrintFeed',

  data() {
    return {
      posts: []
    }
  },

  beforeMount() {
    this.$getResource('print')
      .then(posts => {
        this.posts = posts
      })
  }
}
</script>
