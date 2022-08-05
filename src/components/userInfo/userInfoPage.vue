<template>
  <div class="bg-red-100 mt-16">
    <div v-for="value in coinArr" :key=value>
      <div>{{ value.name }}</div>
      <div>{{ `${parseInt(value.quotes.KRW.price).toLocaleString("ko-KR")}` }}</div>
    </div>
    <VPagination v-model="page" :pages="10" :range-size="1" active-color="#DCEDFF" @update:modelValue="updateHandler" />
  </div>
</template>

<script>
import axios from 'axios';
import { reactive, ref } from 'vue';
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

export default {
  components: {
    VPagination
  },
  setup() {
    const page = ref(1);
    const coinArr = reactive([]);
    const aaa = reactive([]);
    // const bbb = reactive([]);
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.coinpaprika.com/v1/tickers?quotes=KRW`);
        coinArr.push(...res.data);
        for(let i = 0; i < coinArr.length; i++) {
          aaa.push(coinArr[i].name);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    return {
      coinArr,
      page
    }
  }
}
</script>

<style>
</style>