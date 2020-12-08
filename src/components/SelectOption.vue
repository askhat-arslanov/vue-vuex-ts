<template>
  <span class="suggestion" @click="selectCity">{{ city.name }} {{ city.country }}</span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import { CityType } from '@/api/city/types'

export default Vue.extend({
  name: 'SelectOption',

  props: {
    city: {
      type: Object as PropType<CityType>,
      required: true
    }
  },

  methods: {
    selectCity() {
      this.$emit('selectCity', this.city)
    }
  }
})
</script>

<style lang="scss" scoped>
.suggestion {
  font-size: 14px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
}
</style>
