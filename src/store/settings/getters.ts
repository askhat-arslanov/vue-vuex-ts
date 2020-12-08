import { GetterTree } from 'vuex'

import { RootState } from '@/store/types'
import { State } from './types'
import { SettingsGetters } from '@/constants/store/settings'

export const getters: GetterTree<State, RootState> = {
  [SettingsGetters.SETTINGS_IS_SHOWING](state): boolean {
    return state.isShowing
  }
}
