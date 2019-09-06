import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import App from './App';

//import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';

//saga to GET 
function* getPlants(){
  try {
    const response = yield axios.get('/api/plant');
    yield put({type: 'SET_PLANT', payload: response.data});
  }
  catch(err) {
    console.log('ERROR IN GET', err);
  }
}

//saga to POST
function* postPlants(action){
  try {
    yield axios.post('/api/plant', action.payload);
    yield put({type: 'GET_PLANTS'});
  }
  catch(err) {
    console.log('ERROR IN GET', err);
  }
}

//saga to DELETE
function* deletePlants(action){
  try {
    yield axios.delete('/api/plant/'+action.payload);
    yield put({type: 'GET_PLANTS'});
  }
  catch(err) {
    console.log('ERROR IN GET', err);
  }
}

//create watcherSaga generator function
function* watcherSaga(){
  yield takeEvery('GET_PLANTS', getPlants);
  yield takeEvery('POST_PLANTS', postPlants);
  yield takeEvery('DELETE_PLANTS', deletePlants);
}

//create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const plantList = (state = [], action) => {
  switch (action.type) {
    case 'SET_PLANT':
      return  action.payload 
    default:
      return state;
  }
};


const store = createStore(
  combineReducers({ plantList }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
