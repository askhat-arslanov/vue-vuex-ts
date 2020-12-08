import { MutationTree } from 'vuex'

import { CityWeatherType } from '@/api/weather'
import { State } from './types'
import { WeatherMutations } from '@/constants/store/weather'

export const mutations: MutationTree<State> = {
  [WeatherMutations.SET_CITY_WEATHER](state, cityWeather: CityWeatherType) {
    state.cityWeather = cityWeather
  }
}
