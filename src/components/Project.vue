<template>
  <div class="project-page">
    <nav-bar />
    <div class="jumbotron port-bkg" :style="getBgImg(image)">
      <ul class="nav-buttons">
        <li>
          <a href="#" id="left-arrow" :href="selectPrev()"></a>
        </li>
        <li>
          <a href="#" id="right-arrow" :href="selectNext()"></a>
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
           <b-col>
            <h2 class="post__title">{{ title }}</h2>
            <div v-html="content"></div>
          </b-col>
          <b-col>
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
        posts: [],
        app: this.post,
        index: 0
      }
    },
    methods: {
      getBgImg(src) {
        return { backgroundImage: `url(${src})` }
      },
      move(dir){
        var appIndex = this.index + dir;
        console.log(appIndex + 'app-index')
        if(this.posts.length){
          if (appIndex >= this.posts.length) {
              appIndex = 0;
          }
          if (appIndex < 0) {
              appIndex = this.posts.length - 1;
              console.log('less-than-0' + appIndex)
          }
          this.app = this.posts[appIndex].id
          return this.app
        } else {
          return '#'
        }
      },
      selectNext(){
        return this.move(1)
      },
      selectPrev() {
        console.log(this.move(-1) + 'move')
        return this.move(-1)
      }
    },
    beforeMount() {
      if (!this.post) return;
      this.$getResource('post', this.post)
      this.$getResource('apps')
      .then(posts => {
        this.posts = posts
      })
    },
    updated(){
      this.$getResource('post', this.post)
    }
  }
</script>