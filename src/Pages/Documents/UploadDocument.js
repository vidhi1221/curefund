import { useRef, useState } from "react";
import { FaCloudUploadAlt, FaPlus, FaShieldAlt } from "react-icons/fa";

const UploadDocument = () => {
    const fileInputRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleFiles = (files) => {
        console.log(files); // later send to backend
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        handleFiles(e.dataTransfer.files);
    };

    return (
        <div className="upload-wrapper">
        {/* Upload Box */}
        <div
            className={`upload-box ${isDragging ? "dragging" : ""}`}
            onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current.click()}
        >
            <div className="upload-icon">
            <FaCloudUploadAlt />
            </div>

            <h4>Drag & drop files here</h4>
            <p>or click to browse your files</p>

            <button
            type="button"
            className="choose-file-btn"
            onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current.click();
            }}
            >
            <FaPlus /> Choose Files
            </button>

            <small>
            Supported formats: PDF, JPG, PNG, DOC, DOCX, DICOM <br />
            Maximum file size: 50MB per file
            </small>

            <input
            ref={fileInputRef}
            type="file"
            multiple
            hidden
            onChange={(e) => handleFiles(e.target.files)}
            />
        </div>

        {/* Secure Info */}
        <div className="secure-info-box">
            <FaShieldAlt />
            <div>
            <h5>Secure Upload Process</h5>
            <p>
                All documents are encrypted with AES-256 encryption before being
                stored on IPFS. Only you and authorized guardians can decrypt and
                access your files.
            </p>
            </div>
        </div>
        </div>
    );
};

export default UploadDocument;
