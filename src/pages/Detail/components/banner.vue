<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{this.galleryImgs.length}}
        </div>
      </div>
    </div>
    <common-gallery :imgs="galleryImgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/gallery'
export default {
  name: 'detailBanner',
  components: {
    CommonGallery
  },
  props: {
    sightName: String,
    bannerImg: String,
    galleryImgs: Array
  },
  data () {
    return {
      imgs: [
        'http://img1.qunarzz.com/sight/p0/201405/29/0290f90b03596cdef35d73e753e635ee.jpg_r_800x800_c2193e10.jpg',
        'http://img1.qunarzz.com/sight/p58/201211/09/14c6f220cc746b0693835fbb.jpg_r_800x800_7c83bd12.jpg'
      ],
      showGallery: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    .banner-img
      width: 100%;
    .banner-info
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: .6rem;
      color: #fff;
      background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8));
      .banner-title
        flex: 1;
        font-size: .32rem;
        padding: 0 .2rem;
      .banner-number
        margin-top: .14rem;
        padding: 0 .4rem;
        line-height : .32rem;
        height: .32rem;
        font-size: .24rem;
        border-radius: .2rem;
        background: rgba(0, 0, 0, .8);
        .banner-icon
          font-size: .24rem;
</style>
