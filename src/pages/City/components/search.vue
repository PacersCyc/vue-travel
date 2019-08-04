<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" placeholder="输入城市名或拼音" class="search-input">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'citySearch',
  props: {
    cities: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'

  .search
    height: .72rem;
    background: $bgColor;
    padding: 0 .1rem;
    .search-input
      box-sizing: border-box;
      height: .62rem;
      line-height: .62rem;
      width: 100%;
      padding: 0 .1rem;
      text-align: center;
      border-radius: .06rem;
      color: #666;
  .search-content
    z-index: 1;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    overflow hidden;
    background: #eee;
    .search-item
      line-height: .62rem;
      padding-left: .2rem;
      color: #666;
      background: #fff;
</style>
