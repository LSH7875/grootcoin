import {useEffect} from 'react'

export const usePersistedReducer = ([state, dispatch] , key = "state") => {
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(state))
    },[state])

    return [state,dispatch]
}