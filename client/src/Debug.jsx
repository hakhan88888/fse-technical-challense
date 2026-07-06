import { useEffect, useState } from "react";

// This component is meant to show a live counter of seconds elapsed,
// and log that count to the console every time it updates.
//
// It has a bug: open it in the browser and watch the console — the
// logged value doesn't behave the way you'd expect. Find it and fix it.
//
// This file isn't wired into the main app — it's just for this exercise.

export default function Debug() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
      console.log("count is now:", count);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Elapsed seconds: {count}</div>;
}
