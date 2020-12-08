import { GetterTree } from 'vuex'

import { RootState } from '@/store/types'
import { State } from './types'
import { CityWeatherType } from '@/api/weather'
import { WeatherGetters } from '@/constants/store/weather'

export const getters: GetterTree<State, RootState> = {
  [WeatherGetters.CITY_WEATHER](state): CityWeatherType | null {
    return state.cityWeather
  }
}
