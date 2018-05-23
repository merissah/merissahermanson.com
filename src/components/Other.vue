<template>
  <div class="other-page">
    <nav-bar />
      <div class="jumbotron painting-bkg">
      </div>
      <b-container class="portfolio-content">
        <painting-feed/>
      </b-container>
    <main-footer />
  </div>
</template>
<script>
import NavBar from './NavBar'
import MainFooter from './MainFooter'
import PaintingFeed from './PaintingFeed'
  export default {
    name: 'other',
    resource: 'Other',
    components: { NavBar, PaintingFeed, MainFooter},
    props: { 
      post: String
    }
  }
</script>