import React, { useState } from "react";
import { uploadImage } from "../api";
import "./upload.css";

function Upload() {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleUpload = async () => {
        if (!file) return;

        setLoading(true);
        try {
            const res = await uploadImage(file);
            setResult(res.data);
        } catch (err) {
            console.log(err);
            alert("Error uploading file");
        }
        setLoading(false);
    };

    return (
        <div className="container">
            <div className="card">
                <h2 className="title">💸 AI Expense Analyzer</h2>

                <input
                    type="file"
                    className="file-input"
                    onChange={(e) => setFile(e.target.files[0])}
                />

                <button className="btn" onClick={handleUpload}>
                    {loading ? "Processing..." : "Upload & Analyze"}
                </button>

                {result && (
                    <div className="result">
                        <h3>Extracted Text</h3>
                        <p>{result.extracted_text}</p>

                        <h3>AI Insights</h3>
                        <p>{result.ai_response}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Upload;
