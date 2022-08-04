<template>
  <div>
    <div v-for="value in universities" :key=value>
      <div>{{value.name}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';
export default {

  setup() {
    const universities = reactive([]);
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://universities.hipolabs.com/search?country=Korea,+Republic+of`);
        universities.push(...res.data)
        console.log(universities)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    return {
      universities
    }
  }
}
</script>

<style>
</style>