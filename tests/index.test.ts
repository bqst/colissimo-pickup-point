import axios from 'axios'
import {
  authenticate,
  findRDVPointRetraitAcheminement
} from '../src/index'
import { ENDPOINT } from '../src/constants'
import { 
  AuthenticateParams, 
  FindRDVPointRetraitAcheminementParams 
} from '../src/types'

// Mock axios to avoid real API calls in tests
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('ColissimoAPI', () => {

  describe('authenticate', () => {
    let params: AuthenticateParams

    beforeEach(() => {
      params = {
        login: 'testLogin',
        password: 'testPassword'
      }
    })

    it('should return data on a successful call', async () => {
      const mockResponse = {
        data: {
          token: 'testToken'
        }
      }
      mockedAxios.post.mockResolvedValue(mockResponse)

      const result = await authenticate(params)

      expect(result).toEqual(mockResponse.data)
      expect(mockedAxios.post).toHaveBeenCalledWith(`${ENDPOINT}/widget-colissimo/rest/authenticate.rest`, params)
    })

    it('should throw an error if the axios call fails', async () => {
      const errorMessage = 'Error while calling Colissimo API'
      mockedAxios.post.mockRejectedValue(new Error('Network Error'))

      await expect(authenticate(params)).rejects.toThrow(errorMessage)
    })
  })

  describe('findRDVPointRetraitAcheminement', () => {
    let params: FindRDVPointRetraitAcheminementParams

    beforeEach(() => {
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
      }
    })

    it('should return data on a successful call', async () => {
      const mockResponse = {
        data: {
          errorCode: 0,
          errorMessage: "Code retour OK",
          qualiteReponse: 2,
          wsRequestId: "123456789",
          listePointRetraitAcheminement: []
        }
      }
      mockedAxios.post.mockResolvedValue(mockResponse)

      const result = await findRDVPointRetraitAcheminement(params)

      expect(result).toEqual(mockResponse.data)
      expect(mockedAxios.post).toHaveBeenCalledWith(`${ENDPOINT}/pointretrait-ws-cxf/rest/v2/pointretrait/findRDVPointRetraitAcheminement`, params)
    })

    it('should throw an error if the axios call fails', async () => {
      const errorMessage = 'Error while calling Colissimo API'
      mockedAxios.post.mockRejectedValue(new Error('Network Error'))

      await expect(findRDVPointRetraitAcheminement(params)).rejects.toThrow(errorMessage)
    })
  })
})
