import React from "react";

export default function ViewComplaint({ complaint, onClose }) {
  return (
    <div>
      <h2>Complaint Details</h2>
      <p>Name: {complaint.complainerName}</p>
      <p>Complaint: {complaint.complaintName}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
