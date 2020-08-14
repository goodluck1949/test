<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer />
    <ReCommend/>
    <Rank/>
    <like/>
    <Floor/>
    <Floor/>
    <Brand/>
  </div>
</template>

<script>
import ListContainer from "./ListContainer/index";
import ReCommend from "./ReCommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
export default {
  name: "Home",
  components: { ListContainer,ReCommend,Rank,Like,Floor,Brand },
};
</script>

<style lang="less" scoped>
</style>
