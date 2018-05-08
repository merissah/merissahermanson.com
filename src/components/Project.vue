<template>
  <div class="project-page">
    <nav-bar />
    <div class="jumbotron port-bkg" style="background-image: url(img/bnr-ts.jpg);" data-rjs="2" id="ts">
      <ul class="nav-buttons">
        <li><a href="sensorly-ios.html" class="left-arrow"></a></li>
        <li><a href="me.html" class="right-arrow"></a></li>
      </ul>
    </div>
    <b-container class="portfolio-content">
    <blog-post :post="post"/>
      <b-row>
        <b-col>
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
        </b-col>
        <b-col>
          <h3>Type</h3>
          <p>{{ type }}</p>
          <h3>Application Owner</h3>
          <p>Mosaik Solutions</p>
        </b-col>
      </b-row>
      <project-buttons />
    </b-container>
    <main-footer />
  </div>
</template>
<script>
import NavBar from './NavBar'
import MainFooter from './MainFooter'
  export default {
    name: 'Detail',
    components: { NavBar, MainFooter},
    props: { post: String },
    data() {
      return {
        title: '',
        author: '',
        content: '',
        published: '',
        description: ''
      }
    },
  }
</script>