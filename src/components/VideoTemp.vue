<template>
  <video autoplay v-on:mouseover="mouseOver" v-on:mouseleave="mouseLeave">
    <source v-bind:src="videosrc + '.mp4'" type='video/mp4' />
    <source v-bind:src="videosrc + '.webm'" type='video/webm' />
    Your browser does not support the video tag.
  </video>
</template>
<script>
  export default {
    name: 'VideoTemp',
    resource: 'VideoTemp',
    props: ['videosrc'],
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