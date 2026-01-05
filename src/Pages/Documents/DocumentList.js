import { useState, useMemo } from "react";
import { FaSearch, FaPlus, FaFileAlt, FaEye, FaDownload } from "react-icons/fa";
import FilterDropdown from "../FilterDropdown";
import { useNavigate } from "react-router-dom";



const DocumentList = () => {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("All Types");
    const [category, setCategory] = useState("All Categories");
    const navigate = useNavigate();

    const documents = [
        {
        id: 1,
        title: "Blood Test Results - Complete Panel",
        type: "Lab Report",
        category: "Laboratory",
        size: "2.3 MB",
        uploaded: "2024-08-15",
        access: 3,
        },
        {
        id: 2,
        title: "Cardiac MRI Scan",
        type: "Medical Imaging",
        category: "Radiology",
        size: "15.7 MB",
        uploaded: "2024-08-10",
        access: 2,
        },
        {
        id: 3,
        title: "Prescription - Cardiac Medication",
        type: "Prescription",
        category: "Medication",
        size: "0.8 MB",
        uploaded: "2024-08-12",
        access: 1,
        },
        {
        id: 4,
        title: "Medical History Summary",
        type: "Medical Record",
        category: "General",
        size: "1.2 MB",
        uploaded: "2024-08-08",
        access: 5,
        },
    ];

    /* 🔍 SEARCH + FILTER LOGIC */
    const filteredDocs = useMemo(() => {
        return documents.filter(doc => {
        const matchSearch =
            doc.title.toLowerCase().includes(search.toLowerCase());

        const matchType =
            type === "All Types" || doc.type === type;

        const matchCategory =
            category === "All Categories" || doc.category === category;

        return matchSearch && matchType && matchCategory;
        });
    }, [search, type, category]);

    return (
        <div className="documents-page container">
        {/* HEADER */}
            <div className="documents-header">
                <div>
                <h2>Medical Documents</h2>
                <p>Your encrypted health records stored on IPFS blockchain</p>
                </div>

                <button className="upload-btn" onClick={() => navigate("/home/documents",{ state: { openUpload: true } })} >
                    <FaPlus /> Upload Document
                </button>
            </div>

        {/* FILTER BAR */}
        <div className="documents-filter">
            <div className="search-box">
            <FaSearch />
            <input
                placeholder="Search documents..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            </div>

            <FilterDropdown
            value={category}
            options={[
                "All Categories",
                "Laboratory",
                "Radiology",
                "Medication",
                "General",
            ]}
            onChange={setCategory}
            />

            <FilterDropdown
            value={type}
            options={[
                "All Types",
                "Lab Report",
                "Medical Imaging",
                "Prescription",
                "Medical Record",
            ]}
            onChange={setType}
            />
        </div>

        {/* DOCUMENT GRID */}
        <div className="documents-grid">
            {filteredDocs.map(doc => (
            <div className="document-card" key={doc.id}>
                <div className="doc-header">
                    <div className="doc-icon">
                        <FaFileAlt />
                    </div>
                    <span className="encrypted-badge">Encrypted</span>
                </div>

                <h4>{doc.title}</h4>

                <div className="doc-meta">
                    <p><span>Type:</span><span className="tag">{doc.type}</span></p>
                    <p><span>Size:</span>{doc.size}</p>
                    <p><span>Uploaded:</span>{doc.uploaded}</p>
                    <p><span>Access Count:</span>{doc.access} times</p>
                </div>

                <div className="doc-actions">
                    <button><FaEye /> View</button>
                    <button><FaDownload /></button>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default DocumentList;
