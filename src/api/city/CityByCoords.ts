import Api from '@/api/Api'
import { CityByCoordsResponseType } from './types'

export class CityByCoords extends Api {
  endpoint = process.env.VUE_APP_LOCATION_BY_COORDS_URL
  defaultParams = {
    'accept-language': 'en',
    format: 'json',
    key: process.env.VUE_APP_LOCATION_CLIENT_TOKEN,
    zoom: 10
  }

  async makeRequest(data: object): Promise<CityByCoordsResponseType | null> {
    const cityList = await this.get<CityByCoordsResponseType>(data)
    return cityList ? cityList : null
  }
}