import React from "react";
import { ToastContainer } from "react-toastify";
import RouterComponent from "./components/RouterComponent";

function App(): React.ReactElement {
  return (
    <>
      <RouterComponent />
      <ToastContainer draggable theme="colored" />
    </>
  );
}

export default App;
