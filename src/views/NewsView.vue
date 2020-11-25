<template>
  <div>
    <div v-for="user in this.$store.state.news" :key="user.user">{{ user.user }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      news: 'fetchedNews'
    })
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>

</style>