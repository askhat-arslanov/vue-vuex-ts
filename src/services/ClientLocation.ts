type CoordsType = {
  lat: number;
  lon: number;
}

type GeolocationPositionType = {
  coords: {
    latitude: number;
    longitude: number;
  };
}

export class ClientLocation {
  private getClientLocation(): Promise<GeolocationPositionType> {
    return new Promise(resolve => {
      window.navigator.geolocation.getCurrentPosition(resolve)
    })
  }

  async getClientCoords(): Promise<CoordsType> {
    const location = await this.getClientLocation()
    const { latitude: lat, longitude: lon } = location.coords
    return {
      lat,
      lon
    }
  }
}
