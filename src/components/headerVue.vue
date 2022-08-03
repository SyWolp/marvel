<template>
  <nav class="bg-slate-600/50 shadow-sm border-gray-200 py-2.5 rounded dark:bg-gray-900">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <h1 class="text-3xl pl-5">
        <router-link class="home" aria-current="page" :to="{ name: 'Home' }">타이틀</router-link>
      </h1>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul v-if="showList === true"
          class="flex flex-col p-2 mt-4 mx-2 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
          <li v-for="list in listTitle" :key="list" @click="logOut"
            class="cursor-pointer text-xl block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
            {{ list }}
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const store = useStore();
    const showList = computed(() => store.state.header.showList);
    const listTitle = ["일번", "이번", "삼번", "로그아웃"];
    const router = useRouter();
    const showHeaderList = async () => {
      try {
        await store.dispatch('header/showHeaderList', false);
        router.push({
          name:'Home'
        });
      } catch (err) {
        console.log(err);
      }
    };

    const logOut = (e) => {
      switch(e.target.innerHTML) {
        case "로그아웃" : showHeaderList();
        break;
        default: break;
      }

    }

    return {
      listTitle,
      showList,
      logOut
    }
  }
}
</script>

<style>
</style>