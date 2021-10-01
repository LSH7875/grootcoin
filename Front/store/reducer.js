import {initialState} from './context'

const reducer = (state,action)=>{
    switch(action.type){
        case "login_boolean_true":
            
            return {
                ...state,
                login_boolean: action.payload,
                userid: action.userid,
                username: action.username,
                userpw: action.userpw,
                account: action.account,
                wallet: action.wallet,
                msg:''
            }
        
        case "login_boolean_false":

            return {
                ...state,
                login_boolean: action.payload,
                userid:'',
                userpw:'',
                username:'',
                account:0,
                wallet:0,
                msg:'로그인을 진행해주세요'
            }

        case "income":

            return {
                ...state,
                account:action.payload,
            }
        
        case "outcome":

            return {
                ...state,
                account:action.payload,
            }
        default:
            return state;
    }
}


export default reducer