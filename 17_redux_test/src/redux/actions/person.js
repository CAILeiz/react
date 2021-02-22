import {ADD_PERSON} from "../constant";

export const createAddPersonACtion = (personObj) => ({type: ADD_PERSON, data: personObj})