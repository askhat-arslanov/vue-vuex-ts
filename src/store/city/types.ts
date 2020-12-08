import { CityType } from '@/api/city'

export type State = {
  cityByCoords: CityType | null;
  citySuggestionList: CityType[] | null;
  clientCityList: CityType[] | null;
}
