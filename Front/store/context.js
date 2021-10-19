import {createContext} from 'react'

export const initialState={
    login_boolean:true,
    userid:'',
    userpw:'',
    username:'',
    account:0,
    wallet:0,
    msg:'',
    upload_Arr:[],
    graph:[],
    precontract:[],
    orderbook:[],
    currentPrice:0,
    buyQty:0,
    sellQty:0
};


const Store = createContext(initialState);

export default Store