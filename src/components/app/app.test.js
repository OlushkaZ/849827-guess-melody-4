import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const errorsCount = 4;

// Вы можете запустить все тесты или только определённый
// npm run test.jest -- -t 'snapshot app'
it(`snapshot app`, () => {
  const tree = renderer
    .create(<App
      errorsCount={errorsCount}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
