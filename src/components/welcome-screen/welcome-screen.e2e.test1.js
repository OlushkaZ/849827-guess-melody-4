import React from "react";
import Enzyme, {shallow} from "enzyme";
// import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`welcomeScreenComponent`, () => {
  it(`Should welcome button be pressed`, () => {
    const onWelcomeButtonClick = jest.fn();

    const welcomeScreen = shallow(
        <WelcomeScreen
          errorsCount={3}
          onWelcomeButtonClick={onWelcomeButtonClick}
        />
    );

    const welcomeButton = welcomeScreen.find(`button.welcome__button`);

    // welcomeButton.props().onClick();
    welcomeButton.simulate(`click`);
    // welcomeButton.simulate(`click`, {preventDefault() {}}); //для mount

    // expect(onWelcomeButtonClick.mock.calls.length).toBe(1);
    expect(onWelcomeButtonClick).toHaveBeenCalledTimes(1);
  });
});
