<template>
  <div class="w-1/3 h-[45rem] mx-auto mt-20 flex flex-col bg-red-50">
    <section class="h-full">
      <div class="h-full bg-gray-500/20 rounded-lg text-gray-800">
        <div class="flex flex-col h-full g-6 relative">
          <LoginPage v-if="mainStatus" />
          <SignupPage v-else @go-login="statusChange" />
          <div class="flex border-t-2 border-stone-300 absolute inset-x-0 bottom-0 h-1/6">
            <div @click="changeStauts" :class="mainStatus ? 'bg-sky-300/50' : null" class="flex-1 text-3xl text-center cursor-pointer border-r-2 border-stone-300 py-10 rounded-bl-lg">로그인</div>
            <div @click="changeStauts" :class="mainStatus ? null : 'bg-sky-300/50'" class="flex-1 text-3xl text-center cursor-pointer py-10 rounded-br-lg">회원가입</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';
import LoginPage from './loginPage.vue';
import SignupPage from './signupPage.vue';
export default {
    components: { LoginPage, SignupPage },
    setup() {
      const mainStatus = ref(true);

      const changeStauts = (e) => {
        if(e.target.innerHTML === "회원가입") {
          mainStatus.value = false;
        }else {
          mainStatus.value = true;
        }
      }
      const statusChange = (status) => {
        mainStatus.value = status;
      }
      return {
        mainStatus,
        changeStauts,
        statusChange
      }
    }
}
</script>

<style>
</style>