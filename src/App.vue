<template>
  <div class="w-5/6 mx-auto">
    <HeaderVue />
    <router-view />
  </div>
</template>

<script>
import HeaderVue from '@/components/headerVue.vue';

export default {
  components: {
    HeaderVue,
  }
}
</script>

<style>
</style>
