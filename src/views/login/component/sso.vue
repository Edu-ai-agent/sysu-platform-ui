<template>
  <el-form size="large" class="login-content-form" ref="loginFormRef" @keyup.enter="handleLogin">
    <el-form-item class="login-animation3">
      <el-button type="primary" v-waves class="login-content-submit" @click="handleLogin" :loading="loading">
        <span>{{ $t('sso.btnText') }}</span>
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts" name="loginAuthCenter">
import {useI18n} from "vue-i18n";
import {ref} from "vue";

const { t } = useI18n();
const loginFormRef = ref(); // 定义LoginForm表单引用
const loading = ref(false); // 定义是否正在登录中

/**
 * 处理登录事件。
 */
const handleLogin = async () => {
  window.location.href = '/api/admin/sysu/render'
};
</script>

<style scoped>

</style>