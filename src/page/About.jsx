//Import assets
import "../assets/style/about.css";

const About = () =>{
    return(
        <>
            <h1>About</h1>
            <div className="tutorialContainer" >
                <div className="tutorialSection">
                    <div className="tutorialHeaderContainer">
                        <h2>TeachTrack</h2>
                    </div>
                    <hr />
                    <div className="tutorialContentContainer">
                        <p>The best way to track and manage your teaching progress.</p>
                    </div>
                </div>
                <div className="tutorialSection">
                    <div className="tutorialHeaderContainer">
                        <h2>Background</h2>
                    </div>
                    <hr />
                    <div className="tutorialContentContainer">
                        <p>This project came from my pain-point when I'm a Python teacher at Algorithmics school. 
                            There're so many classes that I taught, so I want to record there progress of each courses and also calculate the income that I got from each them.
                            Currently I need to store all of my class history, update the data and calculate teaching fee by Microsoft Excel which doesn't fully satisfy my need.
                            I still need to do something manually such as changing class status and rearrange the data by myself.
                            So I decided to create a web-app to slove all of these problem and include some of the features that I might need in the future too.
                            <br />
                            (I also think that this project will be a great start for me to learn web development.)
                        </p>
                    </div>
                </div>
                <div className="tutorialSection">
                    <div className="tutorialHeaderContainer">
                        <h2>Features</h2>
                    </div>
                    <hr />
                    <div className="tutorialContentContainer">
                        <div className="tutorialSubsectionContainer">
                            <div className="tutorialSubheaderContainer">
                                <h3>Main Features</h3>
                            </div>
                            <ul className="aboutList" >
                                <li>Show list of the class, including their information and status ( active/inactive )</li>
                                <li>Create, update and delete class detials</li>
                                <li>Calculate teaching fee based on different condition</li>
                            </ul>
                        </div>
                        <div className="tutorialSubsectionContainer">
                            <div className="tutorialSubheaderContainer">
                                <h3>Additional Features</h3>
                            </div>
                            <ul className="aboutList" >
                                <li>Include tutorial for new user</li>
                                <li>Sort & filter class list based on user preference</li>
                                <li>Create user account</li>
                                <li>Optional theme select</li>
                                <li>TBA</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tutorialSection">
                    <div className="tutorialHeaderContainer">
                        <h2>Development plan</h2>
                    </div>
                    <hr />
                    <div className="tutorialContentContainer">
                        <p>There will be 4 main phases of development. In each phase there will be a small update from time to time. ( ex. version 1.x )</p>
                        <div className="tutorialSubsectionContainer">
                            <div className="tutorialSubheaderContainer">
                                <h3>Phase 1 ( prototype )</h3>
                            </div>
                            <ul className="aboutList" >
                                <li>Create functional single page website with basic UI</li>
                                <li>Use basic HTML, CSS and Javascript</li>
                                <li>Include all main features</li>
                            </ul>
                        </div>
                        <div className="tutorialSubsectionContainer">
                            <div className="tutorialSubheaderContainer">
                                <h3>Phase 2 ( redesign )</h3>
                            </div>
                            <ul className="aboutList" >
                                <li>Redesign UI</li>
                                <li>Connect to database</li>
                                <li>Separate most of the main features into multiple pages</li>
                                <li>Include some of the extra features</li>
                            </ul>
                        </div>
                        <div className="tutorialSubsectionContainer">
                            <div className="tutorialSubheaderContainer">
                                <h3>Phase 3 ( full version )</h3>
                            </div>
                            <ul className="aboutList" >
                                <li>Improve reponsive design</li>
                                <li>Adjust some UI</li>
                                <li>Coming soon</li>
                            </ul>
                        </div>
                        <div className="tutorialSubsectionContainer">
                            <div className="tutorialSubheaderContainer">
                                <h3>Phase 4 ( optimization & maintenance )</h3>
                            </div>
                            <ul className="aboutList" >
                                <li>Coming soon</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;