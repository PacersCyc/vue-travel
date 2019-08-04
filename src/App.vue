<template>
  <div id="app">
    <!-- detail组件不会被缓存 -->
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
