<template>
  <div>
    <el-container class="header">
      <el-row  class="row"  :gutter="24">
          <el-col class="pd0" :lg="24" >
              <!-- 引入头部 -->
              <public-header></public-header>
          </el-col>
      </el-row>
    </el-container>
    <!--  -->
    <el-container class="main">
      <el-row class="row" :gutter="24">
          <el-col class="left" :xs="4" :sm="4" :md="4"  :xl="4" :lg="4" >
              <!-- 引入左侧导航 -->
              <nav-menu></nav-menu>
          </el-col>
          <el-col class="right" :xs="20" :sm="20" :md="20"  :xl="20" :lg="20">
              <!-- 引入右侧内容 -->
              <component :is="componentId"></component>
          </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script lang="ts">
import navMenu from "components/nav-menu/index.vue";
import publicHeader from "components/public-header/index.vue";
import index from "views/Index/index.vue";
export default {
  data() {
    return {
      componentId: index
    };
  },
  components: {
    index,
    publicHeader,
    navMenu
  }
};
</script>
<style lang="scss" scoped>
.header{
  width: 100%;
}
.main{
  width: 100%;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 60px;
  height: 100%;
}
.row{
  width: 100%;
  margin: 0 !important;
  .left{
    height: 100%;
    background-color: #545c64;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
</style>