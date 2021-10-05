import Header from "../../components/header"
import AssetNavi from "../../components/assets/assetNavi"
import AssetContent from "../../components/assets/assetContent"

const assets = () =>{
    return(
        <>
            <Header/>
            <div>
                <div>
                    <AssetNavi />
                </div>
                <div>
                    <AssetContent />
                </div>
            </div>
        </>
    )
}

export default assets;
