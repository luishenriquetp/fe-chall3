import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers configs
import rootReducer from './modules/rootReducer';
// Sagas configs
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

// Redux-persist configuration
const persistConfig = {
	key: 'TACw3b73JK@zK5w!7eQmh&L3KesNWjbDVwf^pRKqGj%D',
	storage: storage,
	whitelist: ['products']
};

// Merge redux-persist with our reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [sagaMiddleware];

// Make store to export with redux-persist, reducers and middlewares
const store = createStore(persistedReducer, compose(applyMiddleware(...middlewares)));

// Start saga middleware
sagaMiddleware.run(rootSaga);

// Object used to start the PersisGate HOC on entry point application(index.js)
const persistor = persistStore(store);

export { store, persistor };
