import { createContext } from 'react';
import { createStore } from 'redux';
import { createDispatchHook, createSelectorHook } from 'react-redux';
import reducers from '../reducers';

export const appContext = createContext();
export const store = createStore(reducers);

export const useDispatch = createDispatchHook(appContext);
export const useSelector = createSelectorHook(appContext);