import { useEffect, useRef, useState } from "react";

const useIdle = ({
  timeout = 60 * 1000,
  isEnabled = true,
}: {
  timeout?: number; // 단위: ms
  isEnabled?: boolean;
}) => {
  const lastTouchedTime = useRef(Date.now());
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    if (!isEnabled) {
      setIsIdle(false);
      return;
    }

    const handleTouch = () => {
      lastTouchedTime.current = Date.now();
      setIsIdle(false);
    };

    const checkIdle = () => {
      const isTimeout = Date.now() - lastTouchedTime.current > timeout;
      if (isTimeout && !isIdle) {
        setIsIdle(true);
      }
    };

    const interval = setInterval(checkIdle, 1000);

    document.addEventListener("click", handleTouch, true);
    document.addEventListener("pointermove", handleTouch, true);
    document.addEventListener("keydown", handleTouch, true);
    document.addEventListener("scroll", handleTouch, true);
    document.addEventListener("touchstart", handleTouch, true);
    document.addEventListener("input", handleTouch, true);

    return () => {
      clearInterval(interval);
      document.removeEventListener("click", handleTouch);
      document.removeEventListener("pointermove", handleTouch);
      document.removeEventListener("keydown", handleTouch);
      document.removeEventListener("scroll", handleTouch);
      document.removeEventListener("touchstart", handleTouch);
      document.removeEventListener("input", handleTouch);
    };
  }, [isIdle, timeout, isEnabled]);

  useEffect(() => {
    lastTouchedTime.current = Date.now();
  }, [isEnabled]);

  return isIdle;
};

export default useIdle;
