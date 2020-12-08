<template>
  <div class="select-city">
    <input class="select-city__input" v-model="cityName" placeholder="Add city here..." />
    <div v-if="suggestions && suggestionsIsShow" class="select-city__suggestions">
      <select-option
        v-for="(city, idx) of suggestions"
        :key="idx"
        :city="city"
        @selectCity="selectCity"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { debounce } from 'lodash'

import { StoreNames } from '@/constants/store/storeNames'
import { CityActions, CityGetters, CityMutations } from '@/constants/store/city'
import { CityType } from '@/api/city/types'
import SelectOption from '@/components/SelectOption.vue'

type State = {
  cityName: string;
  suggestionsIsShow: boolean;
}

export default Vue.extend({
  name: 'SelectCity',

  components: {
    SelectOption
  },

  data(): State {
    return {
      cityName: '',
      suggestionsIsShow: false
    }
  },

  methods: {
    ...mapActions({
      getSuggestions: `${StoreNames.CITY}/${CityActions.GET_CITY_SUGGESTION_LIST}`,
      setClientCityList: `${StoreNames.CITY}/${CityActions.SET_CLIENT_CITY_LIST}`
    }),
    ...mapMutations({
      setSuggestions: `${StoreNames.CITY}/${CityMutations.SET_CITY_SUGGESTION_LIST}`
    }),
    selectCity(city: CityType): void {
      const updatedCityList = [...this.clientCityList, city]
      this.setClientCityList(updatedCityList)
      this.$storage.set('cityList', updatedCityList)
      this.suggestionsIsShow = false
      this.cityName = ''
    }
  },

  computed: {
    ...mapGetters({
      suggestions: `${StoreNames.CITY}/${CityGetters.CITY_SUGGESTION_LIST}`,
      clientCityList: `${StoreNames.CITY}/${CityGetters.CLIENT_CITY_LIST}`
    }),
    debouncedGetSuggestions(): Function {
      return debounce(this.getSuggestions, 500)
    }
  },

  watch: {
    cityName(value: string): void {
      if (value.trim() && value.length > 1) {
        this.suggestionsIsShow = true
        this.debouncedGetSuggestions({ q: this.cityName })
      } else {
        this.suggestionsIsShow = false
        this.setSuggestions(null)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.select-city {
  &__input {
    font-size: 16px;
    width: 100%;
    padding: 5px 10px;
    border: none;
    border-bottom: 1px solid #333;
    background-color: transparent;
    margin-bottom: 10px;

    &:focus {
      outline: none;
      background-color: #fff;
    }
  }

  &__suggestions {
    display: grid;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }
}
</style>
