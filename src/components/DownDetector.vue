<template>
  <div class="study-page">
    <vue-headful
      image="/static/images/home.png"
    />
    <nav-bar />
      <div class="jumbotron port-bkg"">
        <ul class="nav-buttons">
          <li>
            <router-link id="left-arrow" to="/study/speedtestIntelligence"></router-link>
          </li>
          <li>
            <router-link id="right-arrow" to="/study/cellAnalytics"></router-link>
          </li>
        </ul>
      </div>
      <article >
        <section class="port-section dark" id="background">
          <div class="gradient">
            <b-container>
              <h2>Downdetector</h2>
              <p>Downdetector® offers real-time status and outage information for all kinds of services that users consider vital to their everyday lives and work. Downdetecor was acquired by Ookla in August 2018.</p>
              <small class="disclaimer">I have omitted and obfuscated business sensative information in this case study. All information in this case study is my own and does not necessarily reflect the views of Ookla.</small>
              <b-button variant="secondary inverse" target="_blank" href="https://ookla.invisionapp.com/share/G7YBYYFSBKM">
                  Desktop Prototype
              </b-button>
              <b-button variant="secondary inverse" target="_blank" href="https://ookla.invisionapp.com/share/P5YBYX2ZCWA">
                  Mobile Prototype
              </b-button>
              <b-button target="_blank" href="https://downdetector.com" variant="primary inverse">
                  Website
              </b-button>
            </b-container>
          </div>
        </section>
        <section class="port-section" id="challenge">
          <b-container>
            <h2>The Challenge</h2>
            <p>After acquiring Downdetector Ookla wanted to improve the look and feel of the website. The initial goals were to give it a more professional look as well as improve the overall user experience. One of the most valuable aspects of Downdetector was it’s SEO ranking. When users searched for ‘Is Comcast down’ Downdetector would usually be the top result. Whatever we decided to do to improve the website could not negatively impact the SEO and ideally we would find ways to improve it. Being a free service, Downdetector recieved revenue from ads. This was also something that could not be negatively impacted from the redesign.</p>
            <ul>
              <li>Fully understand the business’s goals for the redesign</li>
              <li>Collect background information from the team about the product, what they felt the main issues were and why certain decisions were made.</li>
              <li>Conduct user interviews to see how users were currently using the website and where it could be improved.</li>
            </ul>
            <b-row>
              <b-col cols="6" md="3">
                <b-img-lazy fluid src="/static/images/dd-mobile1.png" alt="Original mobile Downdetector home page"/>
              </b-col>
              <b-col cols="6" md="3">
                <b-img-lazy fluid src="/static/images/dd-mobile2.png" alt="Original mobile Downdetector status page with problem"/>
              </b-col>
              <b-col cols="6" md="3">
                <b-img-lazy fluid src="/static/images/dd-mobile3.png" alt="Original mobile Downdetector status page possible problem"/>
              </b-col>
              <b-col cols="6" md="3">
                <b-img-lazy fluid src="/static/images/dd-mobile4.png" alt="Original mobile Downdetector status page no problem"/>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/dd-desktop1.png" alt="Original desktop Downdetector home page"/>
              </b-col>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/dd-desktop2.png" alt="Original desktop Downdetector status page with problem"/>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/dd-desktop3.png" alt="Original desktop Downdetector status page possible problem"/>
              </b-col>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/dd-desktop4.png" alt="Original desktop Downdetector status page no problem"/>
              </b-col>
            </b-row>
          </b-container>
        </section>
        <section class="port-section dark">
          <b-container>
            <h2>My Role</h2>
            <p>Starting in March 2019 I lead a redesign of the Downdetector website. I ran the various rounds of user interviews, and user testing, then used those insights throughout the process to inform my design. I worked very closely with the Project Manager, Software Engineers and the Branding Designer. Most decisions were made collectively by me and the Project Manager. </p>
          </b-container>
        </section>
        <section class="port-section white no-shadow" id="kickoff">
          <b-container>
            <h2>Kickoff</h2>
            <p>First impression of the site was that it indeed lacked a professional look and feel. The logo took up a lot of vertical space and wasn’t in the traditional location users are used to. The home page didn’t give much of a description as to what the site was. Did users use the tiles to navigate to the status pages or did they search? The status pages were very busy. It was difficult to know where to look first. How easily were users able to figure out if there was a problem or not? What exactly did the graph represent? Was everything on the page really necessary? Other sections of the website like Companies or Problems seemed redundant, were they actually useful?</p>
            <p>Meeting with the original team helped answer a lot of questions I had after going through the website. Many of the redundant pages, choice of copy, or seemingly unneeded elements were there for SEO purposes. The website was built with Bootstrap by a developer and there wasn’t much time or attention put into design and branding. Their focus for improvement was focused on improving SEO, add revenue, and improving development infrastructure. </p>
            <p>Before working on any solutions it was important to fully understand what I was working with. I created a sitemap of the current website to keep track of the current information architecture and keep everyone on the same page</p>
            <h5>Original Site User Flow</h5>
            <b-img-lazy fluid src="/static/images/dd-flow1.svg" alt="Original website user flow"/>
          </b-container>
        </section>
        <section class="port-section" id="discovery">
          <b-container>
            <h2>The Discovery</h2>
            <p>Insights were gathered from four different user interviews and user analytic tools, Google Analytics, and Freshmarketer.</p>
            <h3>User Testing</h3>
            <p>Users' first impressions of the site were that it looked busy and not very professional. Starting on the home page, most users said they would use the search to find the company they were looking for, but actually used the tiles.</p>
            <p>On the status page users usually looked at the graph first, then the map, then the comments at the bottom of the page. 3 out of 4 people missed the red banner at the top indicating that there was a problem. All users were able to figure out that there was a problem, however it usually took them a minute to figure it out.</p>
            <p>When reporting a problem some of the options were a bit confusing. Users also expressed wanting to select more than one problem at a time but they only had the option of selecting one.</p>
            <b-row>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/dd-problem.png" alt="Original desktop Downdetector status page possible problem"/>
              </b-col>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/dd-report.png" alt="Original desktop Downdetector status page no problem"/>
              </b-col>
            </b-row>
            <small>Left: Status page during a current problem. Right: report a problem modal.</small>
            <h3>Google Analytics</h3>
            <p>Google Analytics revealed that only about 10% of users even saw the home page. Users would organically search directly to the status pages with phrases like ‘Is Comcast down’, ‘Is Facebook down’. Most of the site’s traffic came from mobile devices, yet the previous focus had been on desktop and mobile had been mostly an afterthought.</p>
            <b-row class="no-shadow center">
              <b-col md="4">
                <h5>Page Breakdown</h5>
                <b-img-lazy fluid src="/static/images/dd-pie-status.svg" alt="Page breakdown pie chart. Status page most visited at 84.3%"/>
              </b-col>
              <b-col md="4">
                <h5>Top Channels</h5>
                <b-img-lazy fluid src="/static/images/dd-pie-channels.svg" alt="Top channels pie chart. Organic search most used channel at 86.5%"/>
              </b-col>
              <b-col md="4">
                <h5>Sessions by Device</h5>
                <b-img-lazy fluid src="/static/images/dd-pie-devices.svg" alt="Sessions by device pie chart. Mobile most used device at 65.7%"/>
              </b-col>
            </b-row>
            <h3>Freshmarketer</h3>
            <p>Heat Maps helped verify at scale some of the same trends I learned through user testing. On the status pages the report a problem button had the most amount of clicks, followed by the map and then the graph. On the homepage Downdetector actually did a really great job of putting the top problem companies at the top. Out of the small percentage of users that did visit the home page most clicked on the tiles to navigate to the status page. Search clicks were forth, compared to the top 3 tiles on the page. </p>
            <b-row>
              <b-col cols="6" md="3">
                <b-img-lazy fluid src="/static/images/dd-heatmap1.png" alt="Heatmap"/>
              </b-col>
              <b-col cols="6" md="3">
                <b-img-lazy fluid src="/static/images/dd-heatmap2.png" alt="Heatmap"/>
              </b-col>
              <b-col cols="6" md="3">
                <b-img-lazy fluid src="/static/images/dd-heatmap3.png" alt="Heatmap"/>
              </b-col>
              <b-col cols="6" md="3">
                <b-img-lazy fluid src="/static/images/dd-heatmap4.png" alt="Heatmap"/>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/dd-heatmap5.png" alt="Heatmap"/>
              </b-col>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/dd-heatmap6.png" alt="Heatmap"/>
              </b-col>
            </b-row>
            <small>Freshmarketer Heatmaps</small>
          </b-container>
        </section>
        <section class="port-section white">
          <b-container>
            <h2>Reframing the Problem</h2>
            <p>Since SEO was so important for this project the team decided to hire an SEO consultant. The consultant would both analyze the current site to make recommendations, as well as review any design changes we planned to make.</p>
            <p>To further ease concerns, it was decided that the new design would be implemented in a gradual, agile fashion. That way it would be easier to adjust the design if there were any unforeseen negative impacts on the site. </p>
            <b-row>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/dd-wireframe1.png" alt="Wireframes"/>
              </b-col>
              <b-col cols="6" md="3">
                <b-img-lazy fluid src="/static/images/dd-wireframe2.png" alt="Wireframes"/>
              </b-col>
              <b-col cols="6" md="3">
                <b-img-lazy fluid src="/static/images/dd-wireframe3.png" alt="Wireframes"/>
              </b-col>
            </b-row>
            <small>Early Wireframes</small>
          </b-container>
        </section>
        <section class="port-section" id="focus">
          <b-container>
            <h2>Creating Focus</h2>
            <p>After going back over all of our research we decided to focus on four main areas for the redesign:</p>
            <ol>
              <li>
                <h5>More Professional Look and Feel</h5>
                <p>Improved branding and design would give users a more professional, high quality feel. </p>
              </li>
              <li>
                <h5>Improving Clarity</h5>
                <p>Users weren’t able to determine if there was a problem quickly or with confidence. The lack of visual hierarchy and consistency made users work harder than necessary to find what they were looking for. </p>
              </li>
              <li>
                <h5>Improve Mobile Experience</h5>
                <p>Element sizing, unnecessary scrolling, not being able to scroll down the page when viewing the map page, were some of the items that needed to be addressed to improve the mobile experience. </p>
              </li>
              <li>
                <h5>Maintain or Improve SEO and Advertising</h5>
                <p>Everything we did had to be reviewed by our SEO consultant. Compromises or creative solutions might have to be implemented to make sure SEO and advertising weren’t negatively affected. </p>
              </li>
            </ol>
          </b-container>
        </section>
        <section class="port-section white no-shadow" id="info">
          <b-container>
            <h2>Information Architecture</h2>
            <p>The companies and problems sections on the main nav were created mainly for SEO. Not only did they get very little traffic our SEO consultant discovered they weren’t actually helping SEO all that much. The Top 10 section was created as potentially something interesting to do with the data, but again it didn’t get much traffic. The footer only had a few links, and was so far down the page rarely anyone would actually see it. </p>
            <p>The new organizational structure below did two main things:</p>
            <ol>
              <li>Simplified, and clarified the main navigational options. Other sections that needed to exist for SEO or very rare use cases were moved to the footer. </li>
              <li>Improve SEO</li>
            </ol>
            <b-img-lazy fluid src="/static/images/dd-flow2.svg" alt="New user flow for the Downdetector redesign"/>
          </b-container>
        </section class="port-section">
        <section class="port-section no-shadow">
          <b-container>
            <h2>Branding</h2>
            <p>With my current workload at the time, I didn’t have the bandwidth to give the Downdetector branding the attention it needed. I decided to bring in another designer who had more branding experience and was really excited to work on the project.</p>
            <p>What worked with the original branding:</p>
            <ul>
              <li>Red alert mark was memorable and scalable </li>
              <li>Placement of the red mark was unique</li>
              <li>Great name, and effective for a downed or interrupted service</li>
            </ul>
            <p>What could be improved:</p>
            <ul>
              <li>Inconsistent usage across site, app stores, and social media. Also a different logo was used for every domain extension.</li>
              <li>Alert bubble was very generic and could run into trademark problems. </li>
              <li>Color usage was inconsistent, font choice was also pretty generic. </li>
            </ul>
              <b-row>
                <b-col>
                   <b-img-lazy fluid src="/static/images/dd-branding-old.svg" alt="Original Downdetector branding"/>
                </b-col>
                <b-col>
                   <b-img-lazy fluid src="/static/images/dd-branding-new.svg" alt="New Downdetector branding"/>
                </b-col>
              </b-row>
              <p>The branding updates gave the brand a more professional and polished look while still being recognizable by current users. With some of the changes to the Downdetector red mark we were also able to incorporate it throughout the site. Now the mark is used as a scarlet letter, added to the end of the company's logo, when they are currently having issues. Not only does this make it even easier for users to recognize quickly that the service is indeed having problems but it also helps users associate that outage with the Downdetector brand. </p>
            </ul>
          </b-container>
        </section>
        <section class="port-section white">
          <b-container>
            <h2>Bringing it all Together</h2>
            <p>After many iterations, and more user feedback the team agreed on a final design. </p>
            <ol>
              <li>
                <h5>More Professional Look and Feel</h5>
                <p>Branding typography, color, and consistency were improved across all domains as well as Downdetector’s respective social media platforms. More consistent user patterns, like having the logo in the top left corner of the navigation bar, were implemented to provide a more consistent experience to what users expect from a professional site. Visual clutter was reduced as much as possible.</p>
              </li>
              <li>
                <h5>Improving Clarity</h5>
                <p>Visual hierarchy, spacing, sizing, and typography were improved to draw the users eye to the most important information first. A descriptive title and subtitle were added to the home page to clarify what the site was and how it could benefit them. Messaging was added to the graph baseline, and other various graphs to better explain what they were. Problems, possible problems, and no problems labeling was made larger and more prominent. The graphs were also color coordinated to further communicate to users if their service was having problems or not.</p>
              </li>
              <li>
                <h5>Improve Mobile Experience</h5>
                <p>The navigation bar was fixed to the top so users wouldn’t have to scroll all the way back up to search or navigate to a new page. Search was taken out of the hamburger menu and made more accessible to users. Scrolling issues were addressed, spacing and sizing was improved.    </p>
              </li>
              <li>
                <h5>Maintain or Improve SEO and Advertising</h5>
                <p>Some design compromises were made to ensure SEO was not impacted. The company descriptions on the page had to stay even though they provided no real benefit to the user. Instead they were made smaller, lighter, and condensed so the long descriptions didn’t get in the way of the important content. </p>
              </li>
            </ol>
            <b-row>
              <b-col cols="6" md="3">
                <b-img-lazy fluid src="/static/images/dd-final1.png" alt="Final Downdetector home page"/>
              </b-col>
              <b-col cols="6" md="3">
                <b-img-lazy fluid src="/static/images/dd-final2.png" alt="Final Downdetector status page with problem"/>
              </b-col>
              <b-col cols="6" md="3">
                <b-img-lazy fluid src="/static/images/dd-final3.png" alt="Final Downdetector status page possible problem"/>
              </b-col>
              <b-col cols="6" md="3">
                <b-img-lazy fluid src="/static/images/dd-final4.png" alt="Final Downdetector status page no problem"/>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/dd-final5.png" alt="Final Downdetector home page"/>
              </b-col>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/dd-final6.png" alt="Final Downdetector status page with problem"/>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/dd-final7.png" alt="Final Downdetector status page possible problem"/>
              </b-col>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/dd-final8.png" alt="Final Downdetector status page no problem"/>
              </b-col>
            </b-row>
          </b-container>
        </section>
        <section class="port-section" id="results">
          <b-container>
            <h2>The Results</h2>
            <p>Due to SEO concerns, and a previously bad redesign experience with another designer in the team’s past, they wanted to take it slow. The redesign was developed in steps over about a 5 month period. The branding was implemented first along with the header and footer, then the color scheme and button style, then certain graph types, etc. </p>
            <p>SEO and Ad revenue were not negatively impacted, in fact both were improved. We received a lot of positive feedback on the look and feel from users. Smaller improvements to the site are ongoing. </p>
            <h5 class="quotes">“This is really nice looking. I like this. Everything is easier to look at”.</h5>
            <h5 class="quotes">“I like the colors, the old site didn’t look bad but this looks much cleaner.”</h5>
            <h5 class="quotes">“It looks a lot better, more professional.”</h5>
            <b-row>
              <b-col>
                <div class="large-numbers">+91%</div>
                <h5>Problem Reporting</h5>
              </b-col>
              <b-col>
                <div class="large-numbers">+20%</div>
                <h5>New Users</h5>
              </b-col>
              <b-col>
                <div class="large-numbers">+25%</div>
                <h5>Pageviews</h5>
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
import header from '../../static/images/dd.png'
  export default {
    name: 'down-detector',
    resource: 'DownDetector',
    components: { NavBar, MainFooter},
    data() {
      return {
        header,
        background
      }
    }
  }
</script>
<style lang="scss" scoped>

  h3 {
    padding-bottom: 0px;
  }

  h2, h3, p, ol, ul {
    text-align: left;
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
    background: #d7e4f3 url('../../static/images/dd.png') no-repeat;
    background-position: center top 80px;
    background-attachment: fixed;
    margin-bottom: 0;
    text-align: center;
  }

  .dark {
    color: #D7DDE0;
    text-align: center;
    background-color: #23232C;

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
    padding-bottom: 12%;
    background-image:url('../../static/images/dd-background.svg'), radial-gradient(circle 590px,#4b4b58 0,#23232c 70%);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: 100%;
    text-align: center;

    p {
      padding-bottom: 30px;
    }
  }

 .no-shadow {
    img {
      box-shadow: none;
    }
  }

  .disclaimer {
    margin-bottom: 30px;
  }

  .center h3, .col {
    text-align: center;
  }

  #kickoff h5, #discovery h5 {
    padding-top: 30px;
  }

  #kickoff img, #info img {
    max-width: 900px;
    width: 100%;
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