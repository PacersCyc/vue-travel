<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
          title: '西溪国家湿地公园.周家村',
          desc: '渔庄烟雨的“烟雨”，有“柳烟、云烟、炊烟”三烟之妙，人、烟、水共处，犹如身临仙境。'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
          title: '西溪国家湿地公园.周家村',
          desc: '渔庄烟雨的“烟雨”，有“柳烟、云烟、炊烟”三烟之妙，人、烟、水共处，犹如身临仙境。'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
          title: '西溪国家湿地公园.周家村',
          desc: '渔庄烟雨的“烟雨”，有“柳烟、云烟、炊烟”三烟之妙，人、烟、水共处，犹如身临仙境。'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top: .2rem;
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
  .item
    .item-img-wrapper
      height: 0;
      overflow hidden;
      padding-bottom: 33.9%;
    .item-img
      width: 100%;
    .item-info
      padding: .1rem;
      .item-title
        line-height: .54rem;
        font-size: .32rem;
        ellipsis()
      .item-desc
        line-height: .4rem;
        color: #ccc;
        ellipsis()
</style>
