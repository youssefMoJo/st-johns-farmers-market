import { useEffect, useState } from "react";

export function useTypewriter(text: string, speed = 40, delay = 400) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let timeout: NodeJS.Timeout;
    let i = 0;

    function type() {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
        timeout = setTimeout(type, speed);
      } else {
        setDone(true);
      }
    }

    timeout = setTimeout(type, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
}
