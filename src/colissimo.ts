import axios from 'axios'

import { ENDPOINT } from './constants'

import {
  AuthenticateParams,
  FindRDVPointRetraitAcheminementParams,
  FindRDVPointRetraitAcheminementResponse
} from './types'

export const authenticate = async (
  params: AuthenticateParams): Promise<AuthenticatorResponse> => {
  const url = `${ENDPOINT}/widget-colissimo/rest/authenticate.rest`

  const { data } = await axios.post(url, params).catch((error) => {
    throw new Error(`Error while calling Colissimo API : ${error.message}`)
  })

  return data
}

export const findRDVPointRetraitAcheminement = async (
  params: FindRDVPointRetraitAcheminementParams):
  Promise<FindRDVPointRetraitAcheminementResponse> => {
  const url = `${ENDPOINT}/pointretrait-ws-cxf/rest/v2/pointretrait/findRDVPointRetraitAcheminement`

  const { data } = await axios.post(url, params).catch((error) => {
    throw new Error(`Error while calling Colissimo API : ${error.message}`)
  })

  return data
}
