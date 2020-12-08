<template>
  <div class="city-list-change">
    <draggable
      class="city-list"
      tag="ul"
      v-model="cityList"
      v-bind="dragOptions"
      @start="drag = true"
      @end="drag = false"
    >
      <transition-group type="transition" :name="!drag ? 'flip-list' : null">
        <li class="city-item" v-for="(city, idx) in cityList" :key="idx">
          <span>{{ city.name }}, {{ city.country }}</span>
          <button v-if="cityList.length > 1" class="city-item__delete-btn" @click="removeCity(idx)">
            <!-- ✕ -->
            <img class="city-item__delete-icon" :src="require('@/assets/icons/trash.svg')" />
          </button>
        </li>
      </transition-group>
    </draggable>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import draggable from 'vuedraggable'

import { CityActions, CityGetters } from '@/constants/store/city'
import { StoreNames } from '@/constants/store/storeNames'
import { CityType } from '@/api/city/types'

type State = {
  drag: boolean;
}

type DragOptionsType = {
  animation: number;
  group: string;
  disabled: boolean;
  ghostClass: string;
}

export default Vue.extend({
  name: 'CityListChange',

  components: {
    draggable
  },

  data(): State {
    return {
      drag: false
    }
  },

  methods: {
    ...mapActions({
      setClientCityList: `${StoreNames.CITY}/${CityActions.SET_CLIENT_CITY_LIST}`
    }),
    removeCity(id: number): void {
      if (this.cityList) {
        const cityListUpdated = [...this.cityList.slice(0, id), ...this.cityList.slice(id + 1)]
        this.setClientCityList(cityListUpdated)
        this.$storage.set('cityList', cityListUpdated)
      }
    }
  },

  computed: {
    ...mapGetters({
      clientCityList: `${StoreNames.CITY}/${CityGetters.CLIENT_CITY_LIST}`
    }),
    cityList: {
      get(): CityType[] | null {
        return this.clientCityList ? [...this.clientCityList] : null
      },
      set(cityList: CityType[]): void {
        this.setClientCityList(cityList)
        this.$storage.set('cityList', cityList)
      }
    },
    dragOptions(): DragOptionsType {
      return {
        animation: 150,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.city-list-change {
  margin-bottom: 20px;

  .city-item {
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 10px;
    border-radius: 5px;
    cursor: grabbing;
    transition: all 0.2s;

    &:hover {
      background-color: #fff;
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    }

    &__delete-btn {
      margin-left: auto;
      border: none;
      outline: none;
      background: none;
      cursor: pointer;
      transition: all 0.2s;
      transform-origin: center center;
    }

    &__delete-btn:hover > .city-item__delete-icon {
      opacity: 1;
    };

    &__delete-icon {
      width: 16px;
      height: auto;
      opacity: 0.6;
      transition: all 0.15s;
    }
  }
}
</style>
