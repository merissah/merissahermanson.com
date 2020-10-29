<template>
  <video autoplay v-on:mouseover="mouseOver" v-on:mouseleave="mouseLeave" v-bind:poster="poster">
    <source v-bind:src="videosrc + '.mp4'" type='video/mp4' />
    <source v-bind:src="videosrc + '.webm'" type='video/webm' />
    Your browser does not support the video tag.
  </video>
</template>
<script>
export default {
  name: 'VideoTemp',
  resource: 'VideoTemp',
  props: ['videosrc', 'poster'],
  methods: {
    mouseOver: function() {
      $(event.target).get(0).play();
    },
    mouseLeave: function(){
      $(event.target).get(0).pause();
    }
  }
}
</script>
<style lang="scss" scoped>
  video {
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }
  video:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
</style>