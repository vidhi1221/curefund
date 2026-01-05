// Documents.jsx
import { useState,useEffect } from "react";
import UploadForm from "./UploadDocument";
import DocumentList from "./DocumentList";
import { useLocation } from "react-router-dom";

const Documents = () => {
    const location = useLocation();
    const [showUploadForm, setShowUploadForm] = useState(false);

    useEffect(() => {
        if(location.state?.openUpload){
            setShowUploadForm(true);
        }
        else{
            setShowUploadForm(false);
        }
    }, [location.state]);

    return (
        <>
            <div className="documents-page container">
                <div className="documents-header">
                    

                    {/* {!showUploadForm && (
                    <button className="btn btn-primary" onClick={() => setShowUploadForm(true)}> Upload Document
                    </button>
                    )} */}
                </div>

                {showUploadForm ? (
                    <UploadForm onClose={() => setShowUploadForm(false)} />
                ) : (
                    <DocumentList />
                )}
            </div>
        </>
    )
};

export default Documents;
