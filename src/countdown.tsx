import * as React from 'react'
import { useInterval } from './use-interval'

const { useState } = React;

const Countdown: React.FC<any> = ({
    children,
    interval = 1000,
}) => {
    const [counter, setCounter] = useState(10);

    useInterval(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      }
    }, interval);

    return children(counter);
};

export { Countdown }