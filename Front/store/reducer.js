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
        case "logout":

            return {
                ...state,
                login_boolean: 0,
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
            case "orderbook":{
                let orderArr=[];//총 합을 넣는 array
                let {buy,order,sell,last} = action.payload;
                let current_length = last.toString().length;
                let unit= Math.pow(10,current_length-3);
                let start_money=parseInt(last) + (15*unit);
                let order_Arr=[];//총 합의 값을 넣는 array
                let pre_order_num=0;

                for(let i=0;i<order.length;i++){
                    if(pre_order_num==order[i].price){
                        console.log(order[i].rest);
                        orderArr[(orderArr.length)-1].rest +=order[i].rest;
                    }else{
                        orderArr.push(order[i]);
                    }
                    pre_order_num=order[i].price;
                }

                let j = 0; 
                while(pre_order_num>=orderArr[j].price){
                    j++;
                     if(j==(orderArr.length-1))break;
                }
                j= j>0? j--:0;
                for(let i=0;i<30;i++){
                    if (start_money==orderArr[j].price){
                        order_Arr.push({price:start_money,rest:orderArr[j].rest});
                        j++;
                    }else{
                        order_Arr.push({price:start_money,rest:0});
                    }
                    start_money -=unit;
                }

                return{
                    ...state,
                    orderbook:order_Arr,
                    currentPrice:last,
                    buyQty:buy,
                    sellQty:sell,
                }
            }   
    }
}


export default reducer