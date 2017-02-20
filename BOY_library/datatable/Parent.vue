<template lang="html">
  <div class="col-xs-10" v-cloak>
      <h1 class="page-header col-xs-10">會員資料頁</h1>
      <div class="page-header col-xs-2 addone">
          <button type="button" class="btn btn-info btn-cos btn-sm" @click.self.prevent="refresh()"><span class="glyphicon glyphicon-link" aria-hidden="true"> </span> 重新整理</button>
      </div>
      <table-view :rows="rows"
               :titles='titles'
               ref="table"
               v-show="loading">
      </table-view>
      <img class="img-thumbnail" src="../assets/images/loading.gif" v-show="!loading">
  </div>
</template>

<script>
import table from './table.vue'
export default {
  data () {
    return {
      titles:
      [
        {
          name: '帳號',
          key: 'username'
        },
        {
          name: '暱稱',
          key: 'name'
        },
        {
          name: '性別',
          key: 'gender'
        },
        {
          name: '存款',
          key: 'currency'
        }
      ],
      loading: false,
      rows: []
    }
  },


  mounted: async function() {
    this.rows = await this.getData()
    setTimeout(()=> this.loading = true, 0)
  },

  methods: {
    getData() {
      return new Promise((resolve, reject) => {

          ajax((error, result) => {
            if (error) {
              resolve()
            } else {
              resolve(result)
            }
          })

      });
    },
    
    refresh: async function() {
      this.loading = false
      await this.getData()
      setTimeout(()=> this.loading = true, 0)
    },

    update(set) {
      // some action
    },
    detail(set) {
      // some action
    },

  },

  components: {
    'table-view': table,
  }
}
</script>
