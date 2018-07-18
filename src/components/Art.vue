<template>
  <div class="art-page">
    <nav-bar />
      <div class="jumbotron painting-bkg">
      </div>
      <b-container class="portfolio-content">
        <b-row class="portfolio-section">
          <b-col col sm="12">
            <h3>Oil & Acrylic</h3>
            <hr />
          </b-col>
        </b-row>
        <img-feed art="art" img-category="paintings"></img-feed>
        <b-row class="portfolio-section">
          <b-col col sm="12">
            <h3>Watercolor</h3>
            <hr />
          </b-col>
        </b-row>
        <img-feed art="art" img-category="watercolors"></img-feed>
        <b-row class="portfolio-section">
          <b-col col sm="12">
            <h3>Charcoal</h3>
            <hr />
          </b-col>
        </b-row>
       <img-feed art="art" img-category="charcoal"></img-feed>
      </b-container>
    <main-footer />
  </div>
</template>
<script>
import simpleLightbox from '../plugins/resource/simplelightbox.js'

import NavBar from './NavBar'
import MainFooter from './MainFooter'
import ImgFeed from './ImgFeed'

  export default {
    name: 'art',
    resource: 'art',
    components: { NavBar, ImgFeed, MainFooter},
    props: { 
      post: String
    },
    mounted(){

    $(function(){
        var $gallery = $('.art a').simpleLightbox();  
      });
    }
  }
</script>
<style lang="scss" scoped>
  .painting-bkg {
    background-image: url(/static/images/bnr-painting.jpg);
    background-size: contain;
    max-width: 100%;
    height: 300px;
    background-position: center top;
    background-attachment: fixed;
    margin-bottom: 40px;
    text-align: center;
    background-repeat: no-repeat;
  }
  .art-page {
    text-align:center;
  }
</style>
<style lang="scss" src="../assets/sass/simplelightbox.scss"></style>