<template>
  <div>
    <div v-for="user in users" :key="user">{{ user.user }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    const vm = this;
    axios.get('https://api.hnpwa.com/v0/news/1.json')
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