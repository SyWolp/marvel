<template>
  <div>
    <userPage v-if="pageIndex === 0" />
    <UserInfoPage v-else-if="pageIndex === 1" />
    <div v-else-if="pageIndex === 2">삼번</div>
    <SidePage />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import userPage from '@/components/userInfo/userPage.vue';
import SidePage from '@/components/sidePage/sidePage.vue';
import UserInfoPage from '@/components/userInfo/userInfoPage.vue';
export default {
  components: {
    userPage,
    SidePage,
    UserInfoPage
},

  setup() {
    const store = useStore();
    const router = useRouter();
    const showPage = computed(() => store.state.userInfo.userstatus);
    const pageIndex = computed(() => store.state.header.showPage);
    console.log(pageIndex.value);
    if (showPage.value === false) {
      router.push({
        name: "Home"
      });
    }
    return {
      pageIndex
    }
  }
}
</script>

<style>
</style>