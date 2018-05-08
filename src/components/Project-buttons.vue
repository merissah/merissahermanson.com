<template>
  <div class="port-button">
    <b-button v-bind:href="links.prototype" target="_blank" size="lg" variant="primary">
      View Prototype
    </b-button>
  </div>
</template>
<script>
  export default {
    name: 'home',
    data() {
      return {
        links: [
          {id: 0, prototype: 'https://sensorly.com', site: 'https://sensorly.com'},
          {id: 1, prototype: 'https://sensorly.com', site: 'https://sensorly.com'},
          {id: 2, prototype: 'https://sensorly.com'}
        ]
      };
    },
  }
</script>