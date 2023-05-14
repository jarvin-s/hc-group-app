<template>
  <Navbar />
  <RouterView/>
</template>
<script setup>
import { RouterView, RouterLink } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
</script>