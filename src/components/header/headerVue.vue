<template>
  <nav
    class="bg-slate-600/50 shadow-sm border-gray-200 w-2/3 top-0 left-1/2 -translate-x-1/2 py-2.5  dark:bg-gray-900 fixed z-10">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <h1 v-if="showList && !showSide" @click.stop="showSidePage"
        class="text-3xl pl-5 cursor-pointer text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
        ➕
      </h1>
      <h1 v-else-if="!showList" class="text-3xl pl-5 ">
        타이틀
      </h1>
      <h1 v-if="showSide" @click.stop="showSidePage" class="text-3xl pl-5 cursor-pointer text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
        ➖
      </h1>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul v-if="showList === true"
          class="flex flex-col p-2 mt-4 mx-2 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
          <li v-for="list in listTitle" :key="list" @click.stop="logOut"
            class="text-xl block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400"
            :class="notShowSide">
            {{ list }}
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const store = useStore();
    const showList = computed(() => store.state.header.showList);
    const router = useRouter();
    const listTitle = ["GIF모음", "이번", "삼번", "로그아웃"];
    const pageIndex = ref(0);
    const notShowSide = ref('md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 cursor-pointer text-gray-700');
    const showSide = ref(false);
    const showHeaderList = async () => {
      try {
        await store.dispatch('header/showHeaderList', false);
        router.push({
          name: 'Home'
        });
      } catch (err) {
        console.log(err);
      }
    };

    const showHeaderPage = async () => {
      try {
        await store.dispatch('header/showHeaderPage', pageIndex.value);
      } catch (err) {
        console.log(err);
      }
    }

    const showSidePage = async () => {
      try {
        showSide.value = showSide.value === true ? false : true;
        await store.dispatch('header/showSidePage', { status: showSide.value, class: 'h-screen w-screen bg-gray-100/70' });
        if (showSide.value === false) {
          notShowSide.value = "md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 cursor-pointer text-gray-700";
        } else {
          notShowSide.value = 'cursor-default text-gray-700/80';
        }
      } catch (err) {
        console.log(err);
      }
    }

    const logOut = (e) => {
      if (showSide.value === false) {
        switch (e.target.innerHTML) {
          case "GIF모음":
            pageIndex.value = 0;
            showHeaderPage();
            break;
          case "이번":
            pageIndex.value = 1;
            showHeaderPage();
            break;
          case "삼번":
            pageIndex.value = 2;
            showHeaderPage();
            break;
          case "로그아웃":
            pageIndex.value = 0;
            showHeaderList();
            showHeaderPage();
            break;
          default: break;
        }
      } else {
        return;
      }
    }

    return {
      listTitle,
      showList,
      logOut,
      showSidePage,
      notShowSide,
      showSide
    }
  }
}
</script>

<style>
</style>