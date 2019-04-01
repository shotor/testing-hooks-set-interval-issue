import * as React from "react";
import { render, act, cleanup } from "react-testing-library";
import { Countdown } from "./countdown";

jest.useFakeTimers();

describe("countdown", () => {
  afterEach(() => {
    cleanup();
  });

  it("updates counter after interval in rendered container (without for loop)", () => {
    const { getByTestId } = render(
      <Countdown>
        {counter => <div data-testid="counter">{counter}</div>}
      </Countdown>
    );

    expect(getByTestId("counter").textContent).toBe("10");

    act(() => {
      // expect callback to have been called by setInterval 11 times
      jest.runTimersToTime(11000);
    });

    // but the value is 9
    expect(getByTestId("counter").textContent).toBe("0");
  });

  it("updates counter after interval in rendered container (with for loop)", () => {
    const { getByTestId } = render(
      <Countdown>
        {counter => <div data-testid="counter">{counter}</div>}
      </Countdown>
    );

    expect(getByTestId("counter").textContent).toBe("10");

    // have to run the act 11 times
    for (let i = 0; i < 11; i++) {
      act(() => {
        // doesnt matter what you pass as argument
        jest.runTimersToTime(11000);
      });
    }

    // now the value is correct
    expect(getByTestId("counter").textContent).toBe("0");
  });
});
