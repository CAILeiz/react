import {ADD_PERSON, REDUCE_PERSON} from "../constant";

export const createAddPersonACtion = (personObj) => ({type: ADD_PERSON, data: personObj})
export const createDeletePersonAction = personId => ({type: REDUCE_PERSON, data: personId});