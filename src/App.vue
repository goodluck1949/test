<template>
  <div >
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Router from '@/router'
export default {
  name:'App',
  Router,
  components:{
    Header,
    Footer
  }
}

</script>

<style>
</style>