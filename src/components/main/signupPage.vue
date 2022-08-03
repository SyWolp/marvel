<template>
  <div class="flex justify-center h-4/6 items-center mt-6">
    <div class="px-8 py-6 mx-4 mt-4 text-left w-full">
      <h3 class="text-2xl font-bold text-center">회원가입</h3>
      <form action="">
        <div class="mt-4">
          <div>
            <label class="block" for="Name">이름</label>
            <input type="text" placeholder="이름" v-model="signUpData.username"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
          </div>
          <div class="mt-4">
            <label class="block" for="email">아이디</label>
            <input type="text" placeholder="아이디 (4자리 이상)" v-model="signUpData.account"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
          </div>
          <div class="mt-4">
            <label class="block">비밀번호</label>
            <input type="password" placeholder="비밀번호 (4자리 이상)" v-model="signUpData.password"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
          </div>
          <div class="mt-4">
            <label class="block">비밀번호 확인</label>
            <input type="password" placeholder="비밀번호 확인" v-model="checkPW"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
            <div v-if="checkSuccess === false" class="p-1 text-red-500">{{failMessage}}</div>
          </div>
          <div class="flex">
            <button class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              @click.prevent="createUser(checkSuccess)">계정 생성</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsExports from '@/aws-exports';
Amplify.configure(awsExports);
import { createUserData } from '@/graphql/mutations';
import { reactive, ref } from '@vue/reactivity';

export default {

  emit: ['go-login'],

  setup(props, { emit }) {
    const signUpData = reactive({
      id: '',
      username: '',
      account: '',
      password: '',
    });
    const checkPW = ref("");
    const checkSuccess = ref(true);
    const failMessage = ref("");
    const failMessageArr = ["존재하는 아이디 입니다.", "비밀번호가 다릅니다.", '아이디 혹은 비밀번호 길이는 4자리 이상입니다.'];
    const createUser = async () => {
      try {
        if (signUpData.password !== checkPW.value) {
          checkSuccess.value = false;
          failMessage.value = failMessageArr[1];
        } else if (signUpData.password.length < 4 || signUpData.account.length < 4) {
          checkSuccess.value = false;
          failMessage.value = failMessageArr[2];
        } else {
          await API.graphql(graphqlOperation(createUserData, { input: { ...signUpData, id: signUpData.account } }));
          emit('go-login', true);
        }
      } catch (err) {
        console.log(err);
        checkSuccess.value = false;
        failMessage.value = failMessageArr[0];
      }

    }

    return {
      signUpData,
      createUser,
      checkPW,
      checkSuccess,
      failMessage,
    }
  }
}
</script>

<style>
</style>