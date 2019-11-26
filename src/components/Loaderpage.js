import React from "react";
import loaderImg from "../images/ajax-loader.gif";
function Loaderpage() {
  const style = {
    loader: {
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100vh"
    }
  };
  return (
    <div style={style.loader}>
      <img src={loaderImg} alt="loading ..." />
    </div>
  );
}
export default Loaderpage;
