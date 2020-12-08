import { GetterTree } from 'vuex'

import { RootState } from '@/store/types'
import { State } from './types'
import { CityType } from '@/api/city'
import { CityGetters } from '@/constants/store/city'

export const getters: GetterTree<State, RootState> = {
  [CityGetters.CITY_BY_COORDS](state): CityType | null {
    return state.cityByCoords
  },

  [CityGetters.CITY_SUGGESTION_LIST](state): CityType[] | null {
    return state.citySuggestionList
  },

  [CityGetters.CLIENT_CITY_LIST](state): CityType[] | null {
    return state.clientCityList
  }
}
