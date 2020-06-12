import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  return <WelcomeScreen errorCount={props.errorCount}/>;
};

App.propTypes = {
  errorCount: PropTypes.number.isRequred,
};

export default App;
