<template>
  <nav class="navbar navbar-default navbar-fixed-top" role="navigation" v-bind:class="active" v-on:click.prevent>
    <div class="container-fluid">
      <!-- When a link in the menu is clicked, we call the makeActive method,
          defined in the JavaScript Vue instance. It will change the value of "active". -->
      <a v-link="{ path: '/home' }" class="home" v-on:click="makeActive('home')">Home</a>
      <a v-link="{ path: '/editor' }" class="editor" v-on:click="makeActive('editor')">Editor</a>
      <a v-link="{ path: '/services' }" class="services" v-on:click="makeActive('services')">Services</a>
      <a v-link="{ path: '/courses' }" class="courses" v-on:click="makeActive('courses')">Courses</a>
      <a v-link="{ path: '/grid' }" class="grid" v-on:click="makeActive('grid')">Grid</a>

      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
	</nav>
  <p>You are now at <b>{{active}}</b></p>
</template>

<script>
export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      active: 'home',
    }
  },

  methods: {
    makeActive(item) {
      // When a model is changed, the view will be automatically updated.
      this.active = item
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
nav{
	display:inline-block;
	/*margin:60px auto 45px;*/
	background-color:#5597b4;
	box-shadow:0 1px 1px #ccc;
	border-radius:2px;
}

nav a{
	display:inline-block;
	padding: 18px 30px;
	color:#fff !important;
	font-weight:bold;
	font-size:16px;
	text-decoration:none !important;
	/*line-height:1;*/
	text-transform: uppercase;
	background-color:transparent;

	-webkit-transition:background-color 0.25s;
	-moz-transition:background-color 0.25s;
	transition:background-color 0.25s;
}

nav a:first-child{
	border-radius:2px 0 0 2px;
}

nav a:last-child{
	border-radius:0 2px 2px 0;
}

nav.home .home,
nav.editor .editor,
nav.services .services,
nav.courses .courses,
nav.grid .grid{
	background-color:#e35885;
}

p{
	font-size:22px;
	font-weight:bold;
	color:#7d9098;
  position: fixed;
  top: 6%;
  right: 0%;
  z-index: 2000;
}

p b{
	color:#ffffff;
	display:inline-block;
	padding:5px 10px;
	background-color:#c4d7e0;
	border-radius:2px;
	text-transform:uppercase;
	font-size:18px;
}
</style>
