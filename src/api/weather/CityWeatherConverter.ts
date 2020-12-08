import { CityWeatherType, CityWeatherResponseType } from './types'

export class CityWeatherConverter {
  convert(city: CityWeatherResponseType): CityWeatherType {
    return {
      country: city.sys.country,
      desc: this.getDesc(city.weather[0].description),
      feelsLike: city.main.feels_like,
      icon: city.weather[0].icon,
      humidity: city.main.humidity,
      pressure: city.main.pressure,
      main: city.weather[0].main,
      name: city.name,
      temp: Math.round(city.main.temp),
      visibility: this.getVisibility(city.visibility),
      windDeg: city.wind.deg,
      windSpeed: city.wind.speed
    }
  }

  getDesc(desc: string): string {
    return `${desc[0].toUpperCase()}${desc.slice(1)}`
  }

  getVisibility(visibility: number): string {
    return (visibility / 1000).toFixed(1)
  }
}
