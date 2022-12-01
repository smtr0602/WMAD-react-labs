import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { addPerson, deletePerson } from '../redux/actions';

const People = () => {
  const dispatch = useDispatch();
  const people = useSelector((state) => {
    return state;
  });

  const personAddedHandler = () => {
    const newPerson = {
      id: Math.random(), // not really unique but good enough here!
      name: 'John',
      age: Math.floor(Math.random() * 40),
    };
    dispatch(addPerson(newPerson));
  };

  return (
    <div>
      <AddPerson personAdded={personAddedHandler} />
      {people.length &&
        people.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => dispatch(deletePerson(person.id))}
          />
        ))}
    </div>
  );
};

export default People;
