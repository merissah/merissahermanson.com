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
<style lang="scss" scoped>
  .port-bkg {
    width: 100%;
    height: 300px;
    background-position: center top 80px;
    background-attachment: fixed;
    margin-bottom: 40px;
    text-align: center;
    background-color: #d7e4f3;
    background-repeat: no-repeat;
  }

  .nav-buttons li {
    list-style: none;
  }

  .nav-buttons li a {
    height: 50px;
    width:50px;
    display: block;
    position: absolute;
    top:150px;
    border-radius: 50%;
  }

  .nav-buttons li a:hover, .nav-buttons li a:focus {
    background-color: rgba(255,255,255,1);
  }

  .nav-buttons li a.disabled {
    opacity: 0.5;
    cursor:default;
  }

  .nav-buttons li a.disabled:hover, .nav-buttons li a.disabled:focus {
    background-color: rgba(255,255,255,0.5);
  } 

  .nav-buttons #right-arrow{
    background: rgba(255,255,255,0.5) url(/static/images/right-arrow.svg) center/15px no-repeat;
    right:1%;
  }
  .nav-buttons #left-arrow{
    background: rgba(255,255,255,0.5) url(/static/images/left-arrow.svg) center/15px no-repeat;
    left:1%;
  }
  .painting-bkg {
    width: 100%;
    height: 300px;
    background-position: center top;
    background-attachment: fixed;
    margin-bottom: 40px;
    text-align: center;
    background-repeat: no-repeat;
  }
  #animations {
    background-image: url(/static/images/bnr-animations.jpg);
    background-size: 900px;
  }
  .portfolio-content h2, .portfolio-content p {
    text-align: left;
  }
  .portfolio-content h3 {
    padding-bottom: 0px;
  }
  .portpage-pic {
    margin-top: 50px;
    text-align: center;
  }
  .portpage-pic .pic {
    display: inline-block;
    margin: .7em auto;
    height: auto;
    position: relative;
  }

  .portpage-pic .pic.web, .portpage-pic .pic.phone, 
  .portpage-pic .pic.video-container, .portpage-pic .pic.other {
    width:70%;
  }

  .pic img, .video-container {
    width: 100%;
    height: auto;
    display: block;
    position: relative;
    border: 1px solid #f1f2f3;
  }

  .pic.phone img {
    border:none;
  }

  .portpage-pic .video-container {
    padding-top:4.9%;
    margin-bottom:2em;
  }

  .pic.web img, .video-container {
    background: url(/static/images/browser.svg) no-repeat top center;
    background-size: 102.55%;
    padding-top:6%;
  }

  .portpage-pic .video-wrapper {
    overflow: hidden;
  }

  .video-wrapper video {
      width: 100.5%;
      top: -53px;
      left:-2px;
      position: relative;
      margin-bottom:-63px;

  }
  .port-button {
    text-align: center;
  }
</style>