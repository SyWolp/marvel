<template>
  <userPage />
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import userPage from '@/components/userInfo/userPage.vue';
export default {
  components: {
    userPage
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    const showPage = computed(() => store.state.userInfo.userstatus);
    if (showPage.value === false) {
      router.push({
        name: "Home"
      });
    }
    return {

    }
  }
}
</script>

<style>
</style>