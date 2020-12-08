<template>
  <div v-if="isShowing" class="settings">
    <button class="settings__close-btn" @click="closeSettings">
      ✕
    </button>

    <city-list-change />

    <select-city />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

import { SettingsActions, SettingsGetters } from '@/constants/store/settings'
import { StoreNames } from '@/constants/store/storeNames'
import CityListChange from '@/components/CityListChange.vue'
import SelectCity from '@/components/SelectCity.vue'

export default Vue.extend({
  name: 'Settings',

  components: {
    CityListChange,
    SelectCity
  },

  methods: {
    ...mapActions({
      setShowingSettings: `${StoreNames.SETTINGS}/${SettingsActions.SET_SHOWING_SETTINGS}`
    }),
    closeSettings() {
      this.setShowingSettings(false)
    }
  },

  computed: {
    ...mapGetters({
      isShowing: `${StoreNames.SETTINGS}/${SettingsGetters.SETTINGS_IS_SHOWING}`
    })
  }
})
</script>

<style lang="scss" scoped>
.settings {
  position: absolute;
  top: 0;
  left: 0;
  padding: 50px 15px 15px;
  background-color: #f8fcff;
  width: 100%;
  height: 100%;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);

  &__close-btn {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 24px;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }
}
</style>
