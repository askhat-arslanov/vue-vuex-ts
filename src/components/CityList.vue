<template>
  <div class="city-list">
    <settings-button />

    <city-weather v-for="(city, idx) of clientCityList" :key="idx" :city="city" />

    <transition name="fade">
      <settings />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

import { ClientLocation, Storage } from '@/services'
import { StoreNames } from '@/constants/store/storeNames'
import { CityActions, CityGetters } from '@/constants/store/city'

import Settings from '@/components/Settings.vue'
import CityWeather from '@/components/CityWeather.vue'
import SettingsButton from '@/components/SettingsButton.vue'

export default Vue.extend({
  name: 'CityList',

  components: {
    Settings,
    CityWeather,
    SettingsButton
  },

  computed: {
    ...mapGetters({
      cityByCoords: `${StoreNames.CITY}/${CityGetters.CITY_BY_COORDS}`,
      clientCityList: `${StoreNames.CITY}/${CityGetters.CLIENT_CITY_LIST}`
    })
  },

  methods: {
    ...mapActions({
      getCityByCoords: `${StoreNames.CITY}/${CityActions.GET_CITY_BY_COORDS}`,
      setClientCityList: `${StoreNames.CITY}/${CityActions.SET_CLIENT_CITY_LIST}`
    }),
    async getCityList(): Promise<void> {
      const cityList = this.$storage.get('cityList')
      if (cityList) {
        this.setClientCityList(cityList)
      } else {
        await this.getClientCity()
      }
    },
    async getClientCity(): Promise<void> {
      const coords = await new ClientLocation().getClientCoords()
      await this.getCityByCoords(coords)
      const cityList = [this.cityByCoords]
      this.$storage.set('cityList', cityList)
      this.setClientCityList(cityList)
    }
  },

  mounted() {
    this.getCityList()
  }
})
</script>

<style lang="scss" scoped>
.city-list {
  position: relative;
  display: inline-block;
  width: max-content;
  width: 240px;
  min-height: 250px;
  max-height: 508px;
  overflow-y: auto;
}
</style>
