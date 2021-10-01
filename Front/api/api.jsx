import {user_url} from '../store/Allurl.jsx'

export const join_success = async (body) => {

    const options = {
        method:'POST',
        headers:{
            'Content-type':'application/json;charset=utf-8'
        },
        body:JSON.stringify(body)
    }

    console.log(user_url)
    const response = await fetch(`${user_url}/join_success`,options) //restful api 

}

// export const login_success = async (body) => {
    
//     const options = {
//         method:'GET',
//     }

//     const response = await fetch(`${user_url}/login_success?userid=${userid}&userpw=${userpw}`,options) //restful api 

// }
