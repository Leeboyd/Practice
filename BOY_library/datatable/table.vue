<template>
  <div class="row" v-cloak>
    <div class="col-xs-6">
      <label>每頁顯示
        <select v-model="limit">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select> 筆資料</label>
    </div>
    <div class="col-xs-6">
      <div class="form-group row" style="height: 30px; line-height: 30px;">
        <label for="search-input" class="col-xs-3 col-xs-offset-3 col-form-label"></label>
        <div class="col-xs-5 input-group">
          <div class="input-group-addon"><span class="glyphicon glyphicon-search"></span></div>
          <input v-model="query" class="form-control input-sm" type="search" placeholder="搜尋..." id="search-input">
        </div>
      </div>
    </div>
    <div class="table-cos">
      <table class="table table-hover">
        <!-- 表格標題 -->
        <thead>
          <tr>
            <th v-for="title of titles" :key="title.key">{{ title.name }} <span class="glyphicon" :class="[isAlter ? 'glyphicon-sort-by-attributes-alt': 'glyphicon-sort-by-attributes']" @click="toggleIcon(title.key)" ></span></th>
            <th>詳細</th>
            <th>編輯</th>
          </tr>
        </thead>
        <!-- 表格內容 -->
        <tbody>
          <tr v-for="set of datasets" :key="set.id">
            <td v-for="value in set">{{ value }}</td>
            <td><button type="button" class="btn btn-success btn-sm" @click.stop.prevent="toDetail(set)" :disabled="isProcess"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></button></td>
            <td><button type="button" class="btn btn-info btn-sm" @click.stop.prevent="toUpdate(set)"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="pagination">
      <button class="btn btn-primary btn-cos" :disabled="backpage" type="button" @click="changePage(-1)">上一頁</button>
      目前在第<input v-model="page" type="text">頁 共{{ total }}頁
      <button class="btn btn-primary btn-cos" :disabled="nextpage" type="button" @click="changePage(1)">下一頁</button>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    rows: {
      type: Array,
      default: () => {
        return []
      }
    },
    titles: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      limit: 10,
      query: '',
      page: 1,
      sort: {},
      total: 0,
      isAlter: true,
      isProcess: false,
    }
  },
  computed: {
    //--------------------------------
    // 資料列表即時處理 ＆ render
    //--------------------------------
    datasets () {
      let arr = []
      arr = this.rows
      arr = this.queryFilter(arr)
      this.sortTable(arr)
      arr = this.paginate(arr)
      return arr
    },
    //--------------------------------
    // 上下一頁按鈕行為
    //--------------------------------
    backpage() {
      if (this.page === 1) {
        return true
      }
    },
    nextpage() {
      if (this.page === this.total) {
        return true
      }
    }
  },

  methods: {
    //--------------------------------
    // 表格排序觸發鈕
    //--------------------------------
    toggleIcon (sorted) {
      this.isAlter = !this.isAlter
      this.sort = { key: sorted, val: -this.sort.val }
    },
    //--------------------------------
    // 表格搜尋（前端）
    //--------------------------------
    queryFilter (arr) {
      let n = 0
      arr = arr.filter((item) => {
        n++
        //--------------------------------
        // 預設全部｜id含關鍵字｜name含關鍵字｜catagory含關鍵字
        //--------------------------------
        if (this.query === '' || item.username.toLowerCase().indexOf(this.query) !== -1) {
          return true
        }
      })
      return arr
    },
    //--------------------------------
    // 表格排序
    //--------------------------------
    sortTable (arr) {
      let n = 0
      arr.sort((a, b) => {
        n++
        if (a[this.sort.key] < b[this.sort.key]) {
          return this.sort.val
        } else {
          if (a[this.sort.key] > b[this.sort.key]) {
            return -this.sort.val
          }
        }
      })
    },
    //--------------------------------
    // 表格顯示數量切換
    //--------------------------------
    paginate (arr) {
      this.total = Math.ceil(arr.length / this.limit)
      let page = parseInt(this.page - 1)
      if (page < 0) {
        page = 0
      }
      arr = arr.slice(this.limit * page, this.limit * (page + 1))
      return arr
    },
    //--------------------------------
    // 表格切換頁面
    //--------------------------------
    changePage (num) {
      if (num === 1) {
        if (this.page < this.total) {
          this.page++
        } else {
          console.log('沒有啦')
        }
      } else {
        if (this.page > 1) {
          this.page--
        } else {
          console.log('已是第一頁啦')
        }
      }
    },
    //--------------------------------
    // (父層處理動作)
    //--------------------------------
    toUpdate (set) {
      this.$parent.update(set)
    },
    toDetail (set) {
      this.$parent.detail(set)
    }
  }
}
</script>

<style lang="css">
  .table-cos {
    width: 90%;
    margin: 0 auto;
    font-size: 16px;
  }

  .table-cos th, .table-cos td {
    text-align: center;
  }

  .pagination {
    display: block;
    border-radius: 4px;
    text-align: center;
  }

  .pagination > input {
    width: 4em;
  }
</style>
