<template>
  <div class="nav-menu">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!--  -->
      <el-submenu v-for="(item,index) in navMenuList" :key="index" :index="(index)">
        <template slot="title">
          <i :class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-submenu index="1-1">
          <span slot="title">选项4</span>
          <el-menu-item index="1-1-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <!-- <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item> -->
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isCollapse: false,
      navMenuList:[]
    };
  },
  methods: {
    pullData(){
      // this.navMenuList = [
      //   {
      //     icon:String:'el-icon-location',
      //     name:'导航一',
      //     path:'',
      //     children:[]
      //   }
      // ];
    },
    handleOpen(key:String, keyPath:String) {
      console.log(key, keyPath);
    },
    handleClose(key:String, keyPath:String) {
      console.log(key, keyPath);
    }
  },
  created() {
    this.pullData();
  },
};
</script>

<style lang="scss" scoped>
.nav-menu {
  position: relative;
  .el-submenu .el-menu-item {
    min-width: auto;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  height: 100%;
  border-right: none;
}
</style>