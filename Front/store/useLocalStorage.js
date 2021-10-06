import {useReducer,useEffect} from 'react'
import reducer from '../store/reducer'

function useLocalStorage(key, initialState) {
  const [state, dispatch] = useReducer(reducer, () => window.localStorage.getItem(key) || initialState);

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, dispatch];
}

export default useLocalStorage;