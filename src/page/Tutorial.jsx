//Import assets
import "../assets/style/tutorial.css";
import newGroupFormImage from "../assets/image/New_Group_Form.jpg";
import activeGroupItemImage from "../assets/image/Active_Group_Item.jpg";
import inactiveGroupItemImage from "../assets/image/Inactive_Group_Item.jpg";
import editGroupFormImage from "../assets/image/Edit_Group_Form.jpg";
import summaryPageImage from "../assets/image/Summary_Page.jpg";

const Tutorial = () =>{
    return(
        <>
            <h1>Tutorial</h1>
            <div className="tutorialContainer" >
                <div className="tutorialSection" >
                    <div className="tutorialHeaderContainer" >
                        <h2>1.Create a new study group</h2>
                    </div>
                    <hr />
                    <div className="tutorialContentContainer" >
                        <p>Click the "New" button on the top right corner to access the "New Group" page.</p>
                        <div className="tutorialMediaContainer" >
                            <button className="btn blueButton">New</button>
                        </div>
                        <p>On the "New Group" form, enter your study group information. Only the Group ID, student count, language and duration are required; the rest of the fields are optional.</p>
                        <div className="tutorialMediaContainer">
                            <img src={newGroupFormImage} alt="New Group Form" className="fitImage" />
                            <p className="imageDescription" >New Group Form</p>
                        </div>
                        <p>Click the "Create" button to save the group information. If you decide not to proceed, click the "Cancel" button.</p>
                    </div>
                </div>
                <div className="tutorialSection">
                    <div className="tutorialHeaderContainer" >
                        <h2>2.Track your group progress</h2>
                    </div>
                    <hr />
                    <div className="tutorialContentContainer" >
                        <p>Check your group list on the home page. Each item in the list includes the round count, previous class content, next class date, and current status (active/inactive).</p>
                        <div className="tutorialMediaContainer">
                            <img src={activeGroupItemImage} alt="Active Group Item" className="fitImage" />
                            <p className="imageDescription" >Active Group Item</p>
                        </div>
                        <div className="tutorialMediaContainer">
                            <img src={inactiveGroupItemImage} alt="Inactive Group Item" className="fitImage" />
                            <p className="imageDescription" >Inactive Group Item</p>
                        </div>
                        <p>You can asily edit these details (round count, currrent lesson and next class date) after completing your class then click save to update the progress. Changing the group status will automatically reorder the items.</p>
                    </div>
                </div>
                <div className="tutorialSection">
                    <div className="tutorialHeaderContainer" >
                        <h2>3.Edit and delete your group</h2>
                    </div>
                    <hr />
                    <div className="tutorialContentContainer" >
                        <p>Click on the group ID inside the group item to access the "Edit Group" page. On the "Edit Group" page, you can make changes to your group details.</p>
                        <div className="tutorialMediaContainer">
                            <img src={editGroupFormImage} alt="Edit Group Page" className="fitImage" />
                            <p className="imageDescription" >Edit Group Form</p>
                        </div>
                        <p>Click the "Save" button to update the group details or click the "Delete" button to remove the study group.</p>
                    </div>
                </div>
                <div className="tutorialSection">
                    <div className="tutorialHeaderContainer" >
                        <h2>4.Check your summary</h2>
                    </div>
                    <hr />
                    <div className="tutorialContentContainer" >
                        <p>View your teaching fee and round count for each group, along with the total amount, on the "Summary" page.</p>
                        <div className="tutorialMediaContainer">
                            <img src={summaryPageImage} alt="Summary Page" className="fitImage" />
                            <p className="imageDescription" >Summary Page</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tutorial;