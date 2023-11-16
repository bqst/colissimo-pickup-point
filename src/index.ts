import axios  from 'axios'

export const ENDPOINT = 'https://ws.colissimo.fr/pointretrait-ws-cxf/rest/v2/pointretrait/findRDVPointRetraitAcheminement'
export interface FindRDVPointRetraitAcheminementParams {
  accountNumber: string
  password: string
  apikey?: string
  codTiersPourPartenaire?: string
  address: string
  zipCode: string
  city: string
  countryCode: string
  weight: number
  shippingDate: string // DD/MM/YYYY
  filterRelay: '0' | '1'
  requestId?: string
  lang?: string
  optionInter?: '0' | '1'
}

export interface FindRDVPointRetraitAcheminementResponse {
  errorCode: number
  errorMessage: string
  qualiteReponse: number
  wsRequestId: string
  listePointRetraitAcheminement: ColissimoPoint[]
}

export interface ColissimoPoint {
  identifiant: string
  nom: string
  adresse1: string
  adresse2: string
  adresse3: string
  codePostal: string
  localite: string
  indiceDeLocalisation: string
  coordGeolocalisationLatitude: string
  coordGeolocalisationLongitude: string
  accesPersonneMobiliteReduite: boolean
  horairesOuvertureLundi: string
  horairesOuvertureMardi: string
  horairesOuvertureMercredi: string
  horairesOuvertureJeudi: string
  horairesOuvertureVendredi: string
  horairesOuvertureSamedi: string
  horairesOuvertureDimanche: string
  periodeActiviteHoraireDeb: string
  periodeActiviteHoraireFin: string
  listeConges: Conge[]
  typeDePoint: string
  poidsMaxi: number
  distanceEnMetre: number
  congesPartiel: boolean
  congesTotal: boolean
  reseau: string
  codePays: string
  libellePays: string
  langue: string
  parking: boolean
  loanOfHandlingTool: boolean
  distributionSort: string
  lotAcheminement: string
  versionPlanTri: string
}

export interface Conge {
  numero: number
  calendarDeDebut: number
  calendarDeFin: number
}

class ColissimoAPI {
  async findRDVPointRetraitAcheminement(params: FindRDVPointRetraitAcheminementParams): Promise<FindRDVPointRetraitAcheminementResponse> {
    const { data } = await axios.post(ENDPOINT, params).catch((error) => {
      throw new Error(`Error while calling Colissimo API : ${error.message}`)
    })

    return data
  }
}

export default ColissimoAPI
