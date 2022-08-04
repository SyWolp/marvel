<template>
  <div class="flex flex-col">
    <canvas class="capcha" width="400" height="100"></canvas>
    <div class="mt-1">
      <label class="block">인증번호 확인</label>
      <input v-model="capchaValue" type="number" placeholder="인증번호" :disabled="disabled"
        class="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
    </div>
  </div>
</template>

<script>
import { onMounted, ref, watch } from '@vue/runtime-core'
export default {
  
  emit: ["clear-capcha"],

  setup(prop,{emit}) {
    const capchaValue = ref(null);
    const disabled = ref(false);
    let randomNumber = Math.floor(Math.random() * (9999 - 1000) + 1000);
    onMounted(() => {
      const capcha = document.querySelector(".capcha");
      const capChaCtx = capcha.getContext('2d');
      capChaCtx.font = "80px arial";
      capChaCtx.color = "red";
      capChaCtx.strokeText(randomNumber, 105, 80);
    });

    watch(capchaValue, () => {
      if (capchaValue.value === randomNumber) {
        disabled.value = true;
        emit("clear-capcha", true);
      }
      console.log(capchaValue.value, randomNumber);
    })

    return {
      capchaValue,
      disabled
    }
  }
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>