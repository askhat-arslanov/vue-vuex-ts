import { ActionTree } from 'vuex'

import { RootState } from '@/store/types'
import { State } from './types'
import { CityWeather, CityWeatherConverter, CityWeatherType } from '@/api/weather'
import { WeatherActions } from '@/constants/store/weather'

export const actions: ActionTree<State, RootState> = {
  async [WeatherActions.GET_CITY_WEATHER](ctx, data: object): Promise<CityWeatherType | null> {
    const weather = await new CityWeather().makeRequest(data)
    return weather ? new CityWeatherConverter().convert(weather) : null
  }
}
