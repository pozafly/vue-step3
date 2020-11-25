<template>
  <div>
    <div v-for="item in ask" :key="item.title">{{ item.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      ask: 'fetchedAsk'
    })
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>