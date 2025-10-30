

// import React, { useState } from "react";
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom"; 

// function Customize2() {
//   const [assistantName, setAssistantName] = useState("");
//   const [backendImage,selectedImage] = useContext("");
//   const navigate = useNavigate(); 

//   const handleUpdateAssistant = async () => {
//     try {
//       let formData = new FormData()
//       formData.append("assistantName",assistantName)
//       if(backendImage){
//         formData.append("assistantImage",backendImage)
//       }else{
//         formData.append("imageUrl",selectedImage)
//       }
//       const result = await axios.post(`${serverUrl}`,{withCredentials:true})
//       console.log(result.data)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <div
//       className="w-100 min-vh-100 d-flex flex-column align-items-center justify-content-center"
//       style={{
//         background: "linear-gradient(135deg, #ff4d4d, #6610f2)",
//       }}
//     >
//       <h1 className="text-white mb-4">
//         Enter your <span className="fw-bold text-warning">Assistant Name</span>
//       </h1>

//       <div className="mb-3 d-flex flex-column align-items-center">
//         <label className="form-label fw-semibold text-white mb-2">
//           Username
//         </label>
//         <input
//           type="text"
//           className="form-control text-center"
//           placeholder="Enter assistant name"
//           value={assistantName} 
//           onChange={(e) => setAssistantName(e.target.value)} // ✅ updates state
//           required
//           style={{ width: "250px", borderRadius: "10px" }}
//         />

//         {assistantName && (
//           <button
//             type="button"
//             onClick={() =>{ handleUpdateAssistant()}} 
            
//             className="btn btn-warning fw-bold px-4 py-2 mt-4"
//             style={{
//               transition: "0.3s",
//               borderRadius: "10px",
             
//             }}>
//               Create My Personal Assistant
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Customize2;


import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"; 

function Customize2() {
  const [assistantName, setAssistantName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  //const [backendImage,selectedImage] = useContext("");
  const navigate = useNavigate(); 

  const handleUpdateAssistant = async () => {
    try {
      let formData = new FormData()
      formData.append("assistantName",assistantName)
      if(backendImage){
       formData.append("assistantImage", selectedImage);
      }else{
        formData.append("imageUrl",imageUrl)
      }
      const result = await axios.post(`${serverUrl}`,{withCredentials:true})
      console.log(result.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div
      className="w-100 min-vh-100 d-flex flex-column align-items-center justify-content-center"
      style={{
        background: "linear-gradient(135deg, #ff4d4d, #6610f2)",
      }}
    >
      <h1 className="text-white mb-4">
        Enter your <span className="fw-bold text-warning">Assistant Name</span>
      </h1>

      <div className="mb-3 d-flex flex-column align-items-center">
        <label className="form-label fw-semibold text-white mb-2">
          Username
        </label>
        <input
          type="text"
          className="form-control text-center"
          placeholder="Enter assistant name"
          value={assistantName} 
          onChange={(e) => setAssistantName(e.target.value)} // ✅ updates state
          required
          style={{ width: "250px", borderRadius: "10px" }}
        />

        {assistantName && (
          <button
            type="button"
            onClick={() =>{ handleUpdateAssistant()}} 
            
            className="btn btn-warning fw-bold px-4 py-2 mt-4"
            style={{
              transition: "0.3s",
              borderRadius: "10px",
             
            }}>
              Create My Personal Assistant
          </button>
        )}
      </div>
    </div>
  );
}

export default Customize2;

