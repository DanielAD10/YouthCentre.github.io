<template>
  <h1>Frequently Asked Question (FAQs)</h1>
  <div v-if="error">
    {{ error }}
  </div>
  <div v-if="infos.length > 0">
    <InfosList :infos="infos"></InfosList>
  </div>
</template>

<script>
import InfosList from '../components/InfosList'
import SingleInfo from '../components/SingleInfo'
import getInfos from '@/composables/getInfos';

export default {
  components: {
    InfosList, SingleInfo },
  setup() {
    let {infos, error, load} = getInfos();
    load();
    return {infos, error}
  }
}
</script>

<style>
  h1 {
    text-align: center;
  }

  
</style>