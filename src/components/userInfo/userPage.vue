<template>
  <div>abc</div>
</template>

<script>
import axios from 'axios';
// import { ref } from '@vue/reactivity';
export default {
  setup() {

    // const user = ref("");

    const fetchData = async () => {
      try {
        const res = await axios.get(`http://gateway.marvel.com/v1/public/comics?ts=rkdtlsduddlqslek&apikey=c9ccbd779f939ee01f5458b5fea1531c&hash=EB1624B3C49639D7271AC3D8FCAAD92B`);
        console.log(res);
      }catch(err) {
        console.log(err);
      }
    };

    fetchData();
    return {
      fetchData
    }
  }
}
</script>

<style>

</style>