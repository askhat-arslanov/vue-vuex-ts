import { MutationTree } from 'vuex'

import { CityType } from '@/api/city'
import { State } from './types'
import { CityMutations } from '@/constants/store/city'

export const mutations: MutationTree<State> = {
  [CityMutations.SET_CITY_BY_COORDS](state, cityByCoords: CityType): void {
    state.cityByCoords = cityByCoords
  },

  [CityMutations.SET_CITY_SUGGESTION_LIST](state, citySuggestionList: CityType[]): void {
    state.citySuggestionList = citySuggestionList
  },

  [CityMutations.SET_CLIENT_CITY_LIST](state, clientCityList: CityType[]): void {
    state.clientCityList = clientCityList
  }
}
