import {createContext} from 'react'

export const initialState={
    login_boolean:0,
    userid:'',
    userpw:'',
    username:'',
    account:0,
    wallet:0,
    msg:'',
};


const Store = createContext(initialState);

export default Store