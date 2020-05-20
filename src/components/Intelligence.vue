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
        <section class="port-section dark" id="background">
          <b-container>
            <h2>SpeedTest Intelligence</h2>
            <p>Speedtest Intelligence was created to give up-to-date insights into global fixed broadband and mobile performance data based on millions of consumer-initiated tests taken every day with Speedtest.</p>
            <p>Starting in October 2018 I lead an ambitious redesign of the Speedtest Intelligience platform. </p>
            <b-button class="btn-secondary inverse" target="_blank" href="https://ookla.invisionapp.com/share/TYQWOG7ENRD" variant="default">
                View Prototype
            </b-button>
            <b-button class="btn-primary inverse" target="_blank" href="https://intelligence.speedtest.net/#login" variant="default">
                View Site
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
        <section class="port-section white" id="kickoff">
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
            <b-img-lazy fluid src="/static/images/sti-compare1.png" alt="Screenshot of the original Speedtest Intelligence compare funtionality"/>
            <small>Original compare funtionality</small>
            <h3>Lacking in flexibility</h3>
            <p>Users weren’t spending much time using the product. Instead, they would create their own visualizations with tools like Tableau or Microsoft Bi using our data extracts. They were interested in tracking performance across many different locations at once, performance distributions, discovering correlations between different measures, and being able to see aggregates of custom groups. Overall, SpeedTest Intelligence lacked the flexibility to view the data in ways that were useful for them. </p>
            <b-img-lazy fluid src="/static/images/sti-graphs.png" alt="Examples of how customers were visualizing the data in other applications"/>
            <small>How customers were analyzing the data in other applications</small>
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
        <section class="port-section white" id="reframing">
          <b-container>
            <h2>Reframing the problem</h2>
            <p>After gathering all of our research we had to hone in on what we would develop first. We had to deliver real progress quickly or risk losing some major customers to our competition. Eventually, we wanted a product where users could customize their graphs and dashboards however they wanted. After a few conversations with our developers we realized this wasn’t something we could deliver in a short amount of time. </p>
            <p>What could we deliver that would provide the biggest improvement to the product? What was most important to our users? Instead of focusing on the long list of features we were given we decided to focus on the main reason WHY customers wanted to use the product in the first place. </p>
            <p>We also didn’t want to back ourselves into a corner. Whatever we built needed to be a step towards our ultimate goal of providing the full flexibility our users wanted. Networks and technologies are continually changing and changing quickly. Updating our product with new data sets and features just as quickly, was vital to its success. </p>
            <b-row>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/sti-wireframe1.png" alt="Early wireframes"/>
              </b-col>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/sti-wireframe2.png" alt="Early wireframes"/>
              </b-col>
            </b-row>
            <b-row>
              <small>Early Wireframes</small>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/sti-early1.png" alt="Early design concepts"/>
              </b-col>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/sti-early2.png" alt="Early design concepts"/>
              </b-col>
            </b-row>
            <b-row>
              <small>Early Design Concepts</small>
            </b-row>
          </b-container>
        </section>
        <section class="port-section" id="focus">
          <b-container>
            <h2>Creating Focus</h2>
            <p>After going back over all of our research we decided to focus on three main areas for the redesign:</p>
            <ol>
              <li>
                <h5>Flexible Architecture</h5>
                <p>Before building out our new vision of the product we needed to work on removing a lot of the roadblocks that had been slowing development in the past. Our flexible product also needed flexible architecture to support it. Taking the time to clean up the old code base first would save us a lot more time in the future. </p>
              </li>
              <li>
                <h5>Focus on Benchmarking</h5>
                <p>Customers value our product largely for the competitive information it provides since this data is difficult or impossible to get elsewhere. Improving the comparison experience and making it the main focus instead of just a side note, would bring the largest single improvement to our users.</p>
              </li>
              <li>
                <h5>Timing is Everything</h5>
                <p>We had to launch the redesign in 6 months or less to avoid losing some big customers.</p>
              </li>
            </ol>
          </b-container>
        </section>
        <section class="port-section white" id="end">
          <b-container>
            <h2>Starting at the End</h2>
            <p>To make sure our redesign was a major step in the right direction, we had to figure out what direction we were going. I decided to come up with the rough framework of what our ideal product would be, and then scale it back to something we could deliver on in 6 months.</p>
            <p>Since our users were already exporting our data and then analyzing it in tools like Tableau, we felt like that was the direction we should go. A platform that lets the user slice and dice the data the way they wanted to. The main difference is that we know our data. Applications like Tableau had to be completely open to support all different types of data for different types of purposes. We could cater our application to best visualize our data for their specific use cases. </p>
            <p>Custom dashlets and dashboards were going to take longer than 6 months. So what if we did our best to create the dashboards for them? Our MVP would have to support all the current functionality but in a dashboard format that would eventually be customizable.</p>
            <b-img-lazy fluid src="/static/images/sti-flow2.svg" alt="Flow chart of the original Speedtest Intelligence"/>
          </b-container>
        </section>
        <section class="port-section" id="compare">
          <b-container>
            <h2>Improving How Users Compare</h2>
            <p>Our new dashboards went through numerous iterations, most of the focus being on the compare functionality. Most users were comparing providers. The first version included a multiple select for providers, then a single select for all of the other filters. </p>
            <p>However, this left out use cases comparing devices, or locations. Back to the drawing board. Next, I tried having a toggle between comparing providers, devices, or locations. After testing we realized the toggle didn’t fit the user's mental model. They struggled to find it, when they did it took them awhile to figure out how it would work. Users didn’t find this method flexible enough or intuitive. They wanted to be able to compare providers and then break them out by device or location. </p>
            <p>During testing, I noticed when I asked users how they might compare devices or locations after comparing providers, they looked in the single select dropdowns. They expected to be able to select multiple devices or locations the same way they could with providers. This got me thinking, why not? If this seemed to be the more natural way users wanted to select options, could I make that work?</p>
            <b-row>
              <b-col>
                <b-img-lazy fluid src="/static/images/sti-compare2.svg" alt="Early design concepts"/>
                <small>Comparing Providers Only</small>
              </b-col>
              <b-col>
                <b-img-lazy fluid src="/static/images/sti-compare3.svg" alt="Early design concepts"/>
                <small>Comparing Providers, Devices, or Locations</small>
              </b-col>
              <b-col>
                <b-img-lazy fluid src="/static/images/sti-compare4.svg" alt="Early design concepts"/>
                <small>Multidemensional Compare</small>
              </b-col>
            </b-row>
          </b-container>
        </section>
        <section class="port-section white" id="multidemensional">
          <b-container>
            <h2>Multidimensional Compare</h2>
            <p>Letting the users make multiple selections across multiple filters seemed intuitive enough for them, but this made things difficult for the developers. Every provider was dependent upon a location. For instance Verizon is only in the United States, while Claro is only in Brazil. What happens if the user selects multiple US providers and then wants to add multiple countries? What happens when the user tries to select three different dimensions? This would exponentially add too many lines to the graphs. </p>
            <p>After much discussion we were able to come up with some logic, restrictions, and messaging to make it all work. Testing revealed that this solution was indeed better than any of the others we had come up with. Users were able to compare things more intuitively and much faster than they were able to do before.</p>
            <b-row>
              <b-col>
                <b-img-lazy fluid src="/static/images/sti-final1.png" alt="Early design concepts"/>
                <small>Performance and Quality dashboard in Speedtest Intelligence</small>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-img-lazy fluid src="/static/images/sti-final2.png" alt="Early design concepts"/>
                <small>Login Screen</small>
              </b-col>
              <b-col>
                <b-img-lazy fluid src="/static/images/sti-final3.png" alt="Early design concepts"/>
                <small>Home page with default dashboards and saved sessions</small>
              </b-col>
            </b-row>
          </b-container>
        </section>
        <section class="port-section" id="results">
          <b-container>
            <h2>The Results</h2>
            <p>The team was able to meet the deadline. We launched the application internally at first. This allowed us to gather feedback internally and test any bugs at a slightly larger scale. Next, we launched for just a percentage of our clients, and finally we launched the rest of the application globally. The reaction was pretty quiet. No major issues or complaints. Sometimes no news is good news.</p>
            <p>We received a lot of positive feedback from users, as well as retaining those clients that had threatened to leave for a different product.</p>
            <h5 class="quotes">“I used to have 20 different saved reports, after the redesign I deleted all of them. The new dashboard does it all”</h5>
            <h5 class="quotes">“A major upgrade from the original.”</h5>
            <h5 class="quotes">“Much more intuitive than before”</h5>
            <b-row>
              <b-col>
                <div class="large-numbers">+23%</div>
                <h5>Revenue</h5>
              </b-col>
              <b-col>
                <div class="large-numbers">+32%</div>
                <h5>User Sessions</h5>
              </b-col>
              <b-col>
                <div class="large-numbers">+213%</div>
                <h5>New Users</h5>
              </b-col>
              <b-col>
                <div class="large-numbers">+156%</div>
                <h5>Daily Active Users</h5>
              </b-col>
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
  export default {
    name: 'intelligence',
    resource: 'Intelligence',
    components: { NavBar, MainFooter}
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
    }
  }

  .port-button {
    text-align: center;
  }

  .port-bkg {
    width: 100%;
    height: 300px;
    background: url('../../static/images/sti.png') center top 80px no-repeat;
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

  small {
    font-style: italic;
    display: block;
    margin: auto;
  }

  #background {
    padding-bottom: 18%;
    background: #26273B url('../../static/images/sti-background.svg') bottom center no-repeat;
    background-size: 100%;

    p {
      padding: 15px 0;
    }
  }

  #challenge, #kickoff, #end {
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
  }
</style>