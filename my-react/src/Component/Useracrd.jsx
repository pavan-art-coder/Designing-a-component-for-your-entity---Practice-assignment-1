// write the component code here
import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/150"; // Placeholder image
  const Name = "rsj";
  const Email = "rsj@gmail.com";
  const Phone = "6548904570";
  const Address = "123 Main Street, Springfield, USA";

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-5 flex flex-col items-center border border-gray-200">
      <img
        className="w-24 h-24 rounded-full mb-4 border-2 border-gray-300"
        src="https://imgs.search.brave.com/lSMBOwIekz4lNO3JVHCXI6v3TGe1elqKkDOp4sI0R_g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/NjgxODIxL3Bob3Rv/L2Fub255bW91cy1w/cm9maWxlLXlvdW5n/LW1hbi1zaWxob3Vl/dHRlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1iN2xlRmJz/R0Y1ZDFFV18xRzRN/b250b0U4V18xQnM5/SUZ6S1lrbU9PQXdj/PQ"
        alt="Profile"
      />
      <h2 className="text-xl font-semibold text-gray-800">{Name}</h2>
      <p className="text-gray-600 text-sm">{Email}</p>
      <p className="text-gray-600 text-sm">{Phone}</p>
      <p className="text-gray-600 text-sm text-center mt-2">{Address}</p>
    </div>
  );
};

export default Usercard;