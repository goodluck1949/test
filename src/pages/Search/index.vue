<template>
  <div>Search
    <!-- params参数:{{$route.params.keyword}} -->
    params参数简便获取:{{keyword}}
    <!-- query参数:{{$route.query.keyword}} -->
    query参数简便获取:{{keyword2}} -->
  </div>
</template>

<script>
export default {
  name: 'Search',
  props:['keyword','keyword2','name']
}
</script>

<style lang="less" scoped>

</style>
