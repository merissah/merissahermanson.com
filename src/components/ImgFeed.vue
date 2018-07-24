<template>
  <b-row class="portfolio-section">
    <b-col cols="3" v-for="image in images" :key="image.id" class="portfolio-item" :class="art">
      <router-link v-if="!art" :to="`/${image.id}`">
        <b-img fluid :src="image.src" :alt="image.title"/>
        <div class="info">
          <div class="info-content-wrap">
            <div class="info-content">
              <h3>{{ image.title }}</h3>
            </div>
          </div>
        </div>
      </router-link>
      <a v-if="art" :href="image.src.replace('-sm','')">
        <b-img fluid :src="image.src" :alt="image.title"/>
        <div class="info">
          <div class="info-content-wrap">
            <div class="info-content">
              <h3>{{ image.title }}</h3>
              <p>{{ image.size }}</p>
            </div>
          </div>
        </div>
      </a>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'img-feed',
  resource: 'ImgFeed',
  props: ['imgCategory', 'art'],

  data() {
    return {
      images: []
    }
  },
  beforeMount() {
    this.$getResource(this.imgCategory)
      .then(images => {
        this.images = images
      })
  }
}
</script>
<style lang="scss" scoped>

@import '../assets/sass/simplelightbox.scss';

  .portfolio-item.art {
    text-align: center;
    -ms-flex: 0 0 23%;
    flex: 0 0 23%;
    max-width: 23%;
    img {
      padding:0;
      margin:0;
    }
  }

</style>
