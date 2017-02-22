<template lang="html">
  <div class="col-xs-10" v-cloak>
      <h1 class="page-header">實驗室:使用Vuex</h1>
      <div class="chattingroom">
        <section class="col">
          <client clientid="待辦事項"></client>
        </section>
        <section class="col">
          <client clientid="回報"></client>
        </section>
      </div>
  </div>
</template>

<script>
import Client from '../components/Client.vue'
export default {
  data() {
    return {

    };
  },
  computed: {},

  mounted() {

  },

  methods: {

  },
  components: {
    Client
  }
};
</script>

<style lang="css">
  .chattingroom {
    display: table;
    width: 100%;
  }
  .col {
    display: table-cell;
    vertical-align: top;
    padding: 2em;
  }
</style>
