import {useReducer,useEffect, useState} from 'react'
import reducer from '../store/reducer'

function useLocalStorage(key, initialState) {
  const [on, seton] = useState(window.localStorage.getItem('login_boolean'))
  return on;
}

export default useLocalStorage;