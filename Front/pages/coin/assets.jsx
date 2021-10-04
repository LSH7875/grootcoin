import Header from "../../components/header"
import AssertNavi from "../../components/assert/assertNavi"
import AssertContent from "../../components/assert/assertContent"

const assets = () =>{
    return(
        <>
            <Header/>
            <div>
                <div>
                    <AssertNavi />
                </div>
                <div>
                    <AssertContent />
                </div>
            </div>
        </>
    )
}

export default assets;