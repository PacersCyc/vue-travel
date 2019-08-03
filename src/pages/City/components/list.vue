<template>
  <div class="list" ref="wrapper">
    <div ref="content">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">杭州</div>
          </div>
          <div class="button-wrapper">
            <div class="button">杭州</div>
          </div>
          <div class="button-wrapper">
            <div class="button">杭州</div>
          </div>
          <div class="button-wrapper">
            <div class="button">杭州</div>
          </div>
          <div class="button-wrapper">
            <div class="button">杭州</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">杭州</div>
          </div>
          <div class="button-wrapper">
            <div class="button">杭州</div>
          </div>
          <div class="button-wrapper">
            <div class="button">杭州</div>
          </div>
          <div class="button-wrapper">
            <div class="button">杭州</div>
          </div>
          <div class="button-wrapper">
            <div class="button">杭州</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">B</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">C</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'cityList',
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper)
    })
    // this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'

  .border-topbottom
    &::before
      border-color: #ccc;
    &::after
      border-color: #ccc;
  .border-bottom
    &::before
      border-color: #ccc;
  .list
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
  .title
    line-height: .54rem;
    font-size: .26rem;
    background: #eee;
    padding-left: .2rem;
    color: #666;
  .button-list
    padding: .1rem .6rem .1rem .1rem;
    overflow hidden;
    .button-wrapper
      width: 33.33%;
      float: left;
      .button
        padding:.1rem 0;
        border-radius: .06rem;
        text-align: center;
        margin: .1rem;
        border: .02rem solid #ccc;
  .item-list
    .item
      line-height: .76rem;
      // color: #666;
      padding-left:.2rem;
</style>
