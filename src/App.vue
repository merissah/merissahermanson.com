<template>
  <div id="app">
    <transition name="fade" mode="out-in" appear>
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  color: #5E5E5E;
  position: relative;
  overflow-x: hidden;
}
</style>
