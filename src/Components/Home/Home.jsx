import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-div">
      <div
        style={{
          backgroundImage: `url("pics/Homepage-Model-3-Desktop-LHD.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="hpage1 one"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="sfer">Model 3</p>
          <p>Leasing starting at $349/mo</p>
        </div>
        <div className="icns">
          <button className="orderbtn ob">Custom Order</button>
          <button className="orderbtn lb">Demo Drive</button>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url("pics/Homepage-Model-Y-Global-Desktop.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="hpage1 one"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="sfer">Model Y</p>
        </div>
        <div className="icns">
          <button className="orderbtn ob">Custom Order</button>
          <button className="orderbtn lb">Demo Drive</button>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url("pics/Homepage-Model-S-Desktop-LHD.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="hpage1 one"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="sfer">Model S</p>
          <p className="scdd">Schedule a Demo Drive</p>
        </div>
        <div className="icns">
          <button className="orderbtn ob">Custom Order</button>
          <button className="orderbtn lb">View Inventory</button>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url("pics/Homepage-Model-X-Desktop-LHD.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="hpage1 one"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="sfer">Model X</p>
          <p className="scdd">Schedule a Demo Drive</p>
        </div>
        <div className="icns">
          <button className="orderbtn ob">Custom Order</button>
          <button className="orderbtn lb">View Inventory</button>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url("pics/firstpage.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="hpage1 one"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="sfer">Solar Pannels</p>
          <p>Lowest Cost Solar pannels in America and Ghana</p>
        </div>
        <div className="icns">
          <button className="orderbtn ob">Order Now</button>
          <button className="orderbtn lb">Learn More</button>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url("pics/Homepage-SolarRoof-Desktop-Global.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="hpage1 one"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="sfer">Solar Roof</p>
          <p>Produce Clean Energy From Your Roof</p>
        </div>
        <div className="icns">
          <button className="orderbtn ob">Order Now</button>
          <button className="orderbtn lb">Learn More</button>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url("pics/dd739764-bcaa-4263-9488-8c73bc9fb046.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="hpage1 one"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="sfer">Accessories</p>
        </div>
        <div className="icns">
          <button className="orderbtn ob">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
