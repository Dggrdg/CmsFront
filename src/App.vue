<template>
  <div>
    <Header></Header>
  </div>
  <div id="routerView">
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import Header from "./components/Header.vue";
</script>

<style>
</style>
