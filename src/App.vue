<template>
  <div id="app">
    <city-list />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CityList from '@/components/CityList.vue'

export default Vue.extend({
  name: 'App',
  components: {
    CityList
  }
})
</script>
