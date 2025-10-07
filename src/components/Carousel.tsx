import { type FC, useEffect, useRef, useState } from "react";
import { motion, type PanInfo } from "framer-motion";

const Carousel: FC<{ images: string[] }> = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [rotatedAngle, setRotatedAngle] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const onDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipePower = Math.abs(info.offset.x) * info.velocity.x;

    if (swipePower < -10000) {
      setIndex(index + 1);
    } else if (swipePower > 10000) {
      setIndex(index - 1);
    }
  };

  const itemAngle = 360 / images.length;

  useEffect(() => {
    // 1. 관찰할 대상 요소 선택
    const targetNode = carouselRef.current!;

    // 2. 변경을 감지했을 때 실행할 콜백 함수 생성
    const callback: MutationCallback = (mutationsList) => {
      for (const mutation of mutationsList) {
        // 'attributes' 타입의 변화인지 확인
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "style" &&
          mutation.target instanceof Element
        ) {
          const newStyle = mutation.target.getAttribute("style");
          const regex = /rotateY\(\s*(-?\d*\.?\d+)\s*deg\)/i;
          const match = newStyle?.match(regex);
          const angle = match && Number(match[1]);
          if (typeof angle === "number") setRotatedAngle(angle);
        }
      }
    };

    // 3. MutationObserver 인스턴스 생성 및 콜백 연결
    const observer = new MutationObserver(callback);

    // 4. 관찰 옵션 설정 (style 속성의 변경을 감지)
    const config = {
      attributes: true, // 속성 변경을 관찰
      attributeFilter: ["style"], // 'style' 속성만 필터링해서 관찰
      attributeOldValue: true, // 변경 전 값을 oldValue에 기록
    };

    // 5. 관찰 시작
    observer.observe(targetNode, config);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="flex w-[500px] items-center justify-center overflow-visible"
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        ref={carouselRef}
        className="relative h-[500px] w-[440px] [transform-style:preserve-3d]"
        animate={{
          rotateY: -index * itemAngle,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={onDragEnd}
        dragElastic={0.1}
      >
        {images.map((src, i) => {
          return (
            <div
              key={i}
              className="absolute h-full w-full transition-opacity duration-500"
              style={{
                transform: `rotateY(${-rotatedAngle}deg) translateZ(${(
                  Math.cos(((itemAngle * i + rotatedAngle) * Math.PI) / 180) *
                  100
                ).toFixed(10)}px) translateX(${(
                  Math.sin(((itemAngle * i + rotatedAngle) * Math.PI) / 180) *
                  100
                ).toFixed(10)}px)`,
                opacity:
                  1 /
                  (Math.abs(
                    i -
                      (((index % images.length) + images.length) %
                        images.length)
                  ) +
                    1),
              }}
            >
              <img
                src={src}
                alt={`item ${i}`}
                className="pointer-events-none w-full object-contain border-[#F6FC00] border-[1.4px] rounded-[20px] drop-shadow-[0_4px_4px_rgba(246,252,0,0.25)]"
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Carousel;
