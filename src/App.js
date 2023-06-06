import React, { useEffect, useState } from "react";
import "./App.css";
import RouteApp from "./components/routes";
import { Bars } from "react-loader-spinner";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoader(false);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      {loader ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Bars
            height="80"
            width="80"
            color="#00e69c"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <RouteApp />
      )}
    </div>
  );
}

export default App;
