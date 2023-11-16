import axios  from 'axios'

import {
  AuthenticateParams,
  FindRDVPointRetraitAcheminementParams,
  FindRDVPointRetraitAcheminementResponse
} from './types'

import { ENDPOINT } from './constants'

class ColissimoAPI {

  async authenticate(params: AuthenticateParams): Promise<AuthenticatorResponse> {
    const url = `${ENDPOINT}/widget-colissimo/rest/authenticate.rest`

    const { data } = await axios.post(url, params).catch((error) => {
      throw new Error(`Error while calling Colissimo API : ${error.message}`)
    })

    return data
  }

  async findRDVPointRetraitAcheminement(params: FindRDVPointRetraitAcheminementParams): Promise<FindRDVPointRetraitAcheminementResponse> {
    const url = `${ENDPOINT}/pointretrait-ws-cxf/rest/v2/pointretrait/findRDVPointRetraitAcheminement`

    const { data } = await axios.post(url, params).catch((error) => {
      throw new Error(`Error while calling Colissimo API : ${error.message}`)
    })

    return data
  }
}

export default ColissimoAPI
