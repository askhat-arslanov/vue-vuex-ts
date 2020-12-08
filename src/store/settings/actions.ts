import { ActionTree } from 'vuex'

import { RootState } from '@/store/types'
import { State } from './types'
import { SettingsActions, SettingsMutations } from '@/constants/store/settings'

export const actions: ActionTree<State, RootState> = {
  [SettingsActions.SET_SHOWING_SETTINGS](ctx, isShowing: boolean): void {
    ctx.commit(SettingsMutations.SET_SHOWING_SETTINGS, isShowing)
  }
}
