<template>
  <div class="home">
    <vue-headful
      image="/static/images/home.png"
      title="Merissa Hermanson Portfolio"
      description="I’m a Product Designer specializing in complex enterprise solutions and data visualization. I have 10+ years of experience in design and 5+ years balancing product, development, and user centered goals for enterprise products."
    />
    <nav-bar />
    <section class="jumbotron start" id="start">
      <div id="table"></div>
      <div class="container">
        <div class="text-container">
          <h1>Merissa Hermanson's Studio</h1>
          <h2>Where beautiful user interfaces are created.</h2>
        </div>
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
              <div id="learnMore" v-on:click="buttonScroll" class="btn btn-primary inverse">Learn More</div>
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
        <p>I’m a Product Designer specializing in complex enterprise solutions and data visualization. I have 10+ years of experience in design and 5+ years balancing product, development, and user centered goals for mostly enterprise products. In collaboration with Project Managers, and Engineers I’m involved in every aspect of the product development process, from brainstorming, user research, product strategy, to tweaking pixels right before launch.</p>
        <b-row>
          <b-col md="4">
              <b-img-lazy fluid src="/static/images/about-research.svg" alt="Start and end HTML tags"/>
            <div class="title">
              <h3>USER RESEARCH</h3>
              <p>Data is always better than guessing. Users can be unpredictable and don't always do what they say they do. Filling knowledge gaps with data instead of assumptions forms a solid foundation for solving the right people problems.</p>
            </div>
          </b-col>
          <b-col md="4">
              <b-img-lazy fluid src="/static/images/about-ui.svg" alt="Computer Icon"/>
            <div class="title">
              <h3>USER EXPERIENCE</h3>
              <p>Creating a great user experience is about solving people problems. I enhance people’s satisfaction with a product by refining the usability, accessibility, and pleasure given in the interaction between a person and a product.</p>
            </div>
          </b-col>
          <b-col md="4">
              <b-img-lazy fluid src="/static/images/about-graphic.svg" alt="Image Icon"/>
            <div class="title">
              <h3>VISUAL DESIGN</h3>
              <p>I design beautiful things that communicate effectively in order to achieve optimal results. Asthetic products appear easier to use, have a higher probability of being used, are more effective at forming positive attitudes.</p>
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
            <li class="col-md-3 col-sm-6 col tool-container">
              <b-img-lazy fluid v-bind:src="tool.img"/>
            </li>
          </template>
        </ul>
      </div>
    </section>
    <section id="portfolio">
      <b-container>
        <h2>My <strong>PORTFOLIO</strong></h2>
          <b-row class="portfolio-section" id="case-studies">
            <b-col sm="12">
              <h3>Case Studies</h3>
              <hr />
            </b-col>
            <img-feed img-category="study"></img-feed>
          </b-row>
          <b-row class="portfolio-section" id="web">
            <b-col col sm="12">
              <h3>Design</h3>
              <hr />
            </b-col>
            <img-feed img-category="design"></img-feed>
          </b-row>
        <div class="portfolio-section" id="other-works">
          <h3>Other Works</h3>
          <hr />
          <b-row class="icons">
            <b-col md="4">
              <a href="/paintings">
                <svg viewBox="0 0 94 117" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g class="other-icon" transform="translate(-41.000000, -30.000000)" fill-rule="nonzero">
                          <path d="M133.404697,46 C134.284006,46 135,46.7150374 135,47.5946757 L135,47.5946757 L135,116.404883 C135,117.284779 134.284189,118 133.404697,118 L133.404697,118 L111.771,118 L123.159179,145.52034 L120.840821,146.47966 L109.056,118 L68.981,118 L59.1859704,146.408955 L56.8140296,145.591045 L66.328,118 L42.5953035,118 C41.7646713,118 41.0800397,117.362041 41.0065332,116.549913 L41,116.404883 L41,47.5946757 C41,46.7150374 41.7159936,46 42.5953035,46 L42.5953035,46 Z M133,48 L43,48 L43,116 L133,116 L133,48 Z M88.7545,30 L88.754,37.245 L96,37.2455 L96,39.7545 L80,39.7545 L80,37.2455 L86.245,37.245 L86.2455,30 L88.7545,30 Z" id="Combined-Shape"></path>
                      </g>
                  </g>
              </svg>
                <h3>PAINTING</h3>
              </a>
            </b-col>
            <b-col md="4">
              <router-link to="/animations">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 121 121" style="enable-background:new 0 0 121 121;" xml:space="preserve">
                    <g class="other-icon" transform="translate(27.000000, 27.000000)">
                      <path id="Fill-1" class="st0" d="M84.1,40.2c-3.9,0-7.1-3.2-7.1-7.1s3.2-7.1,7.1-7.1c3.9,0,7.1,3.2,7.1,7.1S88,40.2,84.1,40.2
                         M33.4,56.2C12.1,56.2-7,50.4-15,41.7c3.6-1.2,6.2-4.6,6.2-8.6s-2.6-7.4-6.2-8.6C-7,15.8,12.1,10,33.4,10
                        c21.1,0,40.2,5.7,48.3,14.3c-3.8,1.1-6.6,4.6-6.6,8.7s2.8,7.7,6.6,8.7C73.5,50.4,54.5,56.2,33.4,56.2 M-25,33.1
                        c0-3.9,3.2-7.1,7.1-7.1c3.9,0,7.1,3.2,7.1,7.1s-3.2,7.1-7.1,7.1C-21.8,40.2-25,37-25,33.1 M84.1,24c0,0-0.1,0-0.1,0
                        C76,14.4,55.8,8,33.4,8C10.9,8-9.3,14.4-17.3,24c-0.2,0-0.4,0-0.6,0c-5,0-9.1,4.1-9.1,9.1s4.1,9.1,9.1,9.1c0.2,0,0.4,0,0.6,0
                        c7.9,9.6,28.1,16,50.6,16c22.5,0,42.7-6.4,50.6-16c0,0,0.1,0,0.1,0c5,0,9.1-4.1,9.1-9.1S89.1,24,84.1,24"/>
                      <path id="Fill-4" class="st0" d="M26,84.1c0-3.9,3.2-7.1,7.1-7.1c3.9,0,7.1,3.2,7.1,7.1c0,3.9-3.2,7.1-7.1,7.1
                        C29.2,91.2,26,88,26,84.1 M10,33.4C10,12.1,15.8-7,24.5-15c1.2,3.6,4.6,6.2,8.6,6.2c4,0,7.4-2.6,8.6-6.2c8.7,8,14.5,27.1,14.5,48.4
                        c0,21.1-5.7,40.2-14.3,48.3c-1.1-3.8-4.6-6.6-8.7-6.6c-4.2,0-7.7,2.8-8.7,6.6C15.7,73.5,10,54.5,10,33.4 M33.1-25
                        c3.9,0,7.1,3.2,7.1,7.1c0,3.9-3.2,7.1-7.1,7.1c-3.9,0-7.1-3.2-7.1-7.1C26-21.8,29.2-25,33.1-25 M42.2,84.1c0,0,0-0.1,0-0.1
                        c9.6-7.9,16-28.2,16-50.6c0-22.5-6.4-42.7-16-50.6c0-0.2,0-0.4,0-0.6c0-5-4.1-9.1-9.1-9.1S24-22.9,24-17.9c0,0.2,0,0.4,0,0.6
                        C14.4-9.3,8,10.9,8,33.4C8,55.8,14.4,76,24,84c0,0,0,0.1,0,0.1c0,5,4.1,9.1,9.1,9.1S42.2,89.1,42.2,84.1"/>
                      <path class="st0" d="M42.3,23.4c-0.1,0-0.3,0-0.4,0c-1-3.9-4.6-6.8-8.8-6.8c-4.2,0-7.8,2.9-8.8,6.8c-0.1,0-0.3,0-0.4,0
                        c-5,0-9.1,4.1-9.1,9.1c0,5,4.1,9.1,9.1,9.1c0.4,0,0.8,0,1.2-0.1c0.5,4.6,4.3,8.2,9,8.2c4.7,0,8.6-3.6,9-8.1c4.6-0.5,8.1-4.3,8.1-9
                        C51.4,27.4,47.3,23.4,42.3,23.4z M33.1,18.6c3.9,0,7.1,3.2,7.1,7.1c0,3.9-3.2,7.1-7.1,7.1c-3.9,0-7.1-3.2-7.1-7.1
                        C26,21.7,29.2,18.6,33.1,18.6z M23.9,39.5c-3.9,0-7.1-3.2-7.1-7.1c0-3.9,3.2-7.1,7.1-7.1c0,0,0.1,0,0.1,0c0,0.1,0,0.2,0,0.3
                        c0,3.3,1.8,6.2,4.5,7.8c-1.8,1.4-3,3.5-3.3,5.9C24.8,39.5,24.3,39.5,23.9,39.5z M34.2,47.6c-3.8,0-6.9-3-7.1-6.7c0,0,0,0,0,0
                        c0-0.1,0-0.3,0-0.4c0-0.3,0-0.6,0.1-0.9c0,0,0-0.1,0-0.1c0-0.3,0.1-0.6,0.2-0.9c0.5-1.8,1.7-3.3,3.3-4.2c0.8,0.2,1.6,0.3,2.5,0.3
                        c0.1,0,0.3,0,0.4,0c0.9,3.6,4,6.3,7.7,6.7C40.7,44.9,37.8,47.6,34.2,47.6z M43.2,39.5c-0.3,0-0.6,0.1-0.9,0.1c0,0,0,0,0,0
                        c-0.4,0-0.7,0-1.1-0.1c-2.7-0.4-4.9-2.4-5.7-5c3.9-1.1,6.7-4.6,6.7-8.8c0-0.1,0-0.2,0-0.3c0,0,0.1,0,0.1,0c3.9,0,7.1,3.2,7.1,7.1
                        C49.4,36,46.7,39,43.2,39.5z"/>
                    </g>
                  </svg>
                <h3>ANIMATION</h3>
              </router-link>
            </b-col>
            <b-col md="4">
              <a href="http://www.merissahermanson.com/photography" target="_blank">
                <svg viewBox="0 0 117 89" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g class="other-icon" transform="translate(-29.000000, -43.000000)" fill-rule="nonzero">
                      <path d="M98.7825476,42.9998469 L103.808,51.576 L137.582577,51.5761847 C142.173239,51.5761847 145.747099,55.6007776 145.87554,60.3891723 L145.87554,60.3891723 L145.879115,60.6559593 L145.879115,122.5778 C145.879115,127.493152 142.251965,131.717683 137.582577,131.717683 L137.582577,131.717683 L38.1775769,131.717683 C33.3917707,131.717683 28.9998846,127.346035 28.9998846,122.5778 L28.9998846,122.5778 L28.9998846,60.6559593 C28.9998846,55.8959582 33.3833342,51.5761847 38.1775769,51.5761847 L38.1775769,51.5761847 L71.999,51.576 L76.5466922,42.9998469 L98.7825476,42.9998469 Z M97.636,44.999 L77.749,44.999 L73.2026924,53.5761847 L38.1775769,53.5761847 C34.4814058,53.5761847 30.9998846,57.0071316 30.9998846,60.6559593 L30.9998846,60.6559593 L30.9998846,122.5778 C30.9998846,126.239393 34.4942775,129.717683 38.1775769,129.717683 L38.1775769,129.717683 L137.582577,129.717683 C141.073956,129.717683 143.879115,126.450523 143.879115,122.5778 L143.879115,122.5778 L143.879115,60.6559593 C143.879115,56.7975083 141.085371,53.5761847 137.582577,53.5761847 L137.582577,53.5761847 L102.662222,53.5761847 L97.636,44.999 Z M85.4210769,66.7559668 C98.1699321,66.7559668 108.507038,77.0457638 108.507038,89.7411574 C108.507038,102.436551 98.1699321,112.726348 85.4210769,112.726348 C72.6722217,112.726348 62.3351154,102.436551 62.3351154,89.7411574 C62.3351154,77.0457638 72.6722217,66.7559668 85.4210769,66.7559668 Z M85.4210769,68.8909668 C73.8491629,68.8909668 64.4701154,78.2270896 64.4701154,89.7411574 C64.4701154,101.255225 73.8491629,110.591348 85.4210769,110.591348 C96.992991,110.591348 106.372038,101.255225 106.372038,89.7411574 C106.372038,78.2270896 96.992991,68.8909668 85.4210769,68.8909668 Z" id="Combined-Shape"></path>
                  </g>
                </svg>
              <h3>PHOTOGRAPHY</h3>
              </a>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
    <section id="reading">
      <div class="container">
        <h2>Reading List</h2>
        <p>Some of my favorite books.</p>
        <ul class="row">
          <template v-for="read in reads">
            <li class="col-md-3 col-sm-6 col-6">
              <b-img-lazy fluid v-bind:src="read.img"/>
            </li>
          </template>
        </ul>
      </div>
    </section>
    <section id="contact">
      <div class="container">
        <h2><strong>CONTACT</strong></h2>
        <h3 class="text-center">Merissa.Hermanson@gmail.com</h3>
        <p>I'm only a click away</p>
        <a href="mailto:merissa.hermanson@gmail.com" target="_blank">
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
    data() {
      return {
        tools: [
          {img: '/static/images/tools_ps.svg'},
          {img: '/static/images/tools_css.svg'},
          {img: '/static/images/tools_jquery.svg'},
          {img: '/static/images/tools_sublime.svg'},
          {img: '/static/images/tools_invision.svg'},
          {img: '/static/images/tools_sketch.svg'},
          {img: '/static/images/tools_bootstrap.svg'},
          {img: '/static/images/tools_html.svg'},
          {img: '/static/images/tools_illustrator.svg'},
          {img: '/static/images/tools_github.svg'},
          {img: '/static/images/tools_js.svg'},
          {img: '/static/images/tools_sass.svg'},
          {img: '/static/images/tools_vue.svg'},
          {img: '/static/images/tools_xd.svg'},
          {img: '/static/images/tools_google.svg'},
          {img: '/static/images/tools_fresh.svg'}
        ],
        reads: [
          {img: '/static/images/read-manager.jpg'},
          {img: '/static/images/read-culture-code.jpg'},
          {img: '/static/images/read-friends.jpg'},
          {img: '/static/images/read-100.jpg'},
          {img: '/static/images/read-design.jpg'},
          {img: '/static/images/read-think.jpg'},
          {img: '/static/images/read-team-one.jpg'},
          {img: '/static/images/read-lean.jpg'},
          {img: '/static/images/read-blink.jpg'},
          {img: '/static/images/read-interviewing.jpg'}
        ]
      }
    },
    methods: {
       // Scroll on button click
       buttonScroll(){
        $('#table').animatescroll();
       },
      animateStudio(){
        // init controller
        const self = this;
        const controller = new this.$scrollmagic.Controller({
          globalSceneOptions: {
            triggerHook:"onLeave"
          }
        });

        TweenMax.set("#tabletop-easel", {bottom: "+=1000"});
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

          .to("#tabletop-easel", 1, {bottom: "-=1000",
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
          duration: 770
        })
        .setPin(".start", {pushFollowers: false})
        .addTo(controller);

        var startpin1 = new this.$scrollmagic.Scene({
          duration: 770
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
      windowresize(){
        window.addEventListener('resize', () => {window.location.reload();})
        console.log(this.windowHeight);
      },
    },
    mounted: function () {
      this.animateStudio();
      this.clock();
      this.steam();
      //this.windowresize();
    }
  }
</script>

<style lang="scss" scoped>
/* About */

#about {
  text-align: center;
  padding-top: 30px;
  img {
    max-height: 120px;
    margin:auto;
  }
  p {
    padding-bottom: 50px;
  }
}
  /*tools*/
#tools {
  padding: 30px 0;
  margin-bottom:20px;
  background-color: #edf2f7;

  ul {
    padding:0;
    margin-top:25px;

    li {
      list-style: none;
      display: inline-block;
      padding:20px;
      text-align: center;

      img {
        max-width: 160px;
        text-align: center;
        line-height: 150px;
        height:130px;
      }
    }
  }
}
#reading {
  padding: 30px 0;
  margin-bottom:0;
  background-color: #edf2f7;

  ul {
    padding:0;
    margin-top:25px;

    li {
      list-style: none;
      display: inline-block;
      padding:20px;
      text-align: center;

      img {
        text-align: center;
      }
    }
  }
}

/* Contact */

#contact {
  background-color: #5691B6;
  color: #FFF;
  padding-bottom: 80px;

  h2 {
    color: #fff;
    margin-bottom: 0px;
  }
  h3 {
    padding:0;
  }
  a {
    display: block;
    text-align: center;
  }
}
</style>