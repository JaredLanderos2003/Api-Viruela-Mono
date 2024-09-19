// src/services/mapService.ts
import axios from 'axios';

const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN;

export const getReverseGeocode = async (lat: number, lng: number) => {
  try {
    const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxToken}`);
    return response.data;
  } catch (error) {
    console.error('Error obteniendo datos de Mapbox:', error);
    throw error;
  }
};
