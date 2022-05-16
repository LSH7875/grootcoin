import {user_url} from '../store/Allurl'

export const join_success = async (body) => {

    const options = {
        method:'POST',
        headers:{
            'Content-type':'application/json;charset=utf-8'
        },
        body:JSON.stringify(body)
    }

    console.log(user_url)
    const response = await fetch(`${user_url}/user/join_success`,options) //restful api 
    console.log(response)

}
