// import React from 'react'

// function Card({image}) {
//   return (
//     <div className="card shadow-lg border-0 rounded-5 overflow-hidden" style={{ width: "18rem", background:"#030326" }}>
//       <img src={image} className="card-img-top rounded-top-4"/>

//     </div>
//   )
// }

// export default Card



import React from "react";

function Card({image}) {
    const [frontendImage, setFrontendImage] = useState(null);
    const [backendImage, setBackendImage] = useState(null);
    // const[selectedImage,setSelectedImage] = useState(null)
  return (
    <div
      className="card shadow-lg border-0 rounded-4 overflow-hidden m-3"
      style={{ width: "200px", background: "#030326" ,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
      }}

      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.08)";
        e.currentTarget.style.boxShadow = "0 0 25px rgba(255, 255, 255, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
      }} onClick={()=>{setSelectedImage(image)
        setBackendImage(null)
        setFrontendImage(null)
      }}>
      <img
        src={image}
        alt="AI"
        className="card-img-top"
        style={{
          height: "200px",
          objectFit: "cover",
          borderRadius: "1rem",
        }}
      />
    </div>
  );
}

export default Card;
