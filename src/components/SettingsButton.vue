<template>
  <button class="settings-button" @click="openSettings">
    <img class="settings-button__icon" :src="require('@/assets/icons/gear.svg')" alt="Settings" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

import { SettingsActions } from '@/constants/store/settings'
import { StoreNames } from '@/constants/store/storeNames'

export default Vue.extend({
  name: 'SettingsButton',

  methods: {
    ...mapActions({
      setShowingSettings: `${StoreNames.SETTINGS}/${SettingsActions.SET_SHOWING_SETTINGS}`
    }),
    openSettings() {
      this.setShowingSettings(true)
    }
  }
})
</script>

<style lang="scss" scoped>
.settings-button {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  width: 22px;
  height: 22px;

  &__icon {
    width: 22px;
    height: 22px;
    transition: all 0.2s;
  }

  &:hover &__icon {
    transform: rotateZ(90deg);
  }
}
</style>
