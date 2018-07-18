<template>
  <div data-spy="scroll" data-target="#navbar">
    <nav-bar />
    <section class="jumbotron start" id="start">
      <div id="table"></div>
      <div class="container">
        <h1>Welcome to my Studio</h1>
        <h2>Where beautiful user interfaces are created.</h2>
        <ul id="clock" class="hidden-xs">
          <li id="sec"></li>
          <li id="hour"></li>
          <li id="min"></li>
        </ul>
        <div id="computer">
          <div class="computer-inner">
            <b-img fluid src="/static/images/computer.png" alt="computer" data-rjs="2"/>
            <div class="screen">
              <h3 id="text-first">A digital design is like. . .</h3>
              <div id="learnMore" class="btn btn-primary inverse">Learn More</div>
            </div>
          </div>
        </div>
          <div id="tabletop-easel">
            <div class="easel-inner">
              <b-img fluid src="/static/images/easel.png" alt="Table-top Easel" data-rjs="2"/>
            <div id="painting-text">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 240 77.3" enable-background="new 0 0 240 77.3" xml:space="preserve">
                <path id="a1" fill="none" stroke="#f7f7f7" stroke-width="1.5" stroke-linecap="round" stroke-miterlimit="10" d="M10.3,11.8c-1.8,2.4-3.5,5.8-0.4,7.9
                  c1.1,0.8,2.5,1.1,3.8,1.3c4.5,0.7,9.1,0.5,13.6,0.1c6.6-0.5,13.1-1.2,19.6-2.3"/>
                <path id="a2" fill="none" stroke="#f7f7f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M41.5,30.5
                  c-1.8-3.4-1.9-7.4-1.9-11.2c0-5.8,0.4-11.6,0.7-17.4l0-0.3C37.4,7.5,34,13.1,30,18.4c-3.5,4.6-7.6,9.1-13.1,10.9
                  c-5.3,1.7-10.3,1-15.3-1.4"/>
                <path id="p1" fill="none" stroke="#f7f7f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M81.4,7.4
                  c-1.8,0.4-2.8,2.2-3.3,4c-0.6,2.2-0.7,4.6-0.7,6.9s-0.1,4.7-0.9,6.9c-0.8,2.2-2.3,4.3-4.4,5.1c-1.7,0.7-3.6,0.5-5.3-0.1
                  c-1.8-0.6-3.2-1.8-4.6-2.9"/>
                <path id="p2" fill="none" stroke="#f7f7f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M70.6,17.9
                  c-1.3,1.1-3.3,1.9-4.9,2.2c-1.8,0.3-3.7,0.1-5.2-0.9c-2.5-1.6-3.4-4.9-2.6-7.7c0.8-2.8,2.9-5.1,5.4-6.6C68.1,2,74.8,0.5,80.4,1.3
                  c3.5,0.5,7.2,2.2,9.1,5.4c1.8,3,1.5,7-0.6,9.8c-2.2,2.9-5.9,4-9.3,3.3"/>
                <path id="ainting" fill="none" stroke="#f7f7f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M97.4,22.3
                  c-1.8-1.1-4.1-1.2-5.7,0.2c-1.3,1-1.9,2.7-1.9,4.3c0,0.6,0.1,1.2,0.4,1.6c0.5,0.8,1.6,1.2,2.5,1.1c1-0.1,1.8-0.7,2.4-1.5
                  c0.7-0.9,0.9-2.1,1.2-3.2c-0.4,1.3,0.1,3.9,1.5,4.4c0.7,0.3,1.6,0.2,2.3-0.1c1.6-0.6,2.7-2.1,3.3-3.7c0.6-1.5,0.6-3.1,1-4.5
                  c0.2,2.1-0.5,4.1-0.1,6.2c0.1,0.6,0.3,1.2,0.7,1.7c1.6,2,4.5,0.5,5.7-1.1c1.4-1.9,1.7-6,3.9-7.2c0.9-0.5,1.5,1.2,1.4,2.2
                  c-0.1,1.8-0.6,4.2-0.6,6.1c-0.1,2.2,1.8-0.5,2.3-1.4c0.8-1.5,1.7-2.9,2.5-4.4c0.4-0.7,1.8-1.7,2.7-1.2c2.4,1.4-1.7,7.1,1.6,7.6
                  c0.8,0.1,1.6-0.2,2.2-0.7c2.3-1.5,3.8-3.9,4.9-6.3c1.8-4,2.7-8.5,2.5-13c0-0.5-0.1-1.1-0.4-1.5c-1.3-2.1-2.6,0.9-2.8,2
                  c-0.7,4.4-1,8.8-0.5,13.2c0.2,2,0.7,4.1,2.4,5.2c1.8,1.2,4.4,0.4,5.8-1.2s1.8-3.9,1.8-6.1c0,2.1,0,4.2,0,6.4c0,1.7,0.7,3.1,2.6,2.4
                  c1.7-0.7,3-2.2,4-3.7c0.7-1.2,1.3-2.5,1.8-3.9c0.1-0.3,0.3-0.7,0.5-1s0.6-0.4,1-0.3c0.3,0.1,0.5,0.3,0.6,0.6
                  c0.3,0.5,0.4,1.1,0.4,1.6c0.1,2.1-0.8,4.2-0.3,6.3c0,0.1,0.1,0.3,0.2,0.4c0.2,0.1,0.5-0.1,0.6-0.4c1.4-2.5,2.6-5.8,5.1-7.5
                  c0.2-0.2,0.5-0.3,0.7-0.3c0.5,0,0.8,0.5,1,0.9c0.7,1.7,0.6,3.9,0.8,5.7c0,0.2,0,0.4,0.1,0.5c0.2,0.3,0.7,0.4,1.1,0.3
                  c3.4-0.5,4.6-4.2,6.9-6.1c0.7-0.6,1.6-1.1,2.5-1.3c0.8-0.2,2-0.2,2.7,0.3c-0.8,0-1.6-0.3-2.4-0.2c-0.8,0-1.6,0.2-2.3,0.5
                  c-1.8,0.8-3.2,3-2.4,4.9c0.6,1.3,2.2,2.1,3.6,1.8c1.4-0.4,2.4-1.8,2.3-3.2c0.5,6.2,0.7,12.6-0.1,18.7c-0.2,1.5-0.5,3-1.1,4.4
                  c-0.4,0.8-1,1.7-1.8,1.9c-2,0.5-2.7-1.7-2.6-3.3c0.3-3.2,1.1-6.5,2.8-9.3c1-1.7,2.2-3.3,3.4-4.8c2.4-3,4.7-6.1,6.4-9.6"/>
                <path id="That" fill="none" stroke="#f7f7f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M186.4,24.8
                  c1.3-1.4,2.2-3.2,2.7-5c0.5-1.9,0.8-3.8,1.1-5.7c0.3-1.4,0.6-2.8,0.6-4.2c0-0.7-0.2-1.4-0.6-1.9c-1.8-2-3,1.7-3.3,3
                  c-0.8,4.6-1.1,9.5,0.4,13.9c0.3,1,0.7,2,1.4,2.7c3.1,3.5,7.1-1.6,8.3-4.3c2-4.3,3.8-8.8,4.4-13.6c0-0.4,0.1-0.8,0.1-1.1
                  c0.1-1.7,0.1-3.4-0.5-4.9c-0.2-0.6-0.5-1.2-1.1-1.4c-0.8-0.3-1.7,0.2-2.1,0.9c-0.6,1-0.7,2.2-0.8,3.4c-0.2,3.9-0.3,7.9-0.4,11.8
                  c-0.1,2.8-0.1,5.6-0.2,8.4c0,0.8,0,1.5,0.2,2.2c0,0.1,0.1,0.2,0.1,0.2c0.1,0.1,0.3,0,0.4-0.2c1.8-1.9,2.6-4.4,4.1-6.5
                  c0.3-0.4,0.6-0.7,1-0.8c0.9-0.2,1.6,0.6,1.9,1.5c0.4,1.2,0.3,2.4,0.2,3.7c0,0.6,0,1.2,0.3,1.7c0.4,0.8,1.5,1,2.3,0.8
                  s1.5-0.8,2.1-1.5c1.3-1.6,2.2-3.7,3.8-5c1.5-1.2,3.6-1.5,5.4-0.8c-2.9-1.1-6.5,0.2-7.7,3.2c-0.3,0.8-0.4,1.6-0.2,2.4
                  c0.3,1.1,1.2,2,2.4,1.9c0.7,0,1.3-0.3,1.8-0.6c1.3-0.8,2.4-2.1,2.9-3.6c-0.3,1.1-0.5,2.5,0.2,3.4c1.5,2.1,4.3,0.2,5.7-1.1
                  c1.8-1.7,3-3.9,3.9-6.2c0.8-2.2,1.2-4.4,1.6-6.7c0.4-2.2,0.6-4.4,0-6.6c-0.7-2.6-2.9-0.1-3.5,1.2c-0.8,1.8-1,3.8-1.2,5.8
                  c-0.3,3.4-0.1,6.8,1,10c0.3,0.9,0.7,1.9,1.4,2.7c0.6,0.8,1.5,1.4,2.5,1.6c1.3,0.3,2.7-0.3,3.7-1.3c1.2-1.1,1.8-2.7,2.2-4.2"/>
                <path id="N" fill="none" stroke="#f7f7f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M44,64.3
                  c-2-1.9-4.7-3.2-7.4-3.3c-2.8-0.1-5.7,1.1-7.2,3.4c-1.5,2.3-1.3,5.7,0.7,7.6c1.2,1.1,2.8,1.7,4.4,2c2.6,0.6,5.3,0.7,7.8,0
                  c5-1.3,8.6-5.8,10.6-10.6c1.9-4.8,2.4-10,3-15.1c1.2,0.5,1.9,1.8,2.3,3.1c1.3,3.7,2,7.7,3.2,11.5c1.2,3.8,2.3,8.5,4.5,11.8
                  c0.7-0.3,0.8-1.2,0.9-2c0.2-1.8,0.1-3.6,0.1-5.4c0.1-3.5,0.4-7,1.1-10.5c0.6-2.8,1.4-5.7,3.3-7.9c1.8-2.2,4.7-3.8,7.5-3.3"/>
                <path id="ever" fill="none" stroke="#f7f7f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M67.6,73.1
                  c1.4-0.2,2.8-0.4,4.1-1s2.4-1.7,2.7-3.1c0.2-0.8,0-1.6-0.5-2.2c-0.5-0.6-1.5-0.8-2.1-0.3c-0.6,0.4-0.7,1.2-0.8,1.9
                  c-0.1,0.9-0.1,1.8,0,2.7c0.1,1.2,0.5,2.5,1.5,3.2c1.1,0.8,2.6,0.6,3.8,0c1.6-0.8,2.9-2.2,3.5-3.9c0.4-1.3,0.3-2.9,1-4.1
                  c0.6,0.4,0.2,2.8,0.2,3.5c0,1.3,0.1,2.6,0.8,3.7c0.2,0.4,0.5,0.7,0.8,0.9c0.8,0.3,1.6-0.3,2.2-0.9c0.9-1,1.5-2.2,2-3.4
                  c0.3-0.8,0.4-1.7,0.5-2.6c0.1-1.3,0.4-1.3,0.9-0.1c0.3,0.7,0.7,1.5,1.2,2.1c1,1.2,2.3,1.3,3.7,1.3c0.1,0,0.2,0,0.4,0
                  c0.2,0.1,0.3,0.2,0.4,0.3c0.9,0.8,2.4,0.7,3.3,0c1-0.7,1.4-2,1.4-3.2c0-0.4,0-0.7-0.2-1c-0.1-0.3-0.4-0.5-0.6-0.6
                  c-1.6-0.9-2.8,0.4-3.2,1.8c-0.5,1.7-0.7,3.7,0.3,5.2c1.1,1.5,3.3,2,5.1,1.3c1.8-0.7,3-2.3,3.7-4s0.9-3.6,1-5.5c0-0.3,0-0.6-0.1-0.9
                  c-0.1-0.3-0.4-0.5-0.7-0.5c-0.2,0-0.4,0.2-0.5,0.3c-0.3,0.3-0.6,0.8-0.5,1.3c0.1,0.5,0.6,0.9,1.2,1c1.3,0.2,2.5-1,3.7-0.1
                  c0.9,0.7,1,2,0.7,3.1c-0.2,1.1-0.6,2.3-0.2,3.3c0.4,1.2,1.8,1.8,3,1.7c1.2-0.1,2.3-0.9,3.1-1.8c0.8-0.9,1.4-2.1,1.9-3.2"/>
                <path id="D" fill="none" stroke="#f7f7f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M150.1,51.9
                  c-1.7,0.4-3,1.8-3.6,3.4c-0.6,1.4-0.8,3-1.1,4.5c-0.6,3.7-1.5,8.2-4.1,11.1c-2.2,2.5-5.8,3.9-9.1,3.4c-0.8-0.1-1.7-0.4-2.3-0.9
                  c-0.7-0.5-1.1-1.4-0.9-2.3c0.3-1.3,1.8-1.9,3.1-2c2.4-0.2,4.8,0.5,7,1.4s4.4,2.1,6.6,2.8c3.6,1.3,7.5,1.6,11.2,0.8
                  c2-0.5,4.1-1.3,5.6-2.8c1.6-1.6,2.6-3.7,3-5.9c1.1-5.2-1-10.4-5.2-13.6c-2.1-1.6-4.5-2.7-7-3.4c-5.4-1.6-11.2-1.9-16.6-0.1
                  c-1.5,0.5-3.1,1.2-4.2,2.3c-1.8,1.8-2.5,4.5-1.8,7c0.7,2.4,2.8,4.4,5.3,4.9"/>
                <path id="ries" fill="none" stroke="#f7f7f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M168.4,70
                  c0.5-1.6,1-3.9,0.6-5.5c-0.1-0.4-0.4-0.8-0.8-0.8c-0.3-0.1-0.7,0.1-0.9,0.4c-0.5,0.6-0.5,1.7,0.1,2.2c1.4,1.3,3.6-0.5,5,0.6
                  c0.6,0.5,0.7,1.4,0.6,2.2c-0.1,1-0.4,2.1-0.3,3.1c0.1,1.1,0.6,2.2,1.6,2.5c0.8,0.3,1.8,0,2.5-0.5c1.2-0.8,2-1.9,2.7-3.2
                  c0.8-1.5,1.6-3,1.5-4.8c-0.4,0.3-0.5,0.9-0.5,1.5c-0.1,1.6-0.2,3.2,0,4.8c0.1,0.5,0.2,1.1,0.5,1.6c0.6,0.9,1.9,1.2,2.9,1
                  s1.9-1,2.7-1.8c0.7-0.8,1.3-1.7,2.1-2.5c0,0.5,0.4,0.9,0.7,1.2c0.7,0.6,1.8,0.5,2.6,0c0.7-0.4,1.2-1.1,1.5-1.8
                  c0.3-1,0.3-2.1-0.4-2.9c-0.7-0.8-2-0.9-2.7-0.2c-0.3,0.3-0.4,0.6-0.6,1c-0.5,1.6-0.4,3.4,0.6,4.8c1,1.4,2.8,2.1,4.4,1.7
                  c0.9-0.2,1.8-0.8,2.4-1.5c1.1-1.1,1.8-2.5,2.3-3.9c0.3-0.7,0.5-1.4,0.6-2.2c0.2-0.7,0.2-1.6,0.5-2.2c0.6,2.5,1.8,4.9,2.3,7.4
                  c0.1,0.7,0.2,1.4-0.2,1.9c-0.4,0.4-1,0.6-1.6,0.5c-0.5-0.1-1-0.4-1.5-0.6c1.3,1.5,3.7,1.9,5.4,1.1c1.4-0.6,2.4-1.8,3.2-3"/>
                <path id="line1" fill="none" stroke="#f7f7f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M121.3,10.7
                  c8.2,0,16.3,0,24.5,0"/>
                <path id="line2" fill="none" stroke="#f7f7f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M178.7,10.7
                  c8,0,16,0,24,0"/>
                <path id="line3" fill="none" stroke="#f7f7f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M217,10.7
                  c9.2,0,12.3,0,21.5,0"/>
                <path id="dot1" fill="none" stroke="#f7f7f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M104.1,18.1c0.4-0.1,0.7-0.3,0.9-0.6"/>
                <path id="dot2" fill="none" stroke="#f7f7f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M180.3,62.6c0.4-0.1,0.7-0.3,0.9-0.6"/>
                <path id="dot3" fill="none" stroke="#f7f7f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M140,18c0.4-0.1,0.7-0.3,0.9-0.6"/>
                </svg>    
            </div>
            </div>
          </div>
          <div id="pencils"><b-img fluid src="/static/images/pencils.png" alt="pencils"  data-rjs="2" /></div>
          <div id="brushes"><b-img fluid src="/static/images/brushes.png" alt="brushes" data-rjs="2" /></div>
          <div id="viewport"></div>
          <div id="mug"><b-img fluid src="/static/images/coffee-cup.png" alt="mug with hot steam" data-rjs="2" /></div>
          <div id="books"><b-img fluid src="/static/images/books-plant.png" alt="books" data-rjs="2" /></div>
          <div id="palette"><b-img fluid src="/static/images/palette.png" alt="palette" data-rjs="2" /></div>
      </div>
    </section>
    <section id="about">
      <b-container class="container blue">
        <h2>A little <strong>ABOUT</strong> me</h2>
        <p>I am a UI Designer & Front End Developer with 7+ years of experience. I craft elegant web user interfaces using creative and engaging solutions through all phases of design and development. Responsible for creating high fidelity mock-ups, working prototypes and then implementing them. UI design is like telling a story. It needs to be told with clarity and purpose. Without purpose it's just noise.</p>
        <b-row>
          <b-col>
              <b-img-lazy fluid src="/static/images/about-graphic.svg" alt="Image Icon"/>
            <div class="title">
              <h3>GRAPHIC DESIGNER</h3>
              <p>I design beautiful things that communicate effectively in order to achieve optimal results. I am able to do branding, print design, illustrations, inforgraphics, typograhpy and photography. I'm proficient with Illustrator, Photoshop, InDesign, and After Effects.</p>
            </div>
          </b-col>
          <b-col>
              <b-img-lazy fluid src="/static/images/about-ui.svg" alt="Computer Icon"/>
            <div class="title">
              <h3>UI/UX DESIGNER</h3>
              <p>I am a passionate responsive web + UX/UI designer that focuses on usability, functionality, interactivity, and visual appeal. Using goal oriented design, I strive to create engaging web and mobile interfaces with logical, thought out behaviors and actions.</p>
            </div>
          </b-col>
          <b-col> 
              <b-img-lazy fluid src="/static/images/about-dev.svg" alt="Start and end HTML tags"/>
            <div class="title">
              <h3>FRONT END DEVELOPER</h3>
              <p>I truly enjoy crafting a design throughout the entire process. Developing the interface I've designed, I am able to make sure every interaction is exactly how it should be. I am proficient at HTML5, CSS3, Sass, jQuery, Bootstrap, Basic Javascript, and am familiar with Ruby on Rails, and Vue.</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="tools">
      <div class="container">
        <h2>Some <strong>TOOLS</strong> I use</h2>
        <ul class="row">
          <template v-for="tool in tools">
            <li class="col-sm-3 col-xs-6 tool-container">
              <b-img-lazy fluid v-bind:src="tool.img"/>
            </li>
          </template>
        </ul>
      </div>
    </section>
    <section id="portfolio">
      <b-container>
        <h2>My <strong>PORTFOLIO</strong></h2>
        <b-row class="portfolio-section" id="web">
          <b-col col sm="12">
            <h3>Web & Mobile Applications</h3>
            <hr />
          </b-col>
            <img-feed img-category="apps"></img-feed>
          </b-row>
          <b-row class="portfolio-section" id="print">
            <b-col col sm="12">
              <h3>Print</h3>
              <hr />
            </b-col>
            <img-feed img-category="print"></img-feed>
          </b-row>
        <div class="portfolio-section" id="other-works">
          <h3>Other Works</h3>
          <hr />
          <div class="row icons">
            <div class="col-md-4 col-sm-4">
              <a href="/paintings">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 310 269" enable-background="new 0 0 310 269" xml:space="preserve">
                    <path fill="#5E5E5E" d="M53.8,47.9l202.3,0l0,152.6l-202.3,0L53.8,47.9 M52.2,44.9c-0.7,0-1.3,0.6-1.3,1.3l0,155.9c0,0.7,0.6,1.3,1.3,1.3l205.6,0c0.7,0,1.3-0.6,1.3-1.3l0-155.9c0-0.7-0.6-1.3-1.3-1.3L52.2,44.9L52.2,44.9z"/>
                  <line fill="none" stroke="#5E5E5E" stroke-width="3" stroke-miterlimit="10" x1="87.7" y1="267.1" x2="110.8" y2="201.1"/>
                  <line fill="none" stroke="#5E5E5E" stroke-width="3" stroke-miterlimit="10" x1="230.8" y1="267.1" x2="203.8" y2="201.1"/>
                  <line fill="none" stroke="#5E5E5E" stroke-width="3" stroke-miterlimit="10" x1="137.1" y1="26.4" x2="172.9" y2="26.4"/>
                  <line fill="none" stroke="#5E5E5E" stroke-width="3" stroke-miterlimit="10" x1="155" y1="6.7" x2="155" y2="25.2"/>
                </svg>
                <h3>PAINTING</h3>
              </a> 
            </div>
            <div class="col-md-4 col-sm-4">
              <a href="animations.html">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 407.2 269" enable-background="new 0 0 407.2 269" xml:space="preserve">
                  <circle fill="#FFFFFF" stroke="#5E5E5E" stroke-width="3" stroke-miterlimit="10" cx="168.9" cy="149" r="27.6"/>
                  <circle fill="#FFFFFF" stroke="#5E5E5E" stroke-width="3" stroke-miterlimit="10" cx="204" cy="176.6" r="27.6"/>
                  <circle fill="#FFFFFF" stroke="#5E5E5E" stroke-width="3" stroke-miterlimit="10" cx="231.6" cy="149" r="27.6"/>
                  <ellipse fill="none" stroke="#5E5E5E" stroke-width="3" stroke-miterlimit="10" cx="205.5" cy="153.5" rx="181.8" ry="82.2"/>
                  <circle fill="#FFFFFF" stroke="#5E5E5E" stroke-width="3" stroke-miterlimit="10" cx="30.3" cy="145.4" r="27.6"/>
                  <circle fill="#FFFFFF" stroke="#5E5E5E" stroke-width="3" stroke-miterlimit="10" cx="376.9" cy="147.3" r="27.6"/>
                  <circle fill="#FFFFFF" stroke="#5E5E5E" stroke-width="3" stroke-miterlimit="10" cx="200.3" cy="125.8" r="27.6"/>
                </svg>
                <h3>ANIMATION</h3>
              </a> 
            </div>
            <div class="col-md-4 col-sm-4">
              <a href="http://www.merissahermanson.com/photography" target="_blank">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 304.7 269" enable-background="new 0 0 304.7 269" xml:space="preserve">
                <circle fill="none" stroke="#5E5E5E" stroke-width="3" stroke-miterlimit="10" cx="147.7" cy="158.6" r="57.2"/>
                <circle fill="#5E5E5E" cx="237.7" cy="90.2" r="10"/>
                <rect x="29.9" y="47.5" fill="#5E5E5E" width="32.9" height="12.4"/>
                <path fill="#5E5E5E" d="M179.2,41.7l12.2,21.2l0.9,1.8h1.7h89.3c8.8,0,15.7,8,15.7,18v161.7c0,8.8-5.8,18.3-15.7,18.3H24.9c-9.4,0-17.9-8.9-17.9-18.3V82.7c0-9.3,8.5-18,17.9-18h89.5h1.8l0.8-1.9l11-21.1h51 M180.9,38.7h-54.8l-11.8,23H24.9c-11,0-20.9,10-20.9,21v161.7c0,11,9.8,21.3,20.9,21.3h258.5c11,0,18.7-10.3,18.7-21.3V82.7c0-11-7.7-21-18.7-21H194L180.9,38.7L180.9,38.7z"/>
              </svg>
              <h3>PHOTOGRAPHY</h3>
              </a> 
            </div>
          </div>
        </div>
      </b-container>
    </section>
    <section id="contact">
      <div class="container">
        <h2><strong>CONTACT</strong></h2>
        <h3 class="text-center">Merissa.Hermanson@gmail.com</h3>
        <p>I'm only a click away</p>
        <a href="mailto:merissa.hermanson@gmail.com">
          <button type="button" class="btn btn-primary inverse btn-lg">Contact Me</button>
        </a>
      </div>
    </section>
    <main-footer />
  </div>
</template>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
import NavBar from './NavBar'
import ImgFeed from './ImgFeed'
import MainFooter from './MainFooter'
  export default {
    name: 'home',
    components: { NavBar, ImgFeed, MainFooter},
    resource: 'Home',
    props: {
      post: String
    },
    data() {
      return {
        tools: [
          {img: '/static/images/tools_ps.svg'},
          {img: '/static/images/tools_css.svg'},
          {img: '/static/images/tools_jquery.svg'},
          {img: '/static/images/tools_sublime.svg'},
          {img: '/static/images/tools_invision.svg'},
          {img: '/static/images/tools_rails.svg'},
          {img: '/static/images/tools_bootstrap.svg'},
          {img: '/static/images/tools_html.svg'},
          {img: '/static/images/tools_illustrator.svg'},
          {img: '/static/images/tools_github.svg'},
          {img: '/static/images/tools_js.svg'},
          {img: '/static/images/tools_sass.svg'}
        ]
      }
    },
    methods: {
      animateStudio(){
        // init controller
        const self = this;
        const controller = new this.$scrollmagic.Controller({
          globalSceneOptions: {
            triggerHook:"onLeave"
          }
        });

        TweenMax.set("#tabletop-easel", {top: "-=950"});
        TweenMax.set("#palette", {left: "-=2200"});
        TweenMax.set("#brushes", {right: "-=950"});
        var $computer = $("#computer");
        var $easel = $("#tabletop-easel");
        var $palette = $("#palette");
        var $pencils = $("#pencils");
        var $brushes = $("#brushes");
        // build tween
        var swap = new TimelineMax()
       
          .to("#computer", 1, {
              onStart: function () {$computer.addClass("animated bounceOutUp").removeClass("bounceInDown");},
              onReverseComplete: function () {$computer.removeClass("bounceOutUp").addClass("bounceInDown");}}
          )

          .to("#tabletop-easel", 1, {top: "+=950",
              onStart: function () {$easel.addClass("animated bounceInDown").removeClass("bounceOutUp");},
              onReverseComplete: function () {$easel.removeClass("bounceInDown").addClass("bounceOutUp");}
              }
          )
          .to("#palette", 1, {left: "+=2200",
              onStart: function () {$palette.addClass("animated bounceInLeft").removeClass("bounceOutLeft");},
              onReverseComplete: function () {$palette.removeClass("bounceInLeft").addClass("bounceOutLeft");}
              }
          )
          .to("#pencils", 1, {
              onStart: function () {$pencils.addClass("animated bounceOutUp").removeClass("bounceInDown");},
              onReverseComplete: function () {$pencils.removeClass("bounceOutUp").addClass("bounceInDown");}}
          )

          .to("#brushes", 1, {right: "+=950",
              onStart: function () {$brushes.addClass("animated bounceInRight").removeClass("bounceOutRight");},
              onReverseComplete: function () {$brushes.removeClass("bounceInRight").addClass("bounceOutRight");}
              }
          );


        function pathPrepare ($el) {
          var lineLength = $el[0].getTotalLength();
          $el.css("stroke-dasharray", lineLength);
          $el.css("stroke-dashoffset", lineLength);
        }

        var $a1 = $("path#a1");
        var $a2 = $("path#a2");
        var $p1 = $("path#p1");
        var $p2 = $("path#p2");
        var $ainting = $("path#ainting");
        var $line1 = $("path#line1");
        var $dot1 = $("path#dot1");
        var $dot2 = $("path#dot2");
        var $That = $("path#That");
        var $line2 = $("path#line2");
        var $line3 = $("path#line3");
        var $N = $("path#N");
        var $ever = $("path#ever");
        var $D = $("path#D");
        var $ries = $("path#ries");
        var $dot3 = $("path#dot3");

        // prepare SVG
        pathPrepare($a1);
        pathPrepare($a2);
        pathPrepare($p1);
        pathPrepare($p2);
        pathPrepare($ainting);
        pathPrepare($dot1);
        pathPrepare($dot2);
        pathPrepare($line1);
        pathPrepare($That);
        pathPrepare($line2);
        pathPrepare($line3);
        pathPrepare($N);
        pathPrepare($ever);
        pathPrepare($D);
        pathPrepare($ries);
        pathPrepare($dot3);

        // build tween
        var tween = new TimelineMax()
          .add(TweenMax.to($a1, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
          .add(TweenMax.to($a2, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
          .add(TweenMax.to($p1, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
          .add(TweenMax.to($p2, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
          .add(TweenMax.to($ainting, .05, {strokeDashoffset: 0, ease:Linear.easeNone})) 
          .add(TweenMax.to($dot1, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
          .add(TweenMax.to($dot2, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
          .add(TweenMax.to($line1, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
          .add(TweenMax.to($That, .1, {strokeDashoffset: 0, ease:Linear.easeNone}))
          .add(TweenMax.to($line2, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
          .add(TweenMax.to($line3, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
          .add(TweenMax.to($N, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
          .add(TweenMax.to($ever, .1, {strokeDashoffset: 0, ease:Linear.easeNone}))
          .add(TweenMax.to($D, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
          .add(TweenMax.to($ries, .1, {strokeDashoffset: 0, ease:Linear.easeNone}))  
          .add(TweenMax.to($dot3, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
          .add(TweenMax.from("path", 1, {opacity: 0, ease:Linear.easeNone}), 0)// change color during the whole thing
          .add(TweenMax.to(".dripwrapper", .5, {opacity: 1, ease:Linear.easeNone}), 0);


        // Pin both the Desk and About sections 
        var startpin = new this.$scrollmagic.Scene({
          duration: 600
        })
        .setPin(".start", {pushFollowers: false})
        .addTo(controller);

        var startpin1 = new this.$scrollmagic.Scene({
          duration: 600
        })
        .setPin("#about")
        .addTo(controller);

        // Computer Easel Swap Scene
        var SceneSwap = new this.$scrollmagic.Scene({
          duration: 250,
          offset:100
        })
        .setTween(swap)
        .addTo(controller);

        // Draw on SVG Text Scene
        var SceneText = new this.$scrollmagic.Scene({
          duration: 250,
          offset:350,
          tweenChanges: true
        })
        .setTween(tween)
        .addTo(controller);
      },
      clock(){ 
        setInterval( function() {
        var seconds = new Date().getSeconds();
        var sdegree = seconds * 6;
        var srotate = "rotate(" + sdegree + "deg)";
        $("#sec").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});    
        }, 1000 );
        
        setInterval( function() {
        var hours = new Date().getHours();
        var mins = new Date().getMinutes();
        var hdegree = hours * 30 + (mins / 2);
        var hrotate = "rotate(" + hdegree + "deg)";
        $("#hour").css({"-moz-transform" : hrotate, "-webkit-transform" : hrotate});     
        }, 1000 );

        setInterval( function() {
        var mins = new Date().getMinutes();
        var mdegree = mins * 6;
        var mrotate = "rotate(" + mdegree + "deg)";
        $("#min").css({"-moz-transform" : mrotate, "-webkit-transform" : mrotate}); 
        }, 1000 );
      },
      steam(){
        (function () {
          "use strict";
          var i = 0; for (; i < 5; i += 1) {
            setTimeout(function addSmoke() {
              var time = Math.random() * 1000 + 3000,
                  smoke = $('<div />', {
                    class: 'smoke',
                    css: {
                      opacity: 0,
                      left: Math.random() * 30
                    }
                  });             
              $(smoke).appendTo('#viewport');
              $.when(
                $(smoke).animate({
                  opacity: 1
                }, 
                { duration: time / 2,
                  easing: 'linear',
                  queue: false,
                  complete: function () {
                    $(smoke).animate({
                      opacity: 0
                    }, 
                    { duration: time / 2,
                      easing: 'linear',
                      queue: false
                    });
                  }
                }),

                // animate movement
                $(smoke).animate({
                  bottom: $('#viewport').height()
                }, 
                { duration: time * 1.4,
                  easing: 'linear',
                  queue: false
                })
              ).then(function () {
                $(smoke).remove();
                addSmoke();
              });
            }, Math.random() * 10000);
          }
        }());
      },
    },

    mounted: function () {
      this.animateStudio();
      this.clock();
      this.steam();
    }
  }
</script>

<style lang="scss" scoped>
  
</style>