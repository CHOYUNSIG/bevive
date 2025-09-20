import { useEffect, useRef, useState } from "react";

const useIdle = (
  timeout = 60 * 1000,  // 단위: ms
) => {
  const lastTouchedTime = useRef(Date.now());
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    const handleTouch = () => {
      lastTouchedTime.current = Date.now();
      setIsIdle(false);
    };

    const checkIdle = () => {
      if (Date.now() - lastTouchedTime.current > timeout && !isIdle) {
        setIsIdle(true);
      }
    };

    const interval = setInterval(checkIdle, 1000);
    document.addEventListener("click", handleTouch, true);

    return () => {
      clearInterval(interval);
      document.removeEventListener("click", handleTouch);
    };
  }, [isIdle, timeout]);

  return isIdle;
};

export default useIdle;
