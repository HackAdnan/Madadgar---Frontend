import React, { useState } from "react";
import axios from "axios";

const CreateReport = () => {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nicNumber, setNicNumber] = useState("");
  const [lastLocation, setLastLocation] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reportData = {
      name,
      fatherName,
      phoneNumber,
      nicNumber,
      lastLocation,
      additionalInfo
    };

    try {
      const response = await axios.post("http://localhost:7000/createReport", reportData);
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mt-1" style={{ marginTop: '100px' }}>
      <h2 className="text-center mb-4" style={{ marginTop: '195px' }}>Create Report</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fatherName" className="form-label">Father's Name</label>
          <input
            id="fatherName"
            type="text"
            className="form-control"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input
            id="phoneNumber"
            type="text"
            className="form-control"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nicNumber" className="form-label">NIC Number</label>
          <input
            id="nicNumber"
            type="text"
            className="form-control"
            value={nicNumber}
            onChange={(e) => setNicNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastLocation" className="form-label">Last Location</label>
          <input
            id="lastLocation"
            type="text"
            className="form-control"
            value={lastLocation}
            onChange={(e) => setLastLocation(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="additionalInfo" className="form-label">Additional Information</label>
          <textarea
            id="additionalInfo"
            className="form-control"
            rows="3"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateReport;
