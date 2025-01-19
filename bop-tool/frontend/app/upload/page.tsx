'use client'

import React, { useState, ChangeEvent  } from "react";

const UploadPage = () => {
  const [file, setFile] = useState<File | null>(null);

  // ファイル選択時のイベントハンドラー
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a CSV file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8080/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("File uploaded successfully");
      } else {
        alert("Failed to upload file");
      }
    } catch (err) {
      console.error("Error uploading file:", err);
      alert("Error uploading file");
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload CSV</button>
    </div>
  );
};

export default UploadPage;
