import { compareDocumentPosition } from '../../Back/node_modules/domutils/lib'
import {initialState} from './context'

const reducer = (state,action)=>{
    switch(action.type){
        case "init_stored":
            console.log('init_stored : ',action.value.login_boolean)
            return {
                ...state,
                login_boolean:action.value.login_boolean
                
            }
        case "login_boolean_true":
            console.log(action.payload)
            return {
                ...state,
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
        case "logout":

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
        case "upload":
            let NewArr = [...state.upload_Arr]
            for(let i=0; i<action.payload.length-1; i++){
                NewArr.push(action.payload[i])
            }
      
            return {
                ...state,
                upload_Arr:NewArr
                
            }
        case "precontract":
            let arr = Object.values(action.preContractArr);
            return {
                ...state,
                precontract:[...arr],
                prelength:state.precontract.length
            }
        case "precontractList":
            return {
                ...state,
                length:action.length
            }
        case "precontractUpdate":
            return {
                ...state,
                preContractArr:action.preContractArr
            }
        case "login_boolean_true_middle":
            return {
                ...state,
                login_boolean:action.payload
            }
    }
}


export default reducer