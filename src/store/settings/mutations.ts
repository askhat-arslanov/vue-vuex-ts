import { MutationTree } from 'vuex'

import { State } from './types'
import { SettingsMutations } from '@/constants/store/settings'

export const mutations: MutationTree<State> = {
  [SettingsMutations.SET_SHOWING_SETTINGS](state, isShowing: boolean): void {
    state.isShowing = isShowing
  }
}
