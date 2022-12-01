import { ADD_PERSON, DELETE_PERSON } from '../constants/actionTypes';

const peopleReducer = (people = [], action) => {
  switch (action.type) {
    case ADD_PERSON:
      return [...people, action.payload];

    case DELETE_PERSON:
      return people.filter((person) => person.id !== action.payload);

    default:
      return people;
  }
};

export default peopleReducer;
