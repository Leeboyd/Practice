<template lang="html">
  <div class="container-fluid">
    <ul class="sub-menu collapse" id="banner-menu">
        <li><router-link to="/home">Home</router-link><li>
        <li><router-link to="/foo">Foo</router-link><li>
        <li><router-link to="/chattingroom">chattingroom</router-link><li>
    </ul>
    <router-view></router-view>

  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {

    }
  },

  methods: {
    ...mapActions(['listCate']),
    //--------------------------------
    // 取得資料
    //--------------------------------
    getCate () {
      api.listCate((error, result) => {
        if (error) {

        } else {
          this.listCate(result.categories)
        }
      })
    },
  },

  computed: {
    ...mapState({
      categories: ({cate}) => cate.categories
    }),
    ...mapGetters([
      'sidMapping',
    ])
  },

  mounted() {

  },

  components: {

  },
}
</script>
