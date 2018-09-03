<template>
  <div class="animations">
    <nav-bar />
      <div class="jumbotron animation-bkg">
      </div>
      <article>
        <b-container>
          <b-row>
            <b-col cols="12" md="9">
              <h2>Animations</h2>
              <h4>Background</h4>
              <p>Most of these animations were created using Autodesk Maya 3D software. The Nuclear Regulatory Commission needed various animations for the online training we developed for them. Most of them are different particle interactions which were better represented in 3d while others were created in After Effects. This project is still under development and has not been cleared. Please do not redistribute.
              </p>
            </b-col>
            <b-col>
              <h4>Product</h4>
              <p>Maya and After Effects Videos</p>
              <h4>Ship Date</h4>
              <p>Unknown</p>
              <h4>My Role</h4>
              <p>Designer, Editor</p>
            </b-col>
          </b-row>
          <b-row>
            <template v-for="Avideo in Avideos">
              <b-col cols="12" lg="6">
                <iframe v-bind:videosrc="Avideo.src" frameborder="0" allowfullscreen></iframe>
              </b-col>
            </template>
          </b-row>
        </b-container>
      </article>
    <main-footer />
  </div>
</template>
<script>
import NavBar from './NavBar'
import MainFooter from './MainFooter'
import ImgFeed from './ImgFeed'

  export default {
    name: 'animations',
    resource: 'animations',
    components: { NavBar, ImgFeed, MainFooter},
    props: { 
      post: String
    },
    data() {
      return {
        Avideos: [
          {src: 'https://youtu.be/QJnt5D4mJnQ'},
          {src: 'https://youtu.be/9j1h-00PuPY'},
          {src: 'https://youtu.be/4FFpDLXvWHU'},
          {src: 'https://youtu.be/GrFX6Y29WbQ'},
          {src: 'https://youtu.be/Dqfx-5RJwwA'},
          {src: 'https://www.youtube.com/watch?v=BiofnvIrEZM'}
        ]
      }
    },
  }
</script>
<style lang="scss" scoped>
  .animation-bkg {
    background-image: url(/static/images/animation.svg);
    background-size: 100%;
    max-width: 100%;
    height: 300px;
    background-position: center 20%;
    background-attachment: fixed;
    margin-bottom: 40px;
    text-align: center;
    background-repeat: no-repeat;
  }

  iframe {
    width: 100%;
    height: 100%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }
  
  .animations {
    h2 {
      text-align:left;
    }
  }
</style>