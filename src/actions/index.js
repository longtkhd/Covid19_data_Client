
//ACTION

import {
  GET_ALL_CASE,
  GET_ALL_CASE_SUCCESS,
  GET_ALL_CASE_FAILED,
  GET_GLOBAL_CASE,
  GET_GLOBAL_SUCCESS,
  GET_GLOBAL_FAILED,
  GET_CASE_COUNTRY
} from '../constants/index';

export function getAllCase(id) {
  return {
    type: GET_ALL_CASE,
    id
  }
}

export function getAllCaseSuccess(data){
  return {
    type : GET_ALL_CASE_SUCCESS,
    data
  }
}

export function getAllCaseFailed(){
  return {
    type: GET_ALL_CASE_FAILED
  }
}
///GET GLOBAL

export function getGlobalCase(id) {
  return {
    type: GET_GLOBAL_CASE,
    id
  }
}

export function getGlobalCaseSuccess(data) {
  return {
    type: GET_GLOBAL_SUCCESS,
    data
  }
}

export function getGlobalCaseFailed() {
  return {
    type: GET_GLOBAL_FAILED,
  }
}




