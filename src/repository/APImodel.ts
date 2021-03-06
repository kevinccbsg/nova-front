interface Score {
  involvement: number
  talent: number
}

interface Nomination {
  id: string
  email: string
  description: string
  referrer: string
  dateReferred: string
  status: 'REJECTED' | 'ACCEPTED'
  score: Score
}

export interface NominationResponse {
  response: string
  data: Nomination[]
}

export interface NewNominationResponse {
  id: string
}

export interface NominationRequest {
  email: string
  description: string
  score: Score
}
