<template>
  <div>
    <article class="city-weather">
      <tempate  v-if="cityWeather">
      <section class="city-weather__name">
        {{ cityWeather.name }}, {{ cityWeather.country }}
      </section>

      <section class="city-weather__main">
        <div class="city-weather__weather-image-wrapper">
          <img :src="`http://openweathermap.org/img/wn/${cityWeather.icon}@2x.png`" alt="Weather" />
        </div>

        <div class="city-weather__temperature">{{ cityWeather.temp }}<sup>o</sup>C</div>
      </section>

      <div class="city-weather__weather-description">
        Feels like {{ cityWeather.feelsLike }}<sup>o</sup>C. {{ cityWeather.desc }}.
      </div>

      <section class="city-weather__weather-details">
        <span class="city-weather__weather-detail city-weather__wind" data-tooltip="Wind">
          <img
            class="city-weather__details-icon"
            :src="require('@/assets/icons/compass.svg')"
            :style="{ transform: `rotateZ(${cityWeather.windDeg}deg)` }"
            alt="Wind speed"
          />
          {{ cityWeather.windSpeed }}m/s
        </span>
        <span class="city-weather__weather-detail" data-tooltip="Pressure">
          <img
            class="city-weather__details-icon"
            :src="require('@/assets/icons/barometer.svg')"
            alt="Pressure"
          />
          {{ cityWeather.pressure }}
          hPA
        </span>
        <span class="city-weather__weather-detail" data-tooltip="Humidity">
          <img
            class="city-weather__details-icon"
            :src="require('@/assets/icons/drop.svg')"
            alt="Humidity"
          />
          {{ cityWeather.humidity }}
          %
        </span>
        <span class="city-weather__weather-detail" data-tooltip="Visibility">
          <img
            class="city-weather__details-icon"
            :src="require('@/assets/icons/eye.svg')"
            alt="Visibility"
          />
          {{ cityWeather.visibility }}km
        </span>
      </section>
      </tempate>
      <template v-else>
        Loading...
      </template>
    </article>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { mapActions } from 'vuex'

import { StoreNames } from '@/constants/store/storeNames'
import { WeatherActions } from '@/constants/store/weather'
import { CityType } from '@/api/city/types'
import { CityWeatherType } from '@/api/weather'

type State = {
  cityWeather: CityWeatherType | null;
  isLoading: boolean;
}

export default Vue.extend({
  name: 'CityWeather',

  props: {
    city: {
      type: Object as PropType<CityType>,
      required: true
    }
  },

  data() {
    return {
      cityWeather: null,
      isLoading: false
    }
  },

  methods: {
    ...mapActions({
      getCityWeather: `${StoreNames.WEATHER}/${WeatherActions.GET_CITY_WEATHER}`
    }),
    async fetchWeather(): Promise<void> {
      this.isLoading = true
      const { name, country } = this.city
      this.cityWeather = await this.getCityWeather({ q: `${name},${country}` })
      this.isLoading = false
    }
  },

  mounted() {
    this.fetchWeather()
  }
})
</script>

<style lang="scss" scoped>
.city-weather {
  display: inline-block;
  border: 1px solid rgb(236, 236, 236);
  font-size: 14px;
  padding: 15px;
  width: 100%;
  min-height: 250px;

  &__main {
    max-width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  &__temperature {
    font-size: 36px;
    font-weight: 500;
  }

  &__details-icon {
    width: 18px;
    height: 18px;
    filter: invert(0.2);
  }

  &__weather-image-wrapper {
    width: 100px;
    height: 100px;
  }

  &__weather-description {
    margin-bottom: 25px;
  }

  &__weather-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 15px;
    justify-items: left;
    align-items: center;
  }

  &__weather-detail {
    position: relative;
    display: flex;
    align-items: center;

    &::after {
      position: absolute;
      left: 0;
      bottom: 0;
      display: inline-block;
      content: attr(data-tooltip);
      width: max-content;
      padding: 3px 6px;
      border-radius: 5px;
      color: #fff;
      background-color: rgb(65, 65, 65);
      pointer-events: none;
      opacity: 0;
      z-index: 1;
      transition: all 0.15s;
    }

    &:hover::after {
      opacity: 1;
      transform: translateY(-100%);
    }

    img {
      margin-right: 5px;
    }
  }

  .span-2 {
    grid-column: span 2;
  }
}
</style>
