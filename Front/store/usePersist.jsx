import {useEffect} from 'react'

export const usePersistedReducer = ([state, dispatch] , key = "@initialState") => {
    useEffect(()=>{
        window.sessionStorage.setItem(key,JSON.stringify(state))
    },[state])

    return [state,dispatch]
}