<template>
  <div class="study-page">
    <vue-headful
      image="/static/images/home.png"
    />
    <nav-bar />
      <div class=" jumbotron port-bkg">
        <ul class="nav-buttons">
          <li>
            <router-link id="left-arrow" to="/study/downDetector"></router-link>
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
            <h2>The Challenge</h2>
            <p>After two acquisitions in less than two years, Ookla’s products, capabilities, and datasets had grown tremendously. This growth had also increased the number and complexity of our product offering. Some products were not being renewed at the projected rates, partially because of the number and complexity.</p>
            <p>Our more technical users didn’t have a complete, clear picture about how their network specifically compares with their competitors. If our users wanted a more complete picture, accessing all of our data sets would have meant purchasing and using at least 3 different products. Maintaining three different products, with three different code bases, and some redundant functionality was also not an efficient use of our development team’s time.</p>
            <p>Based on this information the team decided to not only expand the current capabilities of the recently acquired Virtual Benchmarking (VBM) tool (recently renamed to Cell Analytics), but to also leverage the MapElements and TowerSource product capabilities into one robust mapping tool. Before tackling this massive project I first had to have a thorough understanding of each tool, their strengths, weaknesses, and how they could overlap each other.</p>
            <p>Fortunately, I had already worked on all three products in the past. This gave me a tremendous head start, since I already had a pool of user testing videos and notes for each product. My main research goals for this project were to: </p>
            <ul>
              <li>Map out all data sets currently planned to be available in the product, along with their limitations, filter options, or any other relevant information.</li>
              <li>Review all past user interviews and testing done for all three products.</li>
              <li>Research other mapping tools with large data sets for inspiration.</li>
              <li>Clearly define the most important aspects of the project.</li>
            </ul>
            <b-img-lazy fluid src="/static/images/ca-challenge.png" alt="Screenshots of the original Speedtest Intelligence Application"/>
          </b-container>
        </section>
        <section class="port-section dark" id="role">
          <b-container>
            <h2>My Role</h2>
            <p>I was the lead Product Designer for the project. A visual designer provided the icons and some of the empty state imagery. I worked very closely with the Project Managers and Software Engineers. Most decisions were made collectively by me and the Project Managers. </p>
          </b-container>
        </section>
        <section class="port-section white" id="kickoff">
          <b-container>
            <h2>Kickoff</h2>
            <p>As I started to document and organize the different data sets in these tools, I quickly realized that this was going to be a really large collection of data. There also was no one-size fits all solution. Each data set functioned a bit differently.</p>
            <p>For example, with <b>Measured data</b> (crowdsourced data coming from our Speedtest app) before being able to show anything on the map the user had to select a provider and a measure type (download speed, signal strength etc.). Different layer types would also be available if the user selected 1 provider or 2+ providers. Measured data can also be filtered by date, technology, band, and indoor/outdoor.</p>
            <p>However, for <b>Marketed Coverage</b> data all available layers were different depending on the provider. So Verizon might have an ‘LTE/LTE A’ layer but AT&T would only have an ‘LTE’ layer. Due to the way these layers are created they also don’t have any available filters.</p>
            <small>Map Elements & TowerSource data</small>
            <b-img-lazy fluid src="/static/images/ca-otherdata.svg" alt="TS and MapElements data flow chart"/>
            <small>VBM (Cell Analytics)</small>
            <b-img-lazy fluid src="/static/images/ca-measured.svg" alt="Measured data flow chart"/>
          </b-container>
        </section>
        <section class="port-section" id="discovery">
          <b-container>
            <h2>Discovery</h2>
            <p>Insights were gathered from 13 different user interviews/testing sessions spanning the three different products, as well as written feedback from users, feedback from sales, Google Analytics, and Freshmarketer.</p>
            <h3>Virtual Benchmarking (VBM)</h3>
            <p>The VBM tool summed up is a detailed, granular mapping visualizations tool with real-world measurements, where consumers are actually connecting to networks — on streets, inside vehicles, at home, and at work. With these detailed views, users were able to:</p>
            <ul>
              <li><b>Monitor the overall health of their network</b></li>
              <li><b>Trouble shoot user complaints</b>, including border roaming, line of sight, and optimization issues. </li>
              <li><b>Understand the location of towers/cells</b> so that they can build out their wireless infrastructure as effectively and efficiently as possible.</li>
              <li><b>Benchmark</b> Users can gain insight into how they compare to their competition, and how that could affect where they want to invest in improving their network.</li>
            </ul>
            <p>Going back through my previous user research, there was a long list of feature requests to sift through. However, three main issues kept coming up over and over again.</p>
            <ul>
              <li><b>Performance</b>The more detailed the data the larger the performance hit. The farther out the zoom the longer it would take to load the data layer. Zooming out too far or adding too many layers would on occasion crash the browser.</li>
              <li><b>Layer management</b> Every different measure type or provider combination available was listed in the left panel in a very long list. This made finding the layer the user was looking for time consuming, and easy to lose. Users also wanted the ability to reorder layers, change the opacity, change the colors, and easily favorite or save their most commonly used layers.</li>
              <li><b>Custom polygon analysis</b> This feature seems to be requested in almost every product. Users want to be able to see distributions, aggregates, and overall more detailed analysis of specific and often custom areas.</li>
            </ul>
            <b-img-lazy fluid src="/static/images/ca-vbm.jpg" alt="Screenshot of the vbm application"/>
            <small>VBM (Recently re-named to Cellanalytics)</small>
            <h3>MapElements</h3>
            <p>You know those coverage maps providers like Verizon and AT&T used prominently in their commercials to entice you to switch to their service? Those are the types of data layers in MapElements. With over 1,500 networks from over 900 operators spanning across 225 countries it’s currently the largest coverage database in the world. Users mainly use the application to: </p>
            <ul>
              <li><b>Optimize their roaming networks</b>Users can compare the MapElements coverage patterns to their Prefered Roaming Lists to choose which networks they should partner with for the best coverage, for the best price.</li>
              <li><b>Troubleshoot network issues</b> Users mainly check if the area is supposed to have coverage. If so, they pass on the complaint to their engineers. </li>
              <li><b>Optimize their IoT network</b> Users compare which networks best cover their IoT equipment (farm equipment, vending machines etc.) as well as optimizing cost.</li>
              <li><b>Track how networks are changing over time</b>This is mostly used by people working with the government to inform them of things like how much of the population is covered and if networks are continually improving in rural areas.</li>
            </ul>
            <p>I had a lot of user research to review for MapElements as well. Reviewing Google Analytics and Freshmarketer revealed that there were a lot of datasets and features that weren’t being utilized. After talking with users, most were aware of these datasets and features, they just weren’t very useful for them. Based on this, we decided to only keep the most commonly used datasets (Listed in the above flow chart) and features. The high level features that were most valued and also had the most room for improvement:</p>
            <ul>
              <li><b>Layer management</b> Unlike the VBM tool where all available layers are listed in the left panel, MapElements users had to search to add their layers to the left panel. Users would usually have around 10-20 layers in the left panel at a time and use the checkboxes to toggle them on/off. They were able to change the opacity, colors, and layer order. However, with so many layers adding, deleting, or keeping the colors consistent across providers could be very tedious.</li>
              <li><b>Custom layer inspection</b> Uploading their own custom point files, and then running them against a list of coverage layers was a really important feature for users. The current inspection process was tedious, requiring the user to search and add one coverage layer at a time, each time they wanted to run an inspection.</li>
              <li><b>Layer search</b> Users could use both keywords in the bottom panel, as well as search a point or boundary set on the map to see what layers were available in a specific location. The two different search bars (location search & layer search) often confused users. They also didn’t know what types of keywords were available to search against and their keyword search format often differed from what MapElements had available. The point or boundary layer search wasn’t discoverable for a lot of users, but once discovered was very useful. </li>
            </ul>
            <b-img-lazy fluid src="/static/images/ca-mapelements.jpg" alt="Screenshot of the MapElements application"/>
            <small>MapElements</small>
            <h3>TowerSource</h3>
            <p>While the VBM and MapElements were more focused on helping users understand their competitions network, as well as their own, TowerSource’s focus was all about infrastructure. Users mostly used TowerSource to:</p>
            <ul>
              <li><b>Plan out a tower/cell build</b> Site Acquisition Specialists are hired by both tower companies and providers to build out infrastructure. They are given a search area and need as much detail as possible, search rings, satellite views, Google street view, topographical maps, ability to measure distance and elevation.</li>
              <li><b>Find available towers to improve their network.</b> Mobile network providers can put antennas on towers that already exist.</li>
              <li><b>Benchmark</b> Tower companies can look at the competition and optimize their portfolio accordingly.</li>
            </ul>
            <p>TowerSource had the smallest user base and revenue of the three products. The asset data was the main selling point because we took the time to curate it by removing duplicates, correcting location, validating asset types, and receiving data from multiple sources. Many of the other datasets or features weren’t often utilized or were also available in other products like MapElements.</p>
            <ul>
              <li><b>Asset search</b> Users needed to be able to easily search assets by type, location, company, status, and height.</li>
              <li><b>Map styles</b> Having multiple map styles like Satellite, Streets, Topographical, and Google Street views saved users a lot of time by not having to switch to different applications.</li>
              <li><b>Distance measurement and elevation</b> Important for planning how much it might cost to run fiber to a new tower, or if there could be line of sight issues due to a large hill. These features were also requested in the VBM tool.</li>
            </ul>
            <b-img-lazy fluid src="/static/images/ca-towersource.jpg" alt="Screenshot of the TowerSource application"/>
            <small>TowerSource</small>
          </b-container>
        </section>
        <section class="port-section white" id="reframing">
          <b-container>
            <h2>Mapping Research</h2>
            <p>A huge inspiration for managing many data layers on a map was an application I had been using for many years. Mapbox is an incredibly powerful mapping tool for developers. I mostly used Mapbox studio to create different styled maps for our various products. There are various data types like symbol, line, fill, and background all with different attributes. Most of the time the user is managing 50+ layers in the left panel. Users can also upload their own data layers to the map and style them in the same way they can style the default layers.</p>
            <small>MapBox</small>
            <b-img-lazy fluid src="/static/images/ca-mapbox.jpg" alt="Screenshot of the MapBox application"/>
            <p>Other mapping applications I looked at were widely used RF engineering tools. Managing many different layers in the left panel, grouping, toggling on/off layers, and customizing the overall style of the layers were really common patterns across almost all of the applications.</p>
            <small>MapInfo</small>
            <b-img-lazy fluid src="/static/images/ca-mapinfo.jpg" alt="Screenshot of the MapInfo application"/>
            <small>Other RF engineering mapping tools</small>
            <b-row>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/ca-map3.jpg" alt="Screenshot of a RF engineering mapping tool"/>
              </b-col>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/ca-map4.jpg" alt="Screenshot of a RF engineering mapping tool"/>
              </b-col>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/ca-map1.jpg" alt="Screenshot of a RF engineering mapping tool"/>
              </b-col>
              <b-col md="6">
                <b-img-lazy fluid src="/static/images/ca-map2.jpg" alt="Screenshot of a RF engineering mapping tool"/>
              </b-col>
            </b-row>
          </b-container>
        </section>
        <section class="port-section" id="repositioning">
          <b-container>
            <h2>Repositioning the Product</h2>
            <p>During this time I was also working on another Ookla product. Something really interesting happened as I was going back over all my user testing notes and videos. I kept having to double check which user went to which project. I kept seeing similar use cases and the same feature requests across both platforms.</p>
            <p>I decided my best course of action would be to illustrate the trends I was seeing across these products and hope we could find a way to address this issue. I layed out all of the overlapping features as well as the products key differences, and turns out there was a ton of overlap between the two products. </p>
            <p>After a few conversations, we found a way to address the concerns. At the heart of it, Product felt it was really important to keep them separate from a sales perspective, and I felt they should be combined from a development perspective. Our solution was to sell them separately but under a larger umbrella of Ookla analysis tools. They would share the same code base, users could easily tab between the two if they had both, if they only purchased one then the tabs would no longer exist.</p>
            <b-row>
              <b-col md="7">
                <b-img-lazy fluid src="/static/images/ca-overlap.jpg" alt="Excel spreadsheet of Cellanalytics functionality compared to another Ookla product."/>
              </b-col>
              <b-col md="5">
                <b-img-lazy fluid src="/static/images/ca-differences.jpg" alt="Excel spreadsheet of Cellanalytics key differences to another Ookla product."/>
              </b-col>
            </b-row>
          </b-container>
        </section>
        <section class="port-section white" id="focus">
          <b-container>
            <h2>Creating Focus</h2>
            <p>Keeping this tool in the same umbrella as another current Ookla product defined it’s visual language. Now that the project had a home it needed some focus. I decided to narrow my focus on what I felt were the most important aspects of this project.</p>
            <ol>
              <li>
                <h5><b>Better layer search and management</b></h5>
                <p>Layer management was already a recurring issue in two of the three products. Tripling the amount of available data layers was only going to make these issues worse. Easily searching, filtering, adding, removing, re-ordering, and changing layer properties across many different data layers was vital to creating a great user experience.</p>
              </li>
              <li>
                <h5>Benchmarking</h5>
                <p>This was the most common use case across industries and datasets. Understanding their competition is vital for our users to know where to build out their network and infrastructure.</p>
              </li>
              <li>
                <h5>Feature parity</h5>
                <p>If we expected users to be willing to switch to our new product we had to keep the functionality they were already using intact. At the same time we needed to cut out features and datasets that weren’t useful for a more streamlined experience. </p>
              </li>
            </ol>
          </b-container>
        </section>
        <section class="port-section" id="search">
          <b-container>
            <h2>Improving Search</h2>
            <p>Each data set had to function differently while also providing a consistent layer management experience. With so many different data layers, users needed to be able to both search and browse. A search for repeat users saves them a lot of time when they know exactly what they are looking for, and the ability to browse shows them what we have available, or gives them a starting point if they’re not really sure what they’re looking for but they’ll know it when they see it.</p>
            <p>Users also needed to easily see what layers were available in a particular location. They would be able to do this in a few different ways. They could search a particular point on the map, use the map search bar to navigate and search a particular location, and esspecially for TowerSource users, they would be able to search using a radius. Not all of the data layers were location specific, so the location search would only return results from data sets that were.  </p>
            <b-img-lazy fluid src="/static/images/ca-search.svg" alt="Flow chart of improved search functionality"/>
          </b-container>
        </section>
        <section class="port-section white" id="management">
          <b-container>
            <h2>Layer Management</h2>
            <p>For effective layer management, users really needed to be able to remove, hide/show, group, and edit multiple layers at time. When working with 20+ layers only being able to work with one layer at a time could be tedious. How would this work when dealing with different data types? How might the functionality change based on how many layers, and data types were selected? Based on the different attributes and limitations of the data I came up with a basic framework for how users could manage their map layers.</p>
            <b-img-lazy fluid src="/static/images/ca-management.svg" alt="Flow chart of improved layer management"/>
          </b-container>
        </section>
        <section class="port-section" id="end">
          <b-container>
            <h2>Starting at the End</h2>
            <p>Whatever we built had to leave room for additional data sets we would inevitably add in the future. Based on the use case, users would have different access to different data sets. So as well as leaving room to grow, this application also had to be flexible. </p>
            <p>Many times, with larger applications, I like to work backwards. What is the desired end result, and the what are the steps to get there? What would our ideal application be first, and then how do we scale back to what our MVP should be? In an interface, it’s also usually a lot easier to take things out than to add funtionality later down the road. So the first design concepts I worked on included all of the functionality we would need to replace all three products.</p>
            <b-img-lazy fluid src="/static/images/ca-end.svg" alt=""/>
          </b-container>
        </section>
        <section class="port-section white" id="launch">
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

  #challenge, #kickoff, #end, #search, #management, #launch {
    img {
      box-shadow: none;
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