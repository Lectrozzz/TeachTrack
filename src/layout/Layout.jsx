// Import react
import { Outlet, Link } from "react-router-dom";

// Import assets
import "../assets/style/layout.css";

const Layout = ()=>{
    return(
        <>
            <div className="navbarContainer" >
                <header>
                    <h1>TeachTrack</h1>
                </header>
                <nav>
                    <div className="navContainer">
                        <div>
                            <Link to="/">
                                <div className="navItem">Home</div>
                            </Link>
                        </div>
                        <div>
                            <Link to="/summary">
                                <div className="navItem">Summary</div>
                            </Link>
                        </div>
                        <div>
                            <Link to="/tutorial">
                                <div className="navItem">Tutorial</div>
                            </Link>
                        </div>
                        <div>
                            <Link to="/about">
                                <div className="navItem">About</div>
                            </Link>
                        </div>
                    </div>
                </nav>
                <hr />
            </div>
            <div className="outletContainer">
                <Outlet/>
            </div>
        </>
    );
}

export default Layout;