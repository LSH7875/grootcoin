import Store from '../store/context'
import {useReducer,useContext,useEffect} from 'react'
import reducer from '../store/reducer'
import Head from 'next/head'
import useLocalStorage from '../store/useLocalStorage'
import { usePersistedReducer } from '../store/usePersist'


import '../css/history.module.css'
import '../css/orderBook.module.css'
import '../css/main.module.css'
import '../css/chart.module.css'
import '../css/buyAndSell.module.css'
import '../css/contract.module.css'
import '../css/footer.module.css'
import '../css/assets.module.css'
import '../css/coinNews.module.css'
import '../css/join.module.css'
import '../css/joinAgree.module.css'
import '../css/login.module.css'

const App=({Component,pageProps})=>{
    // const globalContext=useContext(Store)
    const localstorageKey = "@initialState"
    const globalStore = useContext(Store)
    const [state, dispatch] = usePersistedReducer(
        useReducer(reducer, globalStore),
        localstorageKey
    )

    useEffect(() => {
        console.log(localStorage.getItem(localstorageKey))
        if (JSON.parse(localStorage.getItem(localstorageKey))) { 
            dispatch({ 
                type: "init_stored", 
                value: JSON.parse(localStorage.getItem(localstorageKey)),
            });
        }
    }, []);
    return (
        <>
        <Head>
        
        <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
            {/* <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script> */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap" rel="stylesheet"/>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossOrigin="anonymous"
            />
        </Head>
        
        <Store.Provider value={{state,dispatch}}>
            <Component {...pageProps}/>{/*우리가 만든 모든 것이 components에 위치한다.  */}
        </Store.Provider>
        
        </>
    )
}
export default App