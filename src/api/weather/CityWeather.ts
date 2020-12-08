import Api from '@/api/Api'
import { CityWeatherResponseType } from './types'

export class CityWeather extends Api {
  endpoint = process.env.VUE_APP_LOCATION_WEATHER_URL
  defaultParams = {
    appid: process.env.VUE_APP_WEATHER_CLIENT_TOKEN,
    units: 'metric'
  }

  public async makeRequest(data: object): Promise<CityWeatherResponseType | null> {
    const city = await this.get<CityWeatherResponseType>(data)
    return city ? city : null
  }
}
