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
      <article v-if="post" >
        <b-container>
          <b-row class="port-button">
            <b-col>
              <b-button v-if="prototype" target="_blank" v-bind:href="prototype" variant="default">
                View Prototype
              </b-button>
              <b-button v-if="link" target="_blank" v-bind:href="link" variant="primary">
                View Site
              </b-button>
              <b-button v-if="iosLink" target="_blank" v-bind:href="iosLink" variant="primary">
                View on the App Store
              </b-button>
              <b-button v-if="androidLink" target="_blank" v-bind:href="androidLink" variant="primary">
                View on Google Play
              </b-button>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="9">
              <h2>{{ title }}</h2>
              <h4>Background</h4>
              <div v-html="content"></div>
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
          <b-row v-if="videosrcs" class="video-container">
            <div v-if="type === 'web'" class="video-web web">
              <video-temp v-for="videosrc in videosrcs" v-bind:videosrc="videosrc"></video-temp>
            </div>
            <b-col v-else v-for="videosrc in videosrcs" class="video-app">
              <video-temp v-bind:videosrc="videosrc"></video-temp>
            </b-col>
          </b-row>
        </b-container>
        <div class="port-section" v-bind:class="type">
          <b-container>
            <b-row>
              <div v-if="size" v-bind:class="size" v-for="portImg in portImgs">
                <b-img fluid v-bind:src="portImg"/>
              </div>
              <div v-if="!size" class="pic" v-for="portImg in portImgs">
                <b-img fluid v-bind:src="portImg"/>
              </div>
            </b-row>
          </b-container>
        </div>
      </article>
    <main-footer />
  </div>
</template>
<script>
import NavBar from './NavBar'
import MainFooter from './MainFooter'
import VideoTemp from './VideoTemp'
  export default {
    name: 'project',
    resource: 'Project',
    components: { NavBar, MainFooter, VideoTemp},
    props: { 
      post: String,
      videosrc: String,
      portImg: String
    },
    data() {
      return {
        title: '',
        id: '',
        type: 'apps',
        size: '',
        content: '',
        image: '',
        portImgs: [],
        videosrcs: [],
        link: '',
        androidLink: '',
        iosLink: '',
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
      this.$getResource("apps")
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

  h2, p {
    text-align: left;
  }
  h3 {
    padding-bottom: 0px;
  }

  .video-container {
    .col {
      font-size:0;
    }
  }

  .nav-buttons li {
    list-style: none;
      a {
      height: 50px;
      width:50px;
      display: block;
      position: absolute;
      top:150px;
      border-radius: 50%;
      &.disabled {
        opacity: 0.5;
        cursor:default;
      }
    }
    #right-arrow{
      background: rgba(255,255,255,0.5) url(/static/images/right-arrow.svg) center/15px no-repeat;
      right:1%;
    }
    #left-arrow{
      background: rgba(255,255,255,0.5) url(/static/images/left-arrow.svg) center/15px no-repeat;
      left:1%;
    }
  }

  .nav-buttons li a:hover, .nav-buttons li a:focus {
    background-color: rgba(255,255,255,1);
  }

  .nav-buttons li a.disabled:hover, .nav-buttons li a.disabled:focus {
    background-color: rgba(255,255,255,0.5);
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

  .port-section {
    background-color:#edf2f7;
    padding-bottom:50px;
    img {
      margin-top:50px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
    .col-4 {
      max-height:670px;
    }
  }
  .web {
    margin:auto;
    background-color:transparent;
    img, video {
      background: url(/static/images/browser.svg) no-repeat top center;
      background-size: 101.5%;
      width:819px;
      padding-top:50px;
    }
    video {
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
    .pic, .video-container {
      margin:auto;
      text-align: center;
    }
  }
 .video-container {
    align-items: flex-end;
    justify-content: flex-end;
  }
  .video-app video {
    width: 100%;
    max-width: 300px;
  }
  .video-web {
    margin-top:50px;
  }

  .port-button {
    text-align: center;
  }
</style>