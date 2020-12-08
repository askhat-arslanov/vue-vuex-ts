import { CityType, CitySuggestionResponseType } from './types'

export class CitySuggestionConverter {
  convert(city: CitySuggestionResponseType): CityType {
    return {
      country: city.address.country_code.toUpperCase(),
      name: city.address.name
    }
  }
}
