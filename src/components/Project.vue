<template>
  <div class="project-page">
    <nav-bar />
      <div class="jumbotron port-bkg" :style="getBgImg(image)">
        <ul class="nav-buttons">
          <li>
            <a href="#" id="left-arrow" :href="back"></a>
          </li>
          <li>
            <a href="#" id="right-arrow" :href="forward"></a>
          </li>
        </ul>
      </div>
      <b-container class="portfolio-content">
        <article v-if="post" >
          <b-row class="port-button">
            <b-col>
              <b-button v-if="prototype" target="_blank" v-bind:href="prototype" variant="default">
                View Prototype
              </b-button>
              <b-button v-if="link" target="_blank" v-bind:href="link" variant="primary">
                View Site
              </b-button>
            </b-col>
          </b-row>
          <b-row>
             <b-col cols="9">
              <h2>{{ title }}</h2>
              <h4>Background</h4>
              <div v-html="content"></div>
              <h4>UX Process</h4>
            </b-col>
            <b-col>
              <h4>Product</h4>
              <p>{{ product }}</p>
              <h4>Ship Date</h4>
              <p v-html="date"></p>
              <h4>My Role</h4>
              <p>{{ role }}</p>
            </b-col>
          </b-row>
        </article>
      </b-container>
    <main-footer />
  </div>
</template>
<script>
import NavBar from './NavBar'
import MainFooter from './MainFooter'
  export default {
    name: 'project',
    resource: 'Project',
    components: { NavBar, MainFooter},
    props: { 
      post: String
    },
    data() {
      return {
        title: '',
        id: '',
        content: '',
        image: '',
        link: '',
        prototype: '',
        product: '',
        date: '',
        role: '',
        posts: [],
        index: 0,
        back: "",
        forward: ""
      }
    },
    beforeRouteUpdate (to, from, next) {
      this.$getResource('post', this.post)
    },
    methods: {
      getBgImg(src) {
        return { backgroundImage: `url(${src})` }
      }
    },
    beforeMount() {
      if (!this.post) return;
      this.$getResource('post', this.post)
      this.$getResource('apps')
      .then(posts => {
        this.posts = posts

        if (this.index == 0) {
          this.back = this.posts[this.posts.length - 1].id
          this.forward = this.posts[this.index + 1].id
        }
        if (this.index == this.posts.length - 1){
          this.back = this.posts[this.index - 1].id
          this.forward = this.posts[0].id
        } else {
          this.back = this.posts[this.index - 1].id
          this.forward = this.posts[this.index + 1].id
        } 
      })
    }
  }
</script>