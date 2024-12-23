<template>
  <div></div>
</template>

<script setup lang="ts" name="callback">
import {ref} from "vue";
import {useUserInfo} from "/@/stores/userInfo";

const emit = defineEmits(['signInSuccess']); // 声明事件名称

const route = useRoute();
const loading = ref(false);

const callback = ref({
  code: <string>route.query?.code,
  state: <string>route.query?.state,
  grant_type: 'sysu',
})

const onSignIn = async () => {
  try {
    loading.value = true;
    await useUserInfo().loginBySysu(callback.value.code, callback.value.state); // 调用登录方法
    emit('signInSuccess'); // 触发事件
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  onSignIn()
})
</script>

<style scoped>

</style>