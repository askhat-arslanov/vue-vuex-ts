import { VueConstructor } from 'vue'
import { Storage, StorageInterface } from '@/services'

declare module 'vue/types/vue' {
  interface Vue {
    $storage: StorageInterface;
  }
}

export default {
  install(Vue: VueConstructor) {
    Vue.prototype.$storage = new Storage()
  }
}
