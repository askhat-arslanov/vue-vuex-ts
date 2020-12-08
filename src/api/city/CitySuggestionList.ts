import Api from '@/api/Api'
import { CitySuggestionResponseType } from './types'

export class CitySuggestionList extends Api {
  endpoint = process.env.VUE_APP_LOCATION_SUGGESTIONS_URL
  defaultParams = {
    dedupe: 1,
    key: process.env.VUE_APP_LOCATION_CLIENT_TOKEN,
    limit: 5,
    tag: 'place:city'
  }

  public async makeRequest(data: object): Promise<CitySuggestionResponseType[] | null> {
    const cityList = await this.get<CitySuggestionResponseType[]>(data)
    return cityList ? cityList : null
  }
}
