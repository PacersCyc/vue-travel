<template>
  <div class="wrapper">
    <!-- 利用v-if避免空数组创建的轮播图在数据渲染后出现最后一张占位的情况 -->
    <swiper :options="swiperOption" v-if="showSwipers">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'homeSwiper',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoPlay: true
      }
    }
  },
  computed: {
    showSwipers () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
      background: #fff;
  .wrapper
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
    overflow hidden;
    background-color: #eee;
    .swiper-img
      width: 100%;
</style>
