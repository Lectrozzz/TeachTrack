// Import assets
import "../assets/style/nopage.css";

// Import component
import HomeButton from "../component/HomeButton";

const NoPage=()=>{
    

    return(
        <>
            <h1>Under Construction...</h1>
            <div className="contentContainer" >
                <p>This page is still under design and development process, please visit again later.</p>
                <div className="homeButtonContainer">
                    <HomeButton/>
                </div>
            </div>
        </>
    );
}

export default NoPage;