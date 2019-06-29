<template>
  <div id="app">
    <el-container class="container">
      <el-header class="Header" v-if="!$route.meta.headerAsideShow">Header</el-header>
      <el-container>
        <el-aside class="Aside" v-if="!$route.meta.headerAsideShow" width="200px">
          <el-menu :unique-opened="true" :router="true">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item index="/user">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>用户列表</span>
                </template>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>权限管理</span>
              </template>
              <el-menu-item index="/role">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>角色列表</span>
                </template>
              </el-menu-item>
              <el-menu-item index="/role">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>权限列表</span>
                </template>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item index="1-1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>商品列表</span>
                </template>
              </el-menu-item>
              <el-menu-item index="1-1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>分类参数</span>
                </template>
              </el-menu-item>
              <el-menu-item index="1-1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>商品分类</span>
                </template>
              </el-menu-item>

            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item index="1-1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>订单列表</span>
                </template>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>数据统计</span>
              </template>
              <el-menu-item index="1-1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>数据报表</span>
                </template>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main class="Main">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app, .container
    width 100%
    height 100%

  .Header
    width 100%
    background #324152

  .Aside
    background #324152
    height 100%

  .Main
    background #f5f5f5
    height 100%
</style>
