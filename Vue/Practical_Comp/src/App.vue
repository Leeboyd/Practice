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
    font:15px/1.3 'Open Sans', sans-serif;
    color: #5e5b64;
  }
  .container-fluid {
    min-width: 100%;
  }
  /* Hide un-compiled mustache bindings
  until the Vue instance is ready */

  [v-cloak] {
    display: none;
  }

  /** {
  	margin:0;
  	padding:0;
  }*/

  a, a:visited {
  	outline:none;
  	color:#389dc1;
  }

  a:hover{
  	text-decoration:none;
  }

  section, footer, header, aside, nav{
  	display: block;
  }
</style>
