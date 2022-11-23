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
            <h2>Speedtest Intelligence</h2>
            <p>Speedtest Intelligence was created to give up-to-date insights into global fixed broadband and mobile performance data based on millions of consumer-initiated tests taken every day with Speedtest.</p>
            <small class="disclaimer">I have omitted and obfuscated business sensative information in this case study. All information in this case study is my own and does not necessarily reflect the views of Ookla.</small>
          </b-container>
        </section>
        <section class="port-section no-shadow" id="challenge">
          <b-container>
            <h2>Business Goals</h2>
            <p>The catalyst for this redesign was an especially large client threatening to leave for our competition. According to the sales and product, customers would complain that it was too hard to use, hard to get started, and took too long to gather the insights they were looking for. With the redesign the company hoped to:</p>
            <ul>
              <li>Launch a redesign quickly in order to retain our large client.</li>
              <li>Increase user engagement</li>
              <li>Increase sales</li>
              <li>Reduce engineering cost by creating a more flexible backend so updates could be made much faster.</li>
            </ul>
            <b-img-lazy fluid src="/static/images/sti-challenge.png" alt="Screenshots of the original Speedtest Intelligence Application"/>
          </b-container>
        </section>
        <section class="port-section dark" id="role">
          <b-container>
            <h2>My Role</h2>
            <p>Starting in October 2018 I lead an ambitious redesign of the Speedtest Intelligience platform. I was the sole Product Designer. I ran the various rounds of user interviews, and user testing, then used those insights throughout the process to inform my design. I worked very closely with the Project Manager and Software Engineers. I also assisted the Engineers with some CSS work.</p>
          </b-container>
        </section>
        <section class="port-section white" id="kickoff">
          <b-container>
            <h2>Original User Flow</h2>
            <p>In the original application, users would start on the home screen and use a global search that would then return one result. From there, they could compare another item one at a time using a modal. The compare section was added as a secondary feature and didn't inclued all of the functionality the single result pages did.</p>
            <b-row>
              <b-col lg="7">
                <div class="video">
                  <video-temp videosrc="/static/video/old-si"></video-temp>
                </div>
                <small>Hover to play video</small>`
              </b-col>
              <b-col lg="5 no-shadow">
                <b-img-lazy fluid src="/static/images/sti-flow1.svg" alt="Flow chart of the original Speedtest Intelligence"/>
              </b-col>
            </b-row>
          </b-container>
        </section>
        <section class="port-section" id="discovery">
          <b-container>
            <h2>Research</h2>
            <p>Insights were gathered from three different user interviews and user analytic tools, Google Analytics, and Freshmarketer.</p>
            <h3>What Users Were Doing</h3>
            <p>Google analytics clearly showed the compare section was the most visited page. Users wanted to know how their network compared to their competition. Network companies have accurate detailed information about their own network, but no insight into their competitors. This was the most valuable part for users and yet it was built as a secondary feature. Watching dozens of recorded sessions in Freshmarketer I noticed a number of problems with how users were able to compare:</p>
            <ul>
              <li>Adding compare items one at a time was time consuming.</li>
              <li>Users made a lot of errors because the modal blocked their compare items.</li>
              <li>Users scrolled up and down a lot because their legend was all the way at the top.</li>
              <li>Certain features like the map weren't available when comparing items.</li>
            </ul>
            <b-row>
              <b-col md="4 no-shadow">
                <b-img-lazy fluid src="/static/images/si-analytics.svg" alt="Pie chart showing compare was the most visited page."/>
                <small>Compare had the highest percentage of page views.</small>
              </b-col>
              <b-col md="8">
                <b-img-lazy fluid src="/static/images/sti-compare1.jpg" alt="Screenshot of the original Speedtest Intelligence compare funtionality"/>
                <small>Original compare funtionality</small>
              </b-col>
            </b-row>
            <h3>What Users Really Wanted</h3>
            <p>Talking with users I learned they weren’t spending much time using the product. Instead, they would create their own visualizations with tools like Tableau or Microsoft Bi using our data extracts. Overall, Speedtest Intelligence lacked the flexibility to view the data in ways that were useful for them. </p>
            <b-img-lazy fluid src="/static/images/sti-graphs.jpg" alt="Examples of how customers were visualizing the data in other applications"/>
            <small>How customers were analyzing the data in other applications</small>
          </b-container>
        </section>
        <section class="port-section white no-shadow" id="reframing">
          <b-container>
            <h2>Working Backwards</h2>
            <p>We had to deliver real progress quickly or risk losing a major customer to our competition. Our end goal was a product where users could customize their graphs and dashboards however they wanted. After a few conversations with our developers we realized this wasn’t something we could deliver in a short amount of time. </p>
            <p>I had to work backwards, stripping out the large level efforts we wouldn't be able to build while still providing something valuable, and also taking a step towards our ultimate goal. I stripped out all of the customization and decided to focus on an improved layout that made comparison the main focus.</p>
            <b-img-lazy fluid src="/static/images/sti-backwards.svg" alt="Working backwards from the end goal to MVP"/>
          </b-container>
        </section>
        <section class="port-section" id="focus">
          <b-container>
            <h2>Creating Focus</h2>
            <p>After going back over all of our research we decided to focus on three main areas for the redesign:</p>
            <ol>
              <li>
                <h5>Comparison should be the focus</h5>
                <p>Customers value our product largely for the competitive information it provides since this data is difficult or impossible to get elsewhere. Improving the comparison experience and making it the main focus instead of just a side note, would bring the largest single improvement to our users.</p>
              </li>
              <li>
                <h5>Improve Layout</h5>
                <p>Users shouldn't have to scroll all over the page to understand the graphs, or compare different metrics to find insights.</p>
              </li>
              <li>
                <h5>Flexible Architecture</h5>
                <p>Before building out our new vision of the product we needed to work on removing a lot of the roadblocks that had been slowing development in the past. Our flexible product also needed flexible architecture to support it. Taking the time to clean up the old code base first would save us a lot more time in the future. </p>
              </li>
            </ol>
          </b-container>
        </section>
        <section class="port-section white no-shadow" id="end">
          <b-container>
            <h2>New User Flow</h2>
            <p>Comparing providers, location, and devices should be the main focus and not a secondary feature. Instead of using a complicated flow where different filters and options appeared based on their search criteria, I wanted to simplify the interaction and make it more predictable. So I created four dashboards that contained similar types of information and filter options. They would be accessible from the home page and provider compare would be the default, since that was the most common use case.</p>
            <b-img-lazy fluid src="/static/images/sti-flow2.svg" alt="Flow chart of the original Speedtest Intelligence"/>
          </b-container>
        </section>
        <section class="port-section" id="compare">
          <b-container>
            <h2>Improving How Users Compare</h2>
            <p>Our new dashboards went through numerous iterations, most of the focus being on the compare functionality. The first version included a multiple select for providers, then a single select for all of the other filters. </p>
            <p>However, this left out use cases comparing devices, or locations. Next, I tried having a toggle between comparing providers, devices, or locations. After testing we realized the toggle didn’t fit the user's mental model. They struggled to find it, when they did it took them awhile to figure out how it would work. Users didn’t find this method flexible enough or intuitive. They wanted to be able to compare providers and then break them out by device or location. </p>
            <p>During testing, I noticed when I asked users how they might compare devices or locations, they looked in the single select dropdowns. They expected to be able to select multiple devices or locations the same way they could with providers. So I changed the filter interaction to reflect how users were already thinking about it.</p>
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
            <p>Testing revealed that this solution was indeed better than any of the others we had come up with. Users were able to compare things more intuitively and much faster than they were able to do before. I maintained the original flexibilty while also reducing mistakes, and increasing speed.</p>
            <b-row>
              <b-col>
                <div class="video">
                  <video-temp videosrc="/static/video/sti-result"></video-temp>
                </div>
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
            <p>The team was able to meet the deadline. We received a lot of positive feedback from users, as well as retaining those clients that had threatened to leave for a different product.</p>
            <h5 class="quotes">“I used to have 20 different saved reports, after the redesign I deleted all of them. The new dashboard does it all”</h5>
            <h5 class="quotes">“A major upgrade from the original.”</h5>
            <h5 class="quotes">“Much more intuitive than before”</h5>
            <b-row>
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
import VideoTemp from './VideoTemp'
export default {
  name: 'intelligence',
  resource: 'Intelligence',
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

  .disclaimer {
    margin-bottom: 30px;
  }

  small {
    font-style: italic;
    display: block;
    margin: auto;
  }

  video {
    max-width:1080px;
    width:100%;
    margin:30px 0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }

  #background {
    padding-bottom: 18%;
    background: #26273B url('../../static/images/sti-background.svg') bottom center no-repeat;
    background-size: 100%;

    p {
      padding: 15px 0;
    }
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
  }
</style>