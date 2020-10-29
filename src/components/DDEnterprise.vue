<template>
  <div class="study-page">
    <vue-headful
      image="/static/images/home.png"
    />
    <nav-bar />
      <div class="jumbotron port-bkg"">
        <ul class="nav-buttons">
          <li>
            <router-link id="left-arrow" to="/study/downDetector"></router-link>
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
              <h2>Downdetector Enterprise</h2>
              <p>Downdetector Enterprise allows companies to track and understand their network and/or service outages, along with the uptime information for other, similar companies in the same market.</p>
              <small class="disclaimer">I have omitted and obfuscated business sensative information in this case study. All information in this case study is my own and does not necessarily reflect the views of Ookla.</small>
            </b-container>
          </div>
        </section>
        <section class="port-section" id="challenge">
          <b-container>
            <h2>Business Goals</h2>
            <p>After Ookla acquired Downdetector, the company wanted to grow the Downdetector Enterprise offering.  The overall goals for this project were to: </p>
            <ul>
              <li>Increase overall dashboard usage</li>
              <li>Increase the number of active users</li>
              <li>Increase the time spent on the site</li>
              <li>Improve the value to the user</li>
            </ul>
            <b-row>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/dde-old-home.jpg" alt="Original Downdetector Enterprise home page"/>
                <small>Original home page where users could see all their tracked services</small>
              </b-col>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/dde-old-company.jpg" alt="Original Downdetector company status page"/>
                <small>Original company status page</small>
              </b-col>
            </b-row>
          </b-container>
        </section>
        <section class="port-section dark">
          <b-container>
            <h2>My Role</h2>
            <p>I was brought into this project in October of 2019 as the lead Product Designer. <br> I performed the <strong>User Research</strong>, helped inform the <strong>Product Strategy</strong>, and <strong>Designed the User Interface</strong>.</p>
          </b-container>
        </section>
        <section class="port-section white">
          <b-container>
            <h2>Use Cases</h2>
            <p>I conducted 7 user interviews across 6 different companies to get a good variety of industries and use cases. Most users were using Enterprise services to:</p>
         	  <ul>
              <li>Detect problems faster than their own internal monitoring.</li>
              <li>Detect external problems they can’t detect with their own internal monitoring.</li>
              <li>Validate internal problems they are already aware of, and get a general idea of the customer impact.</li>
              <li>Find some insight into what the problem might be.</li>
            </ul>
          </b-container>
        </section>
        <section class="port-section no-shadow" id="troubleshooting">
          <b-container>
            <h2>How Users Troubleshooted Problems</h2>
            <p>The problem flow represented how most users were currently using the product as well as which types of information they were using to answer these questions. </p>
            <b-img-lazy fluid src="/static/images/dde-troubleshooting.svg" alt="How users troubleshooted problems"/>
          </b-container>
        </section>
        <section class="port-section white">
          <b-container>
            <h2>Original Problems</h2>
            <ul>
              <li>All users were looking for patterns across different companies but struggled to to this quickly in the application. Instead users were using the consumer sight to look for these trends.</li>
              <li>Comments were being used heavily to find insight into the problem, however without any search of filtering capabilities this was often very tedious.</li>
              <li>Each company wanted to user alerts a bit differently, but lacked the flexibility to customize them to their needs.</li>
              <li>Since almost all users were comparing the Downdetector data with their internal data the API was more popular than the dashboard since they could integrate it into their own systems, as well as customize how they viewed it.</li>
            </ul>
            <b-img-lazy fluid src="/static/images/dde-api.jpg" alt="Screenshot of how a user was using Downdetector data with the API"/>
            <small>Screenshot of how a user was using Downdetector data with the API</small>
          </b-container>
        </section>
        <section class="port-section" id="onboarding">
          <b-container>
            <h2>Confusing Onboarding</h2>
            <p>The first time I tried out the application I was greeted with a completely blank screen. I couldn’t figure out how to add any services to even see what the application could do. I looked around for a bit and then had to ask a team member how to get started. </p>
            <p>The add services button was actually under the settings tab. That didn’t seem like the most intuitive way to add services, and after a conversation with a few people in sales I learned that this was a common issue users complained about.</p>
            <b-row>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/dde-empty.jpg" alt="First thing a user sees on first login screenshot"/>
                <small>First thing a user sees on first login</small>
              </b-col>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/dde-settings.jpg" alt="How to add services in the original application"/>
                <small>How to add services in the original application</small>
              </b-col>
            </b-row>
          </b-container>
        </section>
        <section class="port-section no-shadow white" id="original">
          <b-container>
            <h2>Original Architecture</h2>
            <p>A lot of really important functionality like alert settings, adding users, and adding services were all under the settings section. Users often missed this functionality and sales often had to show them where it was.</p>
            <p>The main service page dashboards had three different tabs which listed most of the same information, just in a slightly different way. Users were often confused as to what the benefits were of the different sections.</p>
            <b-img-lazy fluid src="/static/images/dde-old-architecture.svg" alt="Original Information Architecture"/>
          </b-container>
        </section>
        <section class="port-section no-shadow">
          <b-container>
            <h2>New Architecture</h2>
            <p>Before tackling the design I tried a different way of organizing the content. We added the API section so users could manage everything in one place. The ‘teams’ section was changed to ‘people’ since not only could admin users manage teams but they could also add users, and manage their different types of roles. ‘Events’ was changed to ‘alerts’ since alerts were more important and to clear up confusion surrounding the difference between alerts and events.</p>
            <b-img-lazy fluid src="/static/images/dde-new-architecture.svg" alt="New information architecture"/>
          </b-container>
        </section>
        <section class="port-section white" id="focus">
          <b-container>
            <h2>Creating Focus</h2>
            <p>Combining both the business goals as well as focusing on the biggest user problems I felt the focus of this project should be:</p>
            <ol>
              <li>
                <h5>More professional look and feel</h5>
                <p>Improved branding, design, and organization would give users a more professional, high quality feel.</p>
              </li>
              <li>
                <h5>Improve presentation for better pattern recognition</h5>
                <p>In no way should enterprise users feel the need to visit the free consumer site to be able to look for trends. The enterprise solution should do this better than the free option.</p>
              </li>
              <li>
                <h5>Improve data insights</h5>
                <p>This included looking at how we could improve indicators, providing the ability for users to more easily use the tweets and comments to find insights, and presenting the data in a way to help them understand the data faster.</p>
              </li>
              <li>
                <h5>Flexible alerts</h5>
                <p>Users needed to be able to set more dynamic thresholds, determine who would get alerts, and have the ability to set multiple alerts for the same company.</p>
              </li>
            </ol>
          </b-container>
        </section>
        <section class="port-section">
          <b-container>
            <h2>Dark Mode for 24hr Monitoring.</h2>
            <p>During the initial interviews many users were also putting the dashboard on monitors in their offices. Originally I designed a light version that more closely matched the consumer website. However, designing this application in dark mode would be easier to look at as well as save battery life for long periods. I A/B tested both the dark version and light version and almost everyone preferred the dark version. </p>
            <b-row>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/dde-global-light.jpg" alt="Early Downdetector dashboard light design concept"/>
                <small>Early Downdetector dashboard light design concept</small>
              </b-col>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/dde-global.jpg" alt="Early Downdetector dashboard dark design concept"/>
                <small>Early Downdetector dashboard dark design concept</small>
              </b-col>
            </b-row>
          </b-container>
        </section>
        <section class="port-section white" id="look">
          <b-container>
            <h2>1. More Professional Look and Feel</h2>
            <p>Users thought the new interface really ‘popped’ and was easier to read. Testers were able to navigate the application easily. The section names made sense to them, they were able to add, remove, edit and view services without issue.</p>
            <b-row>
              <b-col lg="6">
                <b-img-lazy fluid src="/static/images/dde-new-company.jpg" alt="New company status page"/>
                <small>New company status page</small>
              </b-col>
              <b-col lg="6">
                <b-img-lazy fluid src="/static/images/dde-new-manage-alerts.jpg" alt="Managing all custom alerts"/>
                <small>Managing all custom alerts</small>
                <b-img-lazy fluid src="/static/images/dde-new-set-alerts-sm.jpg" alt="Customizing alert settings"/>
                <small>Customizing alert settings</small>
                <b-img-lazy fluid src="/static/images/dde-new-people.jpg" alt="Managing access and user roles"/>
                <small>Managing access and user roles</small>
              </b-col>
            </b-row>
          </b-container>
        </section>
        <section class="port-section" id="info">
          <b-container>
            <h2>2. Better Pattern Recognition</h2>
            <p>I color coded the graphs based on thresholds. Problem = red, Warning = yellow, Green = ok. Very quickly users could glance at all of their services and be able to tell which ones were having problems.</p>
            <p>When users scanned for patterns they were trying to see if the problem was their service provider, an infrastructure provider, or if their competition was also having problems. So I created industry groupings users could add and then tab through to compare to their own problem spike.</p>
            <b-row>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/dde-compare1.jpg" alt="Reports over time section with custom services to compare to"/>
                <small>Reports over time section with custom services to compare to</small>
              </b-col>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/dde-compare2.jpg" alt="Ability to compare services on the same graph."/>
                <small>Ability to compare services on the same graph.</small>
              </b-col>
            </b-row>
          </b-container>
        </section>
        <section class="port-section white">
          <b-container>
            <h2>3. Improve Data Insights</h2>
            <p>I added a tree-map of the most commonly used keywords in both the tweets and comments. Users could get an idea of the most commonly used key words at a glance. They would also be able to filter the comments and tweets for that keyword by clicking on the tree-map tiles.</p>
            <p>I changed the pie charts to bar charts. Users were interested in the exact values, and bar charts made this easier to read at a glance. Also, with so many different categories the pie slices were often too small and similarly sized.</p>
            <p>On the consumer site we are still working on ways to increase user reports for more reliable indicators.</p>
            <b-row>
              <b-col md="9">
                <b-img-lazy fluid src="/static/images/dde-treemap.jpg" alt="Comments and Tweets tree-map with the ability to filter"/>
                <small>Comments and Tweets tree-map with the ability to filter</small>
              </b-col>
              <b-col md="3">
                <b-img-lazy fluid src="/static/images/dde-bar-charts.jpg" alt="Bar charts instead of pie charts"/>
                <small>Bar charts instead of pie charts</small>
              </b-col>
            </b-row>
          </b-container>
        </section>
        <section class="port-section">
          <b-container>
            <h2>4. Flexible Alerts</h2>
            <p>Users now had the ability to add multiple alerts for the same company. They could type in a specific threshold value or use the graph sliders to set thresholds that made sense in correlation with previous reporting levels. They could also send custom alerts to individuals via email or to entire teams. Creating an entire alert section made it easier for users to find this functionality than putting it in the settings section.</p>
            <b-img-lazy fluid src="/static/images/dde-new-set-alerts.jpg" alt="Customizing alerts"/>
            <small>Customizing alerts</small>
          </b-container>
        </section>
        <section class="port-section no-shadow white" id="launch">
          <b-container>
            <h2>Waiting for Launch</h2>
            <p>This project is still in development and hasn’t been launched, so unfortunately I don’t have any success metrics available yet.</p>
            <b-img-lazy fluid src="/static/images/launch.svg" alt="Rocket ship launching"/>
          </b-container>
        </section>
      </article>
    <main-footer />
  </div>
</template>
<script>
import NavBar from './NavBar'
import MainFooter from './MainFooter'
import header from '../../static/images/dd-enterprise.png'
  export default {
    name: 'dd-enterprise',
    resource: 'ddEnterprise',
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
    }
  }

  .port-button {
    text-align: center;
  }

  .port-bkg {
    width: 100%;
    height: 300px;
    background: #d7e4f3 url('../../static/images/dd-enterprise.png') no-repeat;
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
    background-image:url('../../static/images/dde-bkg.svg'), radial-gradient(circle 590px,#4b4b58 0,#23232c 70%);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: 100%;
    text-align: center;

    p {
      padding: 30px 0;
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
  #troubleshooting {
  	img {
  		max-width: 800px;
  	}
  }

  #look {
  	img {
  		margin: 20px auto;
  	}
  }

  #launch {
  	padding-bottom: 0;
  	img {
  		margin-bottom: 0;
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

  @media screen and (max-width: 1200px) {
  	#look {
	  	img {
	  		margin: 11px auto;
	  	}
	  }
  }

  @media screen and (max-width: 767px) {
    .port-section {
        .large-numbers {
        font-size: 1.8rem;
      }
    }
  }
</style>