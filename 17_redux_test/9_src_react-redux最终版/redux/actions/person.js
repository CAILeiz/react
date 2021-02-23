import {ADD_PERSON, REDUCE_PERSON} from "../constant";

export const addPerson = (personObj) => ({type: ADD_PERSON, data: personObj})
export const deletePerson = personId => ({type: REDUCE_PERSON, data: personId});