<template>
  <div class="study-page">
    <vue-headful
      image="/static/images/home.png"
    />
    <nav-bar />
      <div class=" jumbotron port-bkg">
        <ul class="nav-buttons">
          <li>
            <a class="disabled" id="left-arrow"></a>
          </li>
          <li>
            <router-link id="right-arrow" to="/study/downDetector"></router-link>
          </li>
        </ul>
      </div>
      <article >
        <section class="port-section dark">
          <b-container>
            <h2>Enterprise Case Studies</h2>
            <p>Due to the proprietary nature of enterprise products, case studies can only be shared upon request.</p>
          </b-container>
        </section>
        <section class="port-section">
          <b-container>
          <b-row>
              <b-col md="6">
                <h3>Speedtest Intelligence</h3>
                <p>Speedtest Intelligence offers up-to-date insights into global fixed broadband and mobile performance data based on millions of consumer-initiated tests taken every day with Speedtest®. Created for companies and organizations seeking to better understand the speed and quality of networks. </p>
                <p>Starting in October 2018 I lead an ambitious redesign of the Speedtest Intelligience platform. I was the sole Product Designer. I performed the <strong>user research</strong> then used those insights throughout the process to inform the <strong>product strategy and design</strong>. I worked very closely with the Project Manager and Software Engineers. I also assisted the Engineers with some <strong>front end development</strong>.</p>
              </b-col>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/case-studies-sti.png" />
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <h3>Downdetector Enterprise</h3>
               <p>Downdetector is the world’s most popular platform for user-reported service status information. By analyzing and verifying over 25 million monthly problem reports in real-time, Downdetector Enterprise helps you reduce troubleshooting costs, minimize service downtime, and rapidly resolve issues.</p>
               <p>I was brought into this project in October of 2019 as the lead Product Designer. I performed the <strong>user research</strong>, helped inform the <strong>product strategy</strong>, and <strong>designed the user interface</strong>.</p>
              </b-col>
              <b-col md="6"><b-img-lazy fluid src="/static/images/case-studies-dde.png" /></b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <h3>Cell Analytics</h3>
                <p>Cell Analytics is a detailed mapping visualization platform powered by performance, coverage and signal measurements from the Ookla® Speedtest® network testing platform. It provides a comprehensive platform for mobile network operators to understand their networks and identify the areas that need improvement.</p>
                <p>I was brought into this project in November of 2019 as the lead Product Designer. I performed the <strong>user research</strong>, helped inform the <strong>product strategy</strong>, and designed the <strong>user interface</strong>.</p>
              </b-col>
              <b-col md="6"><b-img-lazy fluid src="/static/images/case-studies-ca.png" /></b-col>
            </b-row>
          </b-container>
        </section>
      </article>
    <main-footer />
  </div>
</template>
<script>
import NavBar from './NavBar'
import MainFooter from './MainFooter'
import VideoTemp from './VideoTemp'
export default {
  name: 'caseStudies',
  resource: 'caseStudies',
  components: { NavBar, MainFooter, VideoTemp}
}
</script>
<style lang="scss" scoped>

  h2, h3, p, ol, ul {
    text-align: left;
  }
  h3 {
    padding-bottom: 0px;
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

  .port-section {
    background-color:#edf2f7;
    padding-bottom:50px;
    text-align: center;
    img {
      margin: 20px auto 30px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12), 0 3px 3px rgba(0, 0, 0, 0.14);
    }
    ul {
      text-align: left;

      li {
        padding: 5px 0;
      }
    }
  }

  .port-button {
    text-align: center;
  }

  .port-bkg {
    width: 100%;
    height: 300px;
    background: url('../../static/images/case-studies-bkg.png') center top 80px no-repeat;
    background-attachment: fixed;
    margin-bottom: 0;
    text-align: center;
    background-color: #d7e4f3;
  }

  .dark {
    color: #D7DDE0;
    background-color: #26273B;
    text-align: center;

    h2, p {
      text-align: center;
    } 
  }

  .white {
    background-color: white;
  }

  .disclaimer {
    margin-bottom: 30px;
  }

  small {
    font-style: italic;
    display: block;
    margin: auto;
  }

  .no-shadow {
    img {
      box-shadow: none;
    }
  }

  #focus ol{
    font-weight: bold;
  }

  #focus p {
    font-weight: normal;
  }

  #focus h5 {
    margin-bottom: 0;
    text-align: left;
  }

  #results h5.quotes {
    text-align: left;
    padding: 15px 0;
  }

  .large-numbers {
    color: #5691B6;
    font-weight: bold;
    font-size: 2.5rem;
  }
  @media screen and (max-width: 767px) {
    .port-section {
        .large-numbers {
        font-size: 1.8rem;
      }
    }
    #app .jumbotron.port-bkg {
      background-size: 100%;
    }
  }
</style>