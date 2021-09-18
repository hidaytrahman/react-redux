import { ADD_PERSON, REMOVE_PERSON } from "../actions";

const initialPeople = [
    {
        firstName: "John",
        lastName: "Smith",
        age: 44
    }
];

// initial state
const initialState = {
    people: initialPeople
};

// People reducer
export const peopleReducer = (state = initialState, action) => {
    if (action.type === ADD_PERSON) {
        return {
            ...state,
            people: [...state.people, action.newPerson]
        };
    }

    // REMOVE Action
    if (action.type === REMOVE_PERSON) {
        // Remove selected person
        const newPeople = state.people.filter(
            (person, personIndex) => personIndex !== action.index
        );

        return {
            ...state,
            people: newPeople
        };
    }

    return {
        people: state.people
    };
};