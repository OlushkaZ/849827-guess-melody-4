import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  return <WelcomeScreen errorCount={props.errorCount}/>;
};

export default App;
