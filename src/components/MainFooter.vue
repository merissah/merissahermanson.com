<template>
  <footer>
    <div class="container">
      <ul class="social-media">
        <li>
          <a href="https://plus.google.com/share?url=http%3A%2F%2Fmerissahermanson.com" target="_blank">
            <b-img fluid src="/static/images/sm_g+.png" alt="Google Plus"/>
          </a>
        </li>
        <li>
          <a href="http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fmerissahermanson.com" target="_blank">
            <b-img fluid src="/static/images/sm_pintrist.svg" alt="Pintrist"/>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/sharer/sharer.php?u=Merissahermanson.com" target="_blank">
            <b-img fluid src="/static/images/sm_fb.svg" alt="Facebook"/>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/intent/tweet?text=Home&url=http%3A%2F%2Fmerissahermanson.com" target="_blank">
            <b-img fluid src="/static/images/sm_twitter.svg" alt="Twitter"/>
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