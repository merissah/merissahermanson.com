<template>
  <div class="study-page">
    <vue-headful
      image="/static/images/home.png"
    />
    <nav-bar />
      <div class=" jumbotron port-bkg">
        <ul class="nav-buttons">
          <li>
            <router-link id="left-arrow" to="/study/ddEnterprise""></router-link>
          </li>
          <li>
            <router-link id="right-arrow" to="/study/dd-apps"></router-link>
          </li>
        </ul>
      </div>
      <article >
        <section class="port-section dark" id="background">
          <b-container>
            <h2>Cell Analytics</h2>
            <p>Cell Analytics is a detailed mapping visualization platform powered by performance, coverage and signal measurements from the Ookla® Speedtest® network testing platform.</p>
            <small class="disclaimer">I have omitted and obfuscated business sensative information in this case study. All information in this case study is my own and does not necessarily reflect the views of Ookla.</small>
          </b-container>
        </section>
        <section class="port-section" id="challenge">
          <b-container>
            <h2>Business Goals</h2>
            <p>After two acquisitions in less than two years, Ookla’s products, capabilities, and datasets had grown tremendously. This growth had also increased the number and complexity of our product offering. Some products were not being renewed at the projected rates, partially because of the number and complexity. By combining our three different products Cell Analytics, MapElements and TowerSource the company hoped to: </p>
            <ul>
              <li>Streamline the sales process by reducing the complexity of our products</li>
              <li>Reduce our development cost and free up resources by maintaining one product instead of three.</li>
              <li>Increase user engagement and value for our users</li>
              <li>Improve the user experience</li>
            </ul>
          </b-container>
        </section>
        <section class="port-section dark" id="role">
          <b-container>
            <h2>My Role</h2>
            <p>I was brought into this project in November of 2019 as the lead Product Designer. <br>I performed the User Research, helped inform the Product Strategy, and Designed the User Interface. </p>
          </b-container>
        </section>
        <section class="port-section white" id="problems">
          <b-container>
            <h2>Use Cases and Problems</h2>
            <p>Insights were gathered from 13 different user interviews/testing sessions spanning the three different products, as well as written feedback from users, feedback from sales, Google Analytics, and Freshmarketer.</p>
            <p>Our main users were network engineers for mobile networking operators. Roaming coordinators, device manufacturers, and government regulators were secondary users. They mainly used these products to:</p>
            <ul>
              <li>Optimize and improve their network</li>
              <li>Monitor the overall health of their network</li>
              <li>Trouble shoot user complaints and network issues</li>
              <li>Benchmarking to gain insight into how they compare to their competition</li>
            </ul>
            <p>Problem areas discovered from user testing, or analytics tools.</p>
            <ul>
              <li><strong>Performance</strong>. The more detailed the data the larger the performance hit. The current application had slow loading times and would sometimes crash the browser.</li>
              <li><strong>Users had a hard time finding layers </strong>. Users had a hard time adding, and removing layers. Often they weren’t aware of the all the different layers available to them or what they were.</li>
              <li><strong>Layer management</strong>. Adding mulitple layers made it hard to see what was going on, users could only change layer colors one layer at a time which could be time consuming. They had no way of removing layers they weren’t interested in.</li>
            </ul>
            <b-row>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/ca-me.jpg" alt="MapElements"/>
                <small>MapElements had better layer management and search but wasn't always easy to use. It also had a lot of unused features.</small>
              </b-col>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/ca-ts.jpg" alt="TowerSource"/>
                <small>TowerSource was mainly used to find or promote network infrastructure.</small>
              </b-col>
            </b-row>
            <b-img-lazy fluid src="/static/images/ca-vbm.jpg" alt="Original Cell Analytics"/>
            <small>The original Cell Analytics listed all available layers without a way to search or filter. Users couldn't change the order, or opacity of the  layers.</small>
          </b-container>
        </section>
        <section class="port-section no-shadow">
          <b-container>
            <h2>Organizing the Data</h2>
            <p>As I started to document and organize the different data sets in these tools, I quickly realized that this was going to be a really large collection of data. There also was no one-size fits all solution. Each data set functioned a bit differently. </p>
            <p>For example, with <strong>Measured data</strong> (crowdsourced data coming from our Speedtest app) before being able to show anything on the map the user had to select a provider and a measure type (download speed, signal strength etc.). Different layer types would also be available if the user selected 1 provider or 2+ providers. Measured data can also be filtered by date, technology, band, and indoor/outdoor. </p>
            <p>However, for <strong>Marketed Coverage data</strong> all available layers were different depending on the provider. So Verizon might have an ‘LTE/LTE A’ layer but AT&T would only have an ‘LTE’ layer. Due to the way these layers are created they also don’t have any available filters.</p>
            <small>Map Elements and TowerSource Data</small>
            <b-img-lazy fluid src="/static/images/ca-otherdata.svg" alt="TS and MapElements data flow chart"/>
            <small>Cell Analytics Data</small>
            <b-img-lazy fluid src="/static/images/ca-measured.svg" alt="Measured data flow chart"/>
          </b-container>
        </section>
        <section class="port-section white" id="focus">
          <b-container>
            <h2>Creating Focus</h2>
            <p>Keeping this tool in the same umbrella as another current Ookla product defined it’s visual language. Now that the project had a home it needed some focus. I decided to narrow my focus on what I felt were the most important aspects of this project.</p>
            <ol>
              <li>
                <h5><b>Improve Performance</b></h5><p>Most of these improvements would need to be implemented by the development team.</p>
              </li>
              <li>
                <h5>Improve search</h5>
                <p>Easily searching, filtering, adding, removing, re-ordering, and changing layer properties across many different data layers was vital to creating a great user experience.</p>
              </li>
              <li>
                <h5>Improve layer management</h5>
                <p>Layer management was already a recurring issue in two of the three products. Tripling the amount of available data layers was only going to make these issues worse.</p>
              </li>
              <li>
                <h5>Feature parity</h5>
                <p>If we expected users to be willing to switch to our new product we had to keep the functionality they were already using intact. At the same time we needed to cut out features and datasets that weren’t useful for a more streamlined experience. </p>
              </li>
            </ol>
          </b-container>
        </section>
        <section class="port-section no-shadow">
          <b-container>
            <h2>Starting at the End</h2>
            <p>With larger applications I like to work backwards. What is the desired end result, and what are the steps to get there? What does the product need to be capable of to achieve those goals? In an interface, it’s also usually a lot easier to take things out than to add functionality later down the road.</p>
            <p>The risk of only focusing on the MVP is that the interface might not be able to easily support new features without another redesign or simply putting everything new in a junk drawer like a settings section, or a hamburger menu.</p>
            <b-img-lazy fluid src="/static/images/process.svg" alt="My process"/>
          </b-container>
        </section>
        <section class="port-section white">
          <b-container>
            <h2>1. Improving Performance</h2>
            <p>Most of the improvements to the current Cell Analytics were made on the back end. The application was moved to a more performant environment. We switched to a more performant mapping platform. For Cell Analytics 2.0, we are currently in the process of building an engine that can handle more data processing.</p>
          </b-container>
        </section>
        <section class="port-section no-shadow" id="search">
          <b-container>
            <h2>2. Improving Search</h2>
            <p>Each data set had to function differently while also providing a consistent layer management experience. Users needed to be able to both search and browse. A search for repeat users saves them a lot of time when they know exactly what they are looking for, and the ability to browse shows what we have available, or gives them a starting point.</p>
            <p>Users also needed to easily see what layers were available in a particular location. They could search a particular point on the map, use the map search bar to navigate and search a particular location. Not all of the data layers were location specific, so the location search would only return results from data sets that were.</p>
            <b-img-lazy fluid src="/static/images/ca-search.svg" alt="Flow chart of improved search functionality"/>
            <h3>Layer Search</h3>
            <p>By clicking the + Layer button users can either browse layers by category or they can search by layer name. They can quickly add or remove multiple layers by using the checkboxes.</p>
            <div class="video">
              <video-temp poster="/static/images/ca-search.jpg" videosrc="/static/video/ca-search"></video-temp>
            </div>
            <small>Hover to play video</small>
            <h3>Location Search</h3>
            <p>Users can search for layers by location by either using the search bar or by dropping a point. Once the point is droped users have the option to search different boundary sets like area code, county, or a set radius.</p>
            <div class="video">
              <video-temp poster="/static/images/ca-location-search.jpg" videosrc="/static/video/ca-location-search"></video-temp>
            </div>
            <small>Hover to play video</small>
          </b-container>
        </section>
        <section class="port-section white no-shadow" id="management">
          <b-container>
            <h2>3. Improving Layer Management</h2>
            <p>For effective layer management, users really needed to be able to remove, hide/show, group, and edit multiple layers at time. When working with 20+ layers only being able to work with one layer at a time could be tedious. How would this work when dealing with different data types? How might the functionality change based on how many layers, and data types were selected? Based on the different attributes and limitations of the data I came up with a basic framework for how users could manage their map layers.</p>
            <b-img-lazy fluid src="/static/images/ca-management.svg" alt="Flow chart of improved layer management"/>
            <h3>1 Layer Selected</h3>
            <p>By clicking on each layer users have the ability to duplicate, hide, or remove that layer. It also opens a panel that shows data filters or information, as well as a style tab where users can change what the layer looks like.</p>
            <div class="video">
              <video-temp poster="/static/images/ca-layer.jpg" videosrc="/static/video/ca-layer"></video-temp>
            </div>
            <small>Hover to play video</small>
            <h3>2+ Layers Selected</h3>
            <p>By selecting multiple layers in addition to being able to duplicate, hide, or remove, they would also be able to group layers. By grouping layers users could change the style, or edit filters across many different layers at the same time, as long as they were the same data type.</p>
            <div class="video">
              <video-temp poster="/static/images/ca-layers.jpg" videosrc="/static/video/ca-layers"></video-temp>
            </div>
            <small>Hover to play video</small>
          </b-container>
        </section>
        <section class="port-section" id="management">
          <b-container>
            <h2>4. Feature Parity</h2>
            <p>In order for users to feel comfortable moving to a new tool from MapElements and TowerSource, Cell Analytics had to have the same functionality users found useful in those same platforms. With Google Analytics and Freshmarketer we were able to see which features and data sets were most commonly used. Some of these tools included:</p>
            <ul>
              <li>Analyzing elevation</li>
              <li>Different base map styles</li>
              <li>Inspecting a layer</li>
            </ul>
            <b-row>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/ca-elevation.jpg" alt="Analyzing elevation along two points."/>
                <small>Analyzing elevation along two points was a valuable feature from TowerSource.</small>
              </b-col>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/ca-satellite.jpg" alt="Satellite base map option"/>
                <small>Satellite base map option</small>
              </b-col>
            </b-row>
            <b-img-lazy fluid src="/static/images/ca-inspect.jpg" alt="Original Cell Analytics"/>
            <small>Inspecting points against coverage layers was a valuable feature from MapElements.</small>
          </b-container>
        </section>
        <section class="port-section white" id="management">
          <b-container>
            <h2>Testing Results</h2>
            <p>After many iterations the last round of testing was much better than previous versions. Users were able to easily browse through the different data categories. Searching to the exact layer they wanted saved them a lot of time. Being able to group and edit multiple layers at the same made their analysis more efficient. Many of the user comments were really encouraging:</p>
            <h5 class="quotes">‘Overall a very impressive composition of a lot of information.’</h5>
            <h5 class="quotes">‘It looks cleaner than a lot of other applications I’ve used.’</h5>
            <h5 class="quotes">‘It’s so customizable, which is nice.’</h5>
          </b-container>
        </section>
        <section class="port-section no-shadow" id="launch">
          <b-container>
            <h2>Waiting for Launch</h2>
            <p>Since this product hasn't been launched yet and is still in development it's considered business sensitive. The rest of this case study and the prototype can be shared upon request.</p>
            <b-img-lazy fluid src="/static/images/launch.svg" alt=""/>
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
  name: 'cell-analytics',
  resource: 'cellAnalytics',
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

  .no-shadow {
    img {
      box-shadow: none;
    }
  }

  .port-button {
    text-align: center;
  }

  .port-bkg {
    width: 100%;
    height: 300px;
    background: url('../../static/images/ca.png') center top 80px no-repeat;
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
    padding-bottom: 12%;
    background: #26273B url('../../static/images/ca-background.jpg') bottom center no-repeat;

    p {
      padding: 15px 0;
    }
  }

 video {
    max-width:1080px;
    width:100%;
    margin:30px 0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
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

  h5.quotes {
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