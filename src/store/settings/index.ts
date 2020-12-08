import { Module } from 'vuex'

import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

import { RootState } from '@/store/types'
import { State } from './types'

const state: State = {
  isShowing: false
}

export const settings: Module<State, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
