<template>
  <div>
    <div v-for="item in ask" :key="item.title">{{ item.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // #3
    ...mapGetters({
      ask: 'fetchedAsk'
    })
    // ...mapGetters(['fetchedAsk'])  라고 해도 되는데 그럼 fetchedAsk 라는 이름으로 div 안에 넣어줘야 한다.

    // #2 
    // ...mapState({
    //   ask: state => state.ask
    // })

    // #1
    // ask() {
    //  return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>