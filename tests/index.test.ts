import axios from 'axios';
import ColissimoAPI, { ENDPOINT, FindRDVPointRetraitAcheminementParams } from '../src';

// Mock axios to avoid real API calls in tests
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ColissimoAPI', () => {
  let api: ColissimoAPI;
  let params: FindRDVPointRetraitAcheminementParams;

  beforeEach(() => {
    api = new ColissimoAPI();
    params = {
      accountNumber: 'accountNumber',
      password: 'password',
      address: 'address',
      zipCode: 'zipCode',
      city: 'city',
      countryCode: 'FR',
      weight: 1,
      shippingDate: '01/01/2024',
      filterRelay: '1'
    };
  });

  describe('findRDVPointRetraitAcheminement', () => {
    it('should return data on a successful call', async () => {
      const mockResponse = {
        data: {
          errorCode: 0,
          errorMessage: "Code retour OK",
          qualiteReponse: 2,
          wsRequestId: "123456789",
          listePointRetraitAcheminement: []
        }
      };
      mockedAxios.post.mockResolvedValue(mockResponse);

      const result = await api.findRDVPointRetraitAcheminement(params);

      expect(result).toEqual(mockResponse.data);
      expect(mockedAxios.post).toHaveBeenCalledWith(ENDPOINT, params);
    });

    it('should throw an error if the axios call fails', async () => {
      const errorMessage = 'Error while calling Colissimo API';
      mockedAxios.post.mockRejectedValue(new Error('Network Error'));

      await expect(api.findRDVPointRetraitAcheminement(params)).rejects.toThrow(errorMessage);
    });
  });
});
