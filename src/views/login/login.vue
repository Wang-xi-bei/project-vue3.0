<template>
  <div class="hello">登录</div>
  <span>{{ $store.state.name }}</span>
  <el-button type="info">Info</el-button>
  <el-button type="success">Info</el-button>
  <el-button type="warning">Info</el-button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Login',
  components: {},
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less"></style>
