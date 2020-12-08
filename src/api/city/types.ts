export type CityType = {
  name: string;
  country: string;
}

export type CitySuggestionResponseType = {
  address: {
    name: string;
    country_code: string;
  };
}

export type CityByCoordsResponseType = {
  address: {
    city: string;
    country_code: string;
  };
}
