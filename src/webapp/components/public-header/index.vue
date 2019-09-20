<template>
  <div>
    <div class="header" >
      <div class="logo" >
        blog-admin
      </div>
      <div class="right-content">
        <el-image class="head-img" :src="headImgUrl" fit="fill"></el-image>
        <el-dropdown>
          <span class="el-dropdown-link">
            管理员<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人资料</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() { 
    return{
      headImgUrl:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
   }
};
</script>

<style lang="scss" scoped>
.header{
  display: flex;
  height: 60px;
  line-height: 60px;
  background-color: #545c64;
  border-bottom: 1px solid #f5f5f5;
  padding: 0 20px;
  .logo{
    color: #ffd04b;
    font-weight: bold;
    font-size: 22px;
  }
  .right-content{
    display: flex;
    align-items: center;
    margin-left: auto;
    .head-img{
      width: 40px;
      height: 40px;
      margin-right: 15px;
      border-radius: 50%;
    }
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #ffffff;
  font-size: 14px;
}
.el-icon-arrow-down {
  font-size: 14px;
}
</style>