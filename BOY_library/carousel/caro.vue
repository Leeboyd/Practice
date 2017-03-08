<template>
  <div class="slide-wrap clearfix">

      <span class="prev" @click="next(-1)"><span class="icon">&nbsp;&lt;&nbsp;&nbsp;</span></span>
      <span class="next" @click="next(1)"><span class="icon">&nbsp;&nbsp;&gt;&nbsp;</span></span>

      <transition-group name="fade" tag="div" class="slide">
        <img v-for="img in imgList" v-if="currentIndex === img.ind" :key="img.ind" :src="img.src">
      </transition-group>

      <div class="slide-content" v-for="img in imgList">
        <span v-if="currentIndex === img.ind">
          <h2 class="title">{{ img.title }}</h2>
          <h3 class="tagline">{{ img.tagline }}</h3>
          <a class="call-to-action" href="#">{{ img.call }} &gt;</a>
        </span>
      </div>
      <ul class="slide-jump">
        <li v-for="img in imgList" :key="img.ind" v-bind:class="[currentIndex === img.ind ? 'active' : '']" @click.stop="imgIndex = img.ind"></li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgIndex: 1,
      imgList: [
        {
          "src": "//cdn.shopify.com/s/files/1/0254/0393/t/5/assets/slide-image-2.jpg?7985256824123693536",
          "ind": 1,
          "title":"OTAs Sign",
          "tagline": "Full service. No compromises.",
          "call":"It merely takes you 5 mins to sign over 300 OTAs."
        },
        {
          "src": "//cdn.shopify.com/s/files/1/0254/0393/t/5/assets/slide-image-3.jpg?7985256824123693536",
          "ind": 2,
          "title":"Hotels.com",
          "tagline": "飯店專家 專注為你",
          "call":"即刻出發 正是時候"
        },
        {
          "src": "//cdn.shopify.com/s/files/1/0254/0393/t/5/assets/slide-image-4.jpg?7985256824123693536",
          "ind": 3,
          "title":"Booking.com",
          "tagline": "不收手續費 •  為你省荷包",
          "call":"每日放送－適合各種價位的最新優惠！"
        },
        {
          "src": "//cdn.shopify.com/s/files/1/0254/0393/t/5/assets/slide-image-5.jpg?7985256824123693536",
          "ind": 4,
          "title":"日本 Iris Ohyama",
          "tagline": "真空旋風吸頭 UV深層殺菌",
          "call":"紫外線殺菌除蹣無線吸塵器"
        },
        {
          "src": "//cdn.shopify.com/s/files/1/0254/0393/t/5/assets/slide-image-6.jpg?7985256824123693536",
          "ind": 5,
          "title":"PONTE Leather Co.",
          "tagline": "脖子無負擔 輕鬆捕捉精彩瞬間",
          "call":"專為旅行設計的相機背帶"
        }
      ]
    }
  },

  computed: {
    currentIndex() {
      if (!this.imgIndex) {
        return this.imgIndex = this.imgList.length
      }
      if (!(this.imgIndex % this.imgList.length)) {
        return this.imgList.length
      }
      return this.imgIndex % this.imgList.length
    }
  },

  methods: {
    next(ind) {
      this.imgIndex += ind
    }
  },

  components: {
  },
}
</script>
