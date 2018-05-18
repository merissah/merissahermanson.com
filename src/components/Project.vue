<template>
  <div class="project-page">
    <nav-bar />
    <div class="jumbotron port-bkg" :style="getBgImg(image)">
      <ul class="nav-buttons">
        <li>
          <router-link class="left-arrow" :to="`/${before}`"></router-link>
          <a href="sensorly-ios.html" class="left-arrow"></a>
        </li>
        <li><a href="me.html" class="right-arrow"></a></li>
      </ul>
    </div>
    <b-container class="portfolio-content">
      <article v-if="post">
        <b-row class="port-button">
          <b-col>
            <b-button v-if="prototype" target="_blank" v-bind:href="prototype" size="lg" variant="default">
              View Prototype
            </b-button>
            <b-button v-if="link" target="_blank" v-bind:href="link" size="lg" variant="primary">
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
      post: String,
      before: String
    },
    data() {
      return {
        title: '',
        id: '',
        content: '',
        image: '',
        link: '',
        prototype: ''
      }
    },
    methods: {
      getBgImg(src) {
        return { backgroundImage: `url(${src})` }
      }
    },
    beforeMount() {
      if (!this.post) return;
      this.$getResource('post', this.post)
    }
  }
</script>