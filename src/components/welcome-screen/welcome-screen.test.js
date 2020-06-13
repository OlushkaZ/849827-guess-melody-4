import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

const errorsCount = 4;

// Вы можете запустить все тесты или только определённый
// npm run test.jest -- -t 'snapshot welcomeScreen'
it(`snapshot welcomeScreen`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      errorsCount={errorsCount}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
