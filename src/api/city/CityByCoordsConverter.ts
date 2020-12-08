import { CityType, CityByCoordsResponseType } from './types'

export class CityByCoordsConverter {
  convert(city: CityByCoordsResponseType): CityType {
    return {
      country: city.address.country_code.toUpperCase(),
      name: city.address.city
    }
  }
}
