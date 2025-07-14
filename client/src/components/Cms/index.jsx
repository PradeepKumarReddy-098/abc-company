import { useState, useEffect } from "react";
import {toast} from 'react-hot-toast'
import "./index.css";

const CMSpage = () => {
  const [currentHeading, setCurrentHeading] = useState("");
  const [editedHeading, setEditedHeading] = useState("");
  const [isEditing, setIsEditings] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHeading = async () => {
      setIsLoading(true);
      try {
        const request = await fetch("https://brynk-labs-kcsn.onrender.com/api/active-heading");
        const response = await request.json();
        setCurrentHeading(response.heading);
        setEditedHeading(response.heading);
      } catch (error) {
        console.error("Error fetching heading for landing page:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHeading();
  }, []);


  const handleCancelClick = () => {
    setIsEditings(false);
    setEditedHeading(currentHeading);
  };


  const handleSaveClick = async () => {
    const request = await fetch("https://brynk-labs-kcsn.onrender.com/api/save-heading", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        heading: editedHeading,
      }),
    });
    console.log(request)
    if(request.ok){
        toast.success('Heading save successfully')
        setCurrentHeading(editedHeading)
        setIsEditings(false)
    }else{
      toast.error('something went wrong')
    }
  };
  if (isLoading) {
    return <div className="cms-loading">Loading...</div>;
  }
  return (
    <div className="cms-page-container no-sidebar">
  
      <div className="cms-content">
        <h2>CMS Page - Manage Website Content</h2>

        <div className="cms-section">
          <h3>Heading</h3>
          <textarea
            id="headingInput"
            value={editedHeading}
            onChange={(e) => setEditedHeading(e.target.value)}
            disabled={!isEditing}
            className={isEditing ? "editable" : ""}
            row={50}
          ></textarea>

          <div className="cms-buttons">
            {!isEditing ? (
              <button
                onClick={() => setIsEditings(true)}
                className="cms-button edit"
              >
                Edit
              </button>
            ) : (
              <>
                <button onClick={handleSaveClick} className="cms-button save">
                  Save
                </button>
                <button
                  onClick={handleCancelClick}
                  className="cms-button cancel"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMSpage;
