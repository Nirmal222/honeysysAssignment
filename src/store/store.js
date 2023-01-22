import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { productReducer } from './products/reducer';
import { styleReducer } from './styles/reducer';

const rootReducers = combineReducers({
    products: productReducer,
    styles: styleReducer
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));