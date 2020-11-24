<template>
  <div>
    <div v-for="item in ask" :key="item.title">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
  data() {
    return {
      ask: []
    }
  },
  created() {
    fetchAskList()
      .then(response => this.ask = response.data)
      .catch(e => console.log(e));
  }
}
</script>

<style>

</style>