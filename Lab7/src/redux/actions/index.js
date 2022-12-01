import { ADD_PERSON, DELETE_PERSON } from '../constants/actionTypes';

export const addPerson = (person) => ({
  type: ADD_PERSON,
  payload: person,
});
export const deletePerson = (personId) => ({
  type: DELETE_PERSON,
  payload: personId,
});
