<template>
  <div class="study-page">
    <vue-headful
      image="/static/images/home.png"
    />
    <nav-bar />
      <div class="jumbotron port-bkg"">
        <ul class="nav-buttons">
          <li>
            <a id="left-arrow"></a>
          </li>
          <li>
            <a id="right-arrow"></a>
          </li>
        </ul>
      </div>
      <article >
        <b-container>
          <b-row class="port-button">
          </b-row>
        </b-container>
      </article>
    <main-footer />
  </div>
</template>
<script>
import NavBar from './NavBar'
import MainFooter from './MainFooter'
import VideoTemp from './VideoTemp'
  export default {
    name: 'down-detector',
    resource: 'DownDetector',
    components: { NavBar, MainFooter, VideoTemp},
    props: { 
      post: String,
      videosrc: String,
      portImg: String
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
    .col-lg-4 {
      max-height:730px;
    }
    h4 {
      display:none;
    }
    &.apps.before {
      h4 {
        display:block;
        margin: 60px 0 0;
      }
      img {
        margin-top:20px;
      }
      p {
        margin-top:15px;
      }
    }
  }
  .web {
    margin:auto;
    background-color:transparent;
    img, video {
      background: url(/static/images/browser.svg) no-repeat top center;
      background-size: 101.5%;
      max-width:819px;
      width:100%;
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
  @media screen and (min-width: 992px) and (max-width: 1199px) {
    .port-section {
      .col-lg-4 {
        max-height: 540px;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    .port-section {
      &.apps.before {
        .col-md-6:nth-child(3n - 2) {
          -ms-flex: 0 0 100%;
          flex: 0 0 100%;
          max-width: 100%;
        }
        h4 {
          margin-top:80px;
        }
        .compare {
          margin-top:10px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .port-section {
      &.apps.before {
        h4 {
          margin-top:70px;
        }
        p{
          margin-bottom:0;
        }
        .compare {
          margin-top:20px;
        }
      }
      .col-lg-4 {
        max-height:100%;
      }
      .col-md-6 {
        text-align:center;
      }
    }

  }
</style>