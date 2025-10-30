

// import React, { useRef, useState } from "react";
// import Card from "./components/card";
// import ai1 from "./assets/ai1.jpg";
// import ai2 from "./assets/ai2.jpg";
// import ai3 from "./assets/ai3.jpg";
// import ai4 from "./assets/ai4.jpg";
// import ai5 from "./assets/ai5.jpg";
// import ai6 from "./assets/ai6.jpg";
// import { BiSolidImageAdd } from "react-icons/bi";


// function Customize() {
//     const[frontendImage,setFrontendImage] = useState(null)
//     const[backendImage,setBackendImage] = useState(null)
//     const[selectedImage,setSelectedImage] = useState(null)
//     const inputImage = useRef()

//     const handleImage=(e)=>{
//         const file = e.target.files[0]
//         setBackendImage(file)
//         setFrontendImage(URL.createObjectURL(file))

//     }
//   return (
//     <div
//       className="w-100 min-vh-100 d-flex flex-column align-items-center justify-content-center"
//       style={{
//         background: "linear-gradient(135deg, #ff4d4d, #6610f2)",
//       }}
//     >
//         <h1>Select your <span>Assistant Image</span></h1>
      
//       <div className="d-flex flex-wrap justify-content-center">
//         <Card image={ai1} />
//         <Card image={ai2} />
//         <Card image={ai3} />
//         <Card image={ai4} />
     
//       </div>

//       <div className="d-flex justify-content-center mt-3">
//         <Card image={ai5} />
//         <Card image={ai6} />
//         <div
//         className="card shadow-lg border-0 rounded-4 overflow-hidden m-3"
//         style={{ width: "200px", background: "#030326" ,
//         transition: "transform 0.3s ease, box-shadow 0.3s ease",
//         cursor: "pointer", justifyContent: "center", alignItems: "center", color: "white", 
//       }} 
//        onMouseEnter={(e) => {
//         e.currentTarget.style.transform = "scale(1.08)";
//         e.currentTarget.style.boxShadow = "0 0 25px rgba(255, 255, 255, 0.4)";
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.transform = "scale(1)";
//         e.currentTarget.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
        
//       }}
//       onClick={()=>inputImage.current.click()}
//       >
//         {!frontendImage && <BiSolidImageAdd />}
//         {frontendImage && <img src={frontendImage} className="img-fluid w-100 h-100 object-fit-cover rounded"/>}
  
//       </div>
//       <input type="file" accept='image/*' ref={inputImage} hidden
//       onChange={handleImage}/>
//       </div> 

//     {selectedImage && <button 
//           type="submit"
//             className="btn btn-danger w-30 fw-bold"
//             style={{ transition: "0.3s" }}
//       >Next</button>}
//     </div>
//   );
// }

// export default Customize;

import React, { useRef, useState } from "react";
import Card from "./components/Card";
import ai1 from "./assets/ai1.jpg";
import ai2 from "./assets/ai2.jpg";
import ai3 from "./assets/ai3.jpg";
import ai4 from "./assets/ai4.jpg";
import ai5 from "./assets/ai5.jpg";
import ai6 from "./assets/ai6.jpg";
import { BiSolidImageAdd } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Customize() {
  const [frontendImage, setFrontendImage] = useState(null);
  const [backendImage, setBackendImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate()
  const inputImage = useRef();

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setBackendImage(file);
    const url = URL.createObjectURL(file);
    setFrontendImage(url);
    setSelectedImage(url);
  };

  const handleCardSelect = (image) => {
    setSelectedImage(image);
    setFrontendImage(null); 
  };

  return (
    <div
      className="w-100 min-vh-100 d-flex flex-column align-items-center justify-content-center"
      style={{
        background: "linear-gradient(135deg, #ff4d4d, #6610f2)",
      }}
    >
      <h1 className="text-white mb-4">
        Select your <span className="fw-bold text-warning">Assistant Image</span>
      </h1>

      <div className="d-flex flex-wrap justify-content-center">
        {[ai1, ai2, ai3, ai4].map((img, i) => (
          <div
            key={i}
            className={`card m-3 shadow border-0 rounded-4 overflow-hidden ${
              selectedImage === img ? "border border-warning border-3" : ""
            }`}
            style={{
              width: "200px",
              height: "200px",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onClick={() => handleCardSelect(img)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src={img}
              alt={`AI ${i + 1}`}
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-3">
        {[ai5, ai6].map((img, i) => (
          <div
            key={i}
            className={`card m-3 shadow border-0 rounded-4 overflow-hidden ${
              selectedImage === img ? "border border-warning border-3" : ""
            }`}
            style={{
              width: "200px",
              height: "200px",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onClick={() => handleCardSelect(img)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src={img}
              alt={`AI ${i + 5}`}
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
        ))}

        <div
          className="card shadow-lg border-0 rounded-4 overflow-hidden m-3 d-flex align-items-center justify-content-center"
          style={{
            width: "200px",
            height: "200px",
            background: "#030326",
            color: "white",
            cursor: "pointer",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.08)";
            e.currentTarget.style.boxShadow = "0 0 25px rgba(255, 255, 255, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
          }}
          onClick={() => inputImage.current.click()}
        >
          {!frontendImage && <BiSolidImageAdd size={40} />}
          {frontendImage && (
            <img
              src={frontendImage}
              alt="Custom upload"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          )}
          <input
            type="file"
            accept="image/*"
            ref={inputImage}
            hidden
            onChange={handleImage}
          />
        </div>
      </div>

      {selectedImage && (
        <button
          type="submit"
          onClick={()=>navigate("/customize2")}
          className="btn btn-warning fw-bold px-4 py-2 mt-4"
          style={{
            transition: "0.3s",
            borderRadius: "10px",
           }}
        > Next
        </button>
      )}
    </div>
  );
}

export default Customize;
