import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { StoreNames } from '@/constants/store/storeNames'
import { RootState } from './types'
import { city } from './city'
import { settings } from './settings'
import { weather } from './weather'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0'
  },

  modules: {
    [StoreNames.CITY]: city,
    [StoreNames.SETTINGS]: settings,
    [StoreNames.WEATHER]: weather
  }
}

export default new Vuex.Store<RootState>(store)
