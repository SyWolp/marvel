<template>
  <div class="flex h-96 relative justify-between">
    <img :src="url" :alt="url+'gif'" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-12" />
    <button  @click="gifMove" class="text-6xl ml-10 mt-auto">&lt;</button>
    <div class="absolute top-0 left-1/2 text-5xl mt-20">{{pmBtn + 1}}</div>
    <button @click="gifMove" class="text-6xl mr-10 mt-auto">&gt;</button>
  </div>
</template>

<script>
import axios from 'axios';
import { reactive, ref } from '@vue/reactivity';
export default {
  setup() {

    const user = reactive([]);
    const url = ref("");
    const pmBtn = ref(0);
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=1jqHXbnFTB0JAX995cE71GP5dpUG7fy4`);
        user.push({ ...res.data.data });
        console.log(user);
        url.value = user[0][0].images.original.url;
      } catch (err) {
        console.log(err);
      }
    };
    const gifMove = (e) => {
      if (e.target.innerHTML === '왼쪽') {
        if (pmBtn.value === 0) {
          pmBtn.value = 49;
        } else {
          pmBtn.value--;
        }
      } else {
        if (pmBtn.value === 49) {
          pmBtn.value = 0;
        } else {
          pmBtn.value++;
        }
      }
      url.value = user[0][pmBtn.value].images.original.url;
    }

    fetchData();
    return {
      fetchData,
      url,
      gifMove,
      pmBtn
    }
  }
}
</script>

<style>

</style>