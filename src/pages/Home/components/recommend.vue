<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1907/40/401b7b735008f7f4a3.img.jpg_200x200_10ce515e.jpg',
          title: '西溪国家湿地公园.周家村',
          desc: '渔庄烟雨的“烟雨”，有“柳烟、云烟、炊烟”三烟之妙，人、烟、水共处，犹如身临仙境。'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1907/40/401b7b735008f7f4a3.img.jpg_200x200_10ce515e.jpg',
          title: '西溪国家湿地公园.周家村',
          desc: '渔庄烟雨的“烟雨”，有“柳烟、云烟、炊烟”三烟之妙，人、烟、水共处，犹如身临仙境。'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1907/40/401b7b735008f7f4a3.img.jpg_200x200_10ce515e.jpg',
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
    display: flex;
    height: 1.9rem;
    overflow hidden;
    .item-img
      width: 1.7rem;
      height: 1.7rem;
      padding: .1rem;
    .item-info
      min-width: 0;
      flex: 1;
      padding: .1rem;
      .item-title
        line-height: .54rem;
        font-size: .32rem;
        ellipsis()
      .item-desc
        line-height: .4rem;
        color: #ccc;
        ellipsis()
      .item-btn
        line-height: .44rem;
        background: #ff9300;
        padding: 0 .2rem;
        border-radius: .06rem;
        margin-top: .16rem;
        color: #fff;
</style>
