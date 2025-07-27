import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [secondsRemaining, setSecondsRemaining] = useState(10);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSecondsRemaining((prev) => prev - 1);
    }, 1000);

    // when time runs out, call onAnswered with false
    if (secondsRemaining === 0) {
      onAnswered(false);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [secondsRemaining, onAnswered]);

  return (
    <div>
      <h2>{question.prompt}</h2>
      <p>{secondsRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;
