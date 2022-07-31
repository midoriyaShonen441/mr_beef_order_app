<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <div class="footer"></div>
</template>

<style >
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100;200;300;400;500;600&display=swap');

body{
  padding:0;
  margin:0;
  background: rgb(47, 47, 47);
  font-family: 'Noto Sans Thai', sans-serif;
}

.footer{
  margin-top: 20px;
}
</style>
