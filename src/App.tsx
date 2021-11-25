import React from "react";
import { ToastContainer } from "react-toastify";
import { Helmet, HelmetProvider } from "react-helmet-async";
import RouterComponent from "./components/RouterComponent";

function App(): React.ReactElement {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | TMDB" defaultTitle="TMDB">
        <meta name="description" content="The Movie DataBase" />
      </Helmet>
      <RouterComponent />
      <ToastContainer draggable theme="colored" />
    </HelmetProvider>
  );
}

export default App;
