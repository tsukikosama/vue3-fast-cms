

<template>
    <div class="cc_content" >
      <!--   left   -->
      <div class="left">
          test
      </div>
    <!--        right-->
      <div class="right">
        <el-form>
          <el-form-item >
            <el-span>登录到未来后台管理系统</el-span>
          </el-form-item>
          <el-form-item  prop="name">
            <el-input placeholder="用户名" />
          </el-form-item>
          <el-form-item prop="name">
            <el-input placeholder="密码" />
          </el-form-item>
          <el-form-item prop="name">
            <el-checkbox v-model="realme" label="记住密码" size="large" />
          </el-form-item>
          <el-button >登录</el-button>
        </el-form>
      </div>
    </div>
</template>

<script setup lang="ts">
    import {ref} from "vue";

    const realme = ref(true);
</script>


<style scoped>
  .cc_content{
    display: flex;
    height: 100vh;
  }
  .left{
    width: 40vw;
    background: #363d79;
  }
  .right{
    width: 60vw;
    margin: auto;
    display: flex;
    justify-content: center;
  }
  .right .el-input{
    width: 300px;
  }

  .right .el-button{
    width: 300px;
  }
</style>
