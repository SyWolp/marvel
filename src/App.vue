<template>
  <div class="w-5/6 mx-auto">
    <metainfo>
      <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
    </metainfo>
    <HeaderVue />
    <router-view />
  </div>
</template>

<script>
import HeaderVue from '@/components/header/headerVue.vue';
import { useMeta } from 'vue-meta';
export default {
  components: {
    HeaderVue,
  },
  setup() {
    useMeta({
      title: 'some Page',
      htmlAttrs: { lang: 'ko', amp: true },
      meta: [
        { vmid: 'description', name: 'description', content: '프론트엔드 개발 블로그' },
        { vmid: 'keywords', name: 'keywords', content: 'blog, frontend, vue3, vueCLI4' },
        { vmid: 'og:type', name: 'og:type', content: 'article' },
        { vmid: 'og:title', name: 'og:title', content: 'ENJOY DEV' },
        { vmid: 'og:description', name: 'og:description', content: '프론트엔드 개발 블로그' },
        { vmid: 'og:url', name: 'og:url', content: 'https://yemsu.github.io/' },
        { vmid: 'og:image', name: 'og:image', content: 'og:image 경로' }
      ]
    })
  },
}
</script>

<style>
</style>
