import axios from 'axios'

interface FindRDVPointRetraitAcheminementResponse {
  status: string; // e.g., "success" or "error"
  message?: string; // Optional error message
  data?: {
    points: Array<{
      id: string;
      name: string;
      address: string;
      zipCode: string;
      city: string;
      countryCode: string;
      // Add other relevant fields here
    }>;
    // Include other top-level fields if present in the response
  };
}

class ColissimoAPI {
  async findRDVPointRetraitAcheminement(params: { [key: string]: string }): Promise<FindRDVPointRetraitAcheminementResponse> {
    const response = await axios.get('https://ws.colissimo.fr/pointretrait-wscxf/PointRetraitServiceWS/2.0/findRDVPointRetraitAcheminement', { params });
    return response.data;
  }
}

export default ColissimoAPI
