<template>
  <div class="study-page">
    <vue-headful
      image="/static/images/home.png"
    />
    <nav-bar />
      <div class=" jumbotron port-bkg" :style="{ backgroundImage: `url(${header})`}">
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
        <section class="port-section dark" id="background" :style="{ backgroundImage: `url(${background})`}">
          <b-container>
            <h2>SpeedTest Intelligence</h2>
            <p>Speedtest Intelligence was created to give up-to-date insights into global fixed broadband and mobile performance data based on millions of consumer-initiated tests taken every day with Speedtest.</p>
            <p>Starting in October 2018 I lead an ambitious redesign of the Speedtest Intelligience platform. </p>
            <b-button class="btn-primary inverse" target="_blank" href="https://ookla.invisionapp.com/share/TYQWOG7ENRD" variant="default">
                View Prototype
            </b-button>
          </b-container>
        </section>
        <section class="port-section" id="challenge">
          <b-container> 
            <h2>The Challenge</h2>
            <p>After a couple of years competitors with slick or simple user interfaces were drawing customer interest away from our product. Customers would complain that it was too hard to use, hard to get started, and took too long to gather the insights they were looking for. Before we could work on a solution, we first needed to fully understand the problems. In researching the project my main goals were to:</p>
            <ul>
              <li>Understand the current state of the product. </li>
              <li>Collect background information from the team about the product, what they felt the main issues were and why certain decisions were made.</li>
              <li>Conduct user interviews to see how they were currently using the product and where it was falling short.</li>
            </ul>
            <b-img-lazy fluid src="/static/images/sti-challenge.png" alt="Screenshots of the original Speedtest Intelligence Application"/>
          </b-container>
        </section>
        <section class="port-section dark" id="role">
          <b-container> 
            <h2>My Role</h2>
            <p>I was the sole Product Designer for the project. I ran the various rounds of user interviews, and user testing, then used those insights throughout the process to inform my design. I worked very closely with the Project Manager and Software Engineers. I also assisted the Engineers with some CSS work. Most decisions were made collectively by me and the Project Manager. </p>
          </b-container>   
        </section>
        <section class="port-section" id="kickoff">
          <b-container> 
            <h2>Kickoff</h2>
            <p>My first impression of the product was that it seemed pretty easy to use. The home screen had a global search for location, provider, and device. It didn’t seem very browsable. You had to know what you were looking for, you couldn’t see a list of providers or devices available. Depending on your search or filter choices other options to view rankings or ability to compare would be available. Sometimes this made things hard to find. It wasn’t always clear what options you had to select for other options to become available.</p>
            <p>Talking with the team revealed frustration any time they needed to add something new to the product. The backend wasn’t built with flexibility in mind. Graphs and tables were built on a per report basis. Adding new measures or filters sometimes required major rework to the current UI as well as the backend.</p>
            <p>Before working on any solutions it was important to fully understand what we were working with. I created a high level user flow of the current application to keep track of the current functionality and keep everyone on the same page.</p>
            <b-img-lazy fluid src="/static/images/sti-flow1.svg" alt="Flow chart of the original Speedtest Intelligence"/>
          </b-container>   
        </section>
        <section class="port-section" id="discovery">
          <b-container> 
            <h2>Discovery</h2>
            <p>Insights were gathered from four different user interviews and user analytic tools, Google Analytics, and Freshmarketer.</p>
            <h3>What users really wanted</h3>
            <p>Users wanted to know how their network compared to their competition. Network companies have accurate detailed information about their own network, but no insight into their competitors. The Speedtest Intelligence portal provided neutral third party information in which they could gain insights into how their network compared in the marketplace.</p>
            <p>Most of the product was built to view one network, or device at a time. Compare functionality was available after a user made a selection but it lacked a lot of the information that was available on the single view. Users couldn’t view maps or quality metrics. Each item was added one at a time with a modal. Comparing half a dozen items or more was tedious, and users would forget which items they had already added when the modal blocked their previously added items. The color legend was at the top of the screen so users would have to scroll back and forth between the graph and the legend.  </p>
            <b-img-lazy fluid src="/static/images/sti-compare1.png" alt="Flow chart of the original Speedtest Intelligence"/>
            <small>Original compare funtionality</small>
            <h3>Lacking in flexibility</h3>
            <p>Users weren’t spending much time using the product. Instead, they would create their own visualizations with tools like Tableau or Microsoft Bi using our data extracts. They were interested in tracking performance across many different locations at once, performance distributions, discovering correlations between different measures, and being able to see aggregates of custom groups. Overall, SpeedTest Intelligence lacked the flexibility to view the data in ways that were useful for them. </p>
            <h3>More features and measures</h3>
            <p>Users also asked for a long list of new measures and features to better understand their network as well as their competitions in more detail.</p>
            <ul>
              <li>Insights into how performance changes throughout the day or day of week.</li>
              <li>Customers perception of coverage and performance in a given location</li>
              <li>Metrics related to cell towers - sectors, frequencies, locations, connections, TAC, etc.</li>
              <li>Detailed device information, including software version, category, and chipset.</li>
              <li>More advanced filtering. For example: only include devices launched after a certain date, view the average performance for a custom grouping of locations or devices.</li>
              <li>Ability to upload shapefiles to analyze metrics using their custom geometric boundaries</li>       
            </ul>
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
import header from '../../static/images/sti.png'
import background from '../../static/images/sti-background.svg'
  export default {
    name: 'intelligence',
    resource: 'Intelligence',
    components: { NavBar, MainFooter, VideoTemp},
    data() {
      return {
        header,
        background
      }
    }
  }
</script>
<style lang="scss" scoped>

  h2, h3, p {
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
    }
    .col-lg-4 {
      max-height:730px;
    }
  }

  .port-button {
    text-align: center;
  }

  .port-bkg {
    width: 100%;
    height: 300px;
    background-position: center top 80px;
    background-attachment: fixed;
    margin-bottom: 0;
    text-align: center;
    background-color: #d7e4f3;
    background-repeat: no-repeat;
  }

  .dark {
    color: #D7DDE0;
    background: #26273B bottom center no-repeat;
    background-size: 100%;
    text-align: center;

    h2, p {
      text-align: center;
    } 
  }

  small {
    font-style: italic;
    display: block;
  }

  #background {
    padding-bottom: 20%;
  }

  #kickoff {
    background-color: white;
  }

  #challenge, #kickoff {
    img {
      box-shadow: none;
    }
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