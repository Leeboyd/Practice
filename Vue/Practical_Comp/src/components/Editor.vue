<template lang="html">
  <!-- v-cloak hides any un-compiled data bindings until the Vue instance is ready. -->
  <!-- When the element is clicked the hideTooltp() method is called. -->

  <div id="v_editor" v-cloak v-on:click="hideTooltip" >

      <!-- This is the tooltip.
           v-on:clock.stop is an event handler for clicks, with a modifier that stops event propagation.
           v-if makes sure the tooltip is shown only when the "showtooltip" variable is truthful -->

      <div class="v_tooltip" v-on:click.stop v-if="show_tooltip">

          <!-- v-model binds the contents of the text field with the "text_content" model.
           Any changes to the text field will automatically update the value, and
           all other bindings on the page that depend on it.  -->

          <input type="text" v-model="text_content">
      </div>

      <!-- When the paragraph is clicked, call the "toggleTooltip" method and stop event propagation. -->

      <!-- The mustache expression will be replaced with the value of "text_content".
           It will automatically update to reflect any changes to that variable. -->

      <p v-bind:class="{ v_edit: show_tooltip }" v-on:click.stop="toggleTooltip">{{text_content}}</p>

  </div>
</template>

<script>
export default {
  // Define properties and give them initial values.
  data() {
    return {
      show_tooltip: false,
      text_content: 'Click and Edit',
    }
  },
  computed: {},
  ready() {},
  methods: {
    hideTooltip() {
      // When a model is changed, the view will be automatically updated.
      console.log('hideTooltip: ', this.show_tooltip)
      this.show_tooltip = false
    },
    toggleTooltip() {
      console.log('toggleTooltip: ', this.show_tooltip)
      this.show_tooltip = !this.show_tooltip
    },
  },
}
</script>

<style lang="css" scoped>
/* Hide un-compiled mustache bindings
until the Vue instance is ready */

[v-cloak] {
  display: none;
}

* {
	margin:0;
	padding:0;
}

body {
	font:15px/1.3 'Open Sans', sans-serif;
	color: #5e5b64;
	text-align:center;
}

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

#v_editor{
	height:300px;
	position:relative;
	padding-top: 150px;
}


/*-------------------------
	The edit v_tooltip
--------------------------*/

.v_tooltip {
	background-color:#5c9bb7;

	background-image:-webkit-linear-gradient(top, #5c9bb7, #5392ad);
	background-image:-moz-linear-gradient(top, #5c9bb7, #5392ad);
	background-image:linear-gradient(top, #5c9bb7, #5392ad);

	box-shadow: 0 1px 1px #ccc;
	border-radius:3px;
	width: 290px;
	padding: 10px;

	position: absolute;
	left:50%;
	margin-left:-150px;
	top: 80px;
}

.v_tooltip:after {
	/* Triangle */
	content:'';
	position:absolute;
	border:6px solid #5190ac;
	border-color:#5190ac transparent transparent;
	width:0;
	height:0;
	bottom:-12px;
	left:50%;
	margin-left:-6px;
}

.v_tooltip input {
	border: none;
	width: 100%;
	line-height: 34px;
	border-radius: 3px;
	box-shadow: 0 2px 6px #bbb inset;
	text-align: center;
	font-size: 16px;
	font-family: inherit;
	color: #8d9395;
	font-weight: bold;
	outline: none;
}

p {
	font-size:3em;
	font-weight:bold;
	color:#6d8088;
	height: 30px;
	cursor:default;
  text-align: center;
}

p:before {
	content:'✎';
	display:inline-block;
	margin-right:5px;
	font-weight:normal;
	vertical-align: text-bottom;
}

.v_edit {
  color: #E35885;
}
</style>
