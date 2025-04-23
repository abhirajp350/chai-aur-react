import { useState } from "react";

const BgChanger = () => {
  const [color, setColor] = useState("aliceblue");

//   const handleBgChanger = (newColor) => {
//     console.log("Color: ", newColor)
//     // let newpassColor = newColor
//     setColor(newColor);
//   }
  return (
    <>
    <div style={{backgroundColor: color,  width: "100%", height: "100vh"}} className="container-fluid">
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="row" style={{background: "#f0f0f0",padding: "1.2rem 1.5rem", borderRadius: "1.5rem", position: "absolute", bottom: "1.5rem"}}>
                <div className="col-lg-2 col-md-4 col-sm-2 mb-2"><button className="btn btn-success" onClick={() => setColor("#198754")}>green</button></div>
                <div className="col-lg-2 col-md-4 col-sm-2 mb-2"><button className="btn btn-danger" onClick={() => setColor("#dc3545")}>red</button></div>
                <div className="col-lg-2 col-md-4 col-sm-2 mb-2"><button className="btn btn-warning" onClick={() => setColor("#ffc107")}>orange</button></div>
                <div className="col-lg-2 col-md-4 col-sm-2 mb-2"><button className="btn btn-primary" onClick={() => setColor("#0d6efd")}>blue</button></div>
                <div className="col-lg-2 col-md-4 col-sm-2 mb-2"><button className="btn btn-info" onClick={() => setColor("#0dcaf0")}>sky</button></div>
                <div className="col-lg-2 col-md-4 col-sm-2 mb-2"><button className="btn btn-secondary" onClick={() => setColor("#6c757d")}>grey</button></div>
            </div>
        </div>
    </div>
    </>
  );
};

export default BgChanger;
