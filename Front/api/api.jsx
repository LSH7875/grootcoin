import {base_url} from '../store/Allurl.jsx'

export const join_success = async (body) => {

    const options = {
        method:'POST',
        headers:{
            'Content-type':'application/json;charset=utf-8'
        },
        body:JSON.stringify(body)
    }

    const response = await fetch(`${base_url}/join_success`,options) //restful api 

}

export const login_success = async (body) => {
    
    const options = {
        method:'GET',
        headers:{
            'Content-type':'application/json;charset=utf-8'
        },
        body:JSON.stringify(body)
    }

    const response = await fetch(`${base_url}/login_success`,options) //restful api 

}
