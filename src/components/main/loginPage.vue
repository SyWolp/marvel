<template>
  <div class="flex justify-center h-5/6 items-center">
    <div class="px-8 py-6 mt-4 text-left w-5/6">
      <h3 class="text-2xl font-bold text-center">로그인</h3>
      <form action="">
        <div class="mt-4">
          <div class="">
            <label class="block" for="email">아이디</label>
            <input type="text" placeholder="아이디" v-model="emailEmpty.id"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
          </div>
          <div class="mt-4">
            <label class="block">비밀번호</label>
            <input type="password" placeholder="비밀번호" v-model="emailEmpty.pw"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
          </div>
          <div class="flex items-baseline justify-center">
            <button class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" @click.prevent="getData">Login</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsExports from '@/aws-exports';
import { getUserData } from '@/graphql/queries';
import { useRouter } from 'vue-router';
Amplify.configure(awsExports);
export default {
  setup() {
    const emailEmpty = reactive({
      id: "",
      pw: "",
      name: "",
      status: false
    });
    const store = useStore();
    const router = useRouter();
        const showPage = computed(() => store.state.userInfo.userstatus);
        console.log(showPage.value);
    const showHeaderList = () => {
      store.dispatch('header/showHeaderList', true);
    };

    const updateUserInfo = () => {
      store.dispatch('userInfo/updateUserInfo', {...emailEmpty});
    }

    const getData = async () => {
      try {
        const res = await API.graphql(graphqlOperation(getUserData, { id: emailEmpty.id }));
        if(res.data.getUserData !== null) {
          emailEmpty.name = res.data.getUserData.username;
          emailEmpty.status = true;
          showHeaderList();
          updateUserInfo();
          router.push({
            name: 'info'
          });
        }else {
          console.log("없는 아이디");
        }
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    return {
      emailEmpty,
      getData
    }
  }
}
</script>

<style>
</style>