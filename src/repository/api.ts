import axios from 'axios';
import { NominationResponse, NewNominationResponse, NominationRequest } from './APImodel';

// TODO: This should be the id of a user probably we will have to send the token in the headers
// instead of the ID in the API
const memberID = '3cd94258-73ce-4f86-83f8-9ff016df4a85';

const API_URL = import.meta.env.API_URL || '';

const nominations = async (): Promise<NominationResponse> => {
  const { data } = await axios.get<NominationResponse>(`${API_URL}/nominations`);
  return data;
};

const nominate = async (payload: NominationRequest) => (
  axios.post<NewNominationResponse>(`${API_URL}/api/v1/members/${memberID}/nominations`, payload)
);

export {
  nominations,
  nominate,
};
