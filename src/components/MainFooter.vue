<template>
  <footer>
    <div class="container">
      <ul class="social-media">
        <li>
          <a href="https://www.linkedin.com/in/merissa-hermanson-8758588b/" target="_blank">
            <b-img fluid src="/static/images/sm_linkedin.svg" alt="Linkedin"/>
          </a>
        </li>
        <li>
          <a href="https://github.com/MerissaHermanson" target="_blank">
            <b-img fluid src="/static/images/sm_github.svg" alt="Twitter"/>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/merissa.wisehermanson" target="_blank">
            <b-img fluid src="/static/images/sm_fb.svg" alt="Facebook"/>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  footer {
  text-align: center;
  padding-bottom: 20px;
  padding-top: 20px;
  background-color: #4D4C4C;
  
    .social-media {
      padding-left: 0px;
    }
    .social-media li {
      list-style: none;
      display: inline-block;
      padding-right: 10px;
    }
    .social-media a img {
      width:40px;
      height: 40px;
    }

    .social-media a:hover {
      opacity: 0.6;
    }
  }
</style>