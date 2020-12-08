import { CitySuggestionConverter } from './CitySuggestionConverter'
import { CityType, CitySuggestionResponseType } from './types'

export class CitySuggestionListConverter {
  convert(cityList: CitySuggestionResponseType[]): CityType[] | null {
    return cityList.length
      ? cityList.map(city => new CitySuggestionConverter().convert(city))
      : null
  }
}
