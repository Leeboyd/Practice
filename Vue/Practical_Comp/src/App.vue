<template>
  <navbar></navbar>
  <div class="container-fluid">
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
export default {
  data() {
    return {

    }
  },

  ready() {
    console.log('What')
  },

  components: {
    navbar: Nav,
  },
}
</script>

<style>
  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .container-fluid {
    min-width: 100%;
  }
</style>
