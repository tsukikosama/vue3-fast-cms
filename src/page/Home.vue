<script setup lang="ts">

import Navbar from "../components/Navbar.vue";
import Mnue from "../components/Mnue.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header><Navbar></Navbar></el-header>
      <el-container>
        <el-aside width="200px"><Mnue></Mnue></el-aside>
        <el-main>


              <router-view ></router-view>

        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<style scoped>

</style>
