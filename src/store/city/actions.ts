import { ActionTree } from 'vuex'

import { RootState } from '@/store/types'
import { State } from './types'
import { CityActions, CityMutations } from '@/constants/store/city'
import {
  CityByCoords,
  CityByCoordsConverter,
  CitySuggestionList,
  CitySuggestionListConverter
} from '@/api/city'

export const actions: ActionTree<State, RootState> = {
  async [CityActions.GET_CITY_BY_COORDS]({ commit }, data) {
    const city = await new CityByCoords().makeRequest(data)
    commit(
      CityMutations.SET_CITY_BY_COORDS,
      city ? new CityByCoordsConverter().convert(city) : null
    )
  },

  async [CityActions.GET_CITY_SUGGESTION_LIST]({ commit }, data: object) {
    const cityList = await new CitySuggestionList().makeRequest(data)
    commit(
      CityMutations.SET_CITY_SUGGESTION_LIST,
      cityList ? new CitySuggestionListConverter().convert(cityList) : null
    )
  },

  [CityActions.SET_CLIENT_CITY_LIST]({ commit }, data) {
    commit(CityMutations.SET_CLIENT_CITY_LIST, data)
  }
}
