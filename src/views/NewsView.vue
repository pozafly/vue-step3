<template>
  <div>
    <div v-for="user in users" :key="user.user">{{ user.user }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    const vm = this;
    fetchNewsList()
      .then(function(response){
        console.log(response);
        vm.users = response.data;
      })
      .catch(function(e){
        console.log(e);
      });
  }
}
</script>

<style>

</style>