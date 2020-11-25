<template>
  <div>
    <div v-for="user in this.$store.state.news" :key="user.user">{{ user.user }}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>

</style>