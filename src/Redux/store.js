import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducer';
import thunk from 'redux-thunk';


function configureStore() {
  const store = createStore(
    reducers,
    compose(
      applyMiddleware(thunk)
    )
  );

  return store;
}

const store = configureStore();

export default store;