import React, { useState, useEffect } from 'react';

const SubjectTimer = (props) => {
  const [subjecttiming, setTiming] = useState(0);
  const [timerState, setTimerState] = useState(props.timerState);

  useEffect(() => {
    let timer;
    if (props.timerState == true) {
      timer = setInterval(() => {
        setTiming(subjecttiming + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [subjecttiming, props.timerState]);

  return <div> {subjecttiming} </div>;
};

export default SubjectTimer;
// create a timer based on the timer state
