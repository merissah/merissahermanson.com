<template>
  <b-navbar toggleable="lg" type="fixed" id="navbar" class="navbar-default" fixed="top">
    <div class="container">
      <b-navbar-toggle target="navbar-collapse"></b-navbar-toggle>
      <b-navbar-brand>
        <a href="/">
          <b-img fluid src="/static/images/logo.png" alt="Merissa Hermanson Design"/>
        </a>
      </b-navbar-brand>
     <b-collapse is-nav id="navbar-collapse">
       <b-navbar-nav class="ml-auto">
          <b-nav-item id="startLink" href="/#start">START</b-nav-item>
          <b-nav-item id="aboutLink" href="/#about">ABOUT</b-nav-item>
          <b-nav-item id="toolsLink" href="/#tools">TOOLS</b-nav-item>
          <b-nav-item id="portfolioLink" href="/#portfolio">PORTFOLIO</b-nav-item>
          <b-nav-item id="contactLink" href="/#contact">CONTACT</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<style lang="scss" scoped>

  #navbar {
    min-height: 70px;
    padding:0 1rem;
    z-index:1000;

    &.navbar-default {
      background-color: rgba(255, 255, 255, 0.7);
      border: 1px solid transparent;
      border-color: #cfd6e0;

      li a {
        font-size: 14px;
        padding-top: 25px;
        padding-bottom: 25px;
        color:#798a99;

        &:hover {
          background-color: #5691B6;
          color: white;
        }
      }
    }
    .navbar-brand {
      padding: 5px 15px;

      img {
        height:60px;
      }
    }
  }

  .navbar-default .navbar-nav li a:hover, .navbar-default .navbar-nav .active a, 
  .navbar-default .navbar-nav .active a:hover, .navbar-default .navbar-nav .active a:focus {
    background-color: #5691B6;
    color: white;
  }

</style>