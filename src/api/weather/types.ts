export type CityWeatherResponseType = {
  weather: [
    {
      main: string;
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string; 
  };
  name: string;
}

export type CityWeatherType = {
  country: string;
  desc: string;
  feelsLike: number;
  icon: string;
  humidity: number;
  pressure: number;
  main: string;
  name: string;
  temp: number;
  visibility: string;
  windDeg: number;
  windSpeed: number;
}
