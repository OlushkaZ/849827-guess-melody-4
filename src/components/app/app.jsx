import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  return <WelcomeScreen errorsCount={props.errorsCount}/>;
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
