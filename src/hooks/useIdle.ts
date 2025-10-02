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
  }, [isIdle, timeout, isEnabled]);

  useEffect(() => {
    lastTouchedTime.current = Date.now();
  }, [isEnabled]);

  return isIdle;
};

export default useIdle;
