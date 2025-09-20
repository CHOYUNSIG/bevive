import { type FC, useRef, useState } from "react";
import { motion, type PanInfo } from "framer-motion";

const Carousel: FC<{ images: string[] }> = ({ images }) => {
  const [index, setIndex] = useState(0);
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
  const radius = 150; // Adjust this for the size of the carousel

  return (
    <div
      ref={carouselRef}
      className="flex h-[500px] w-[500px] items-center justify-center overflow-hidden"
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        className="relative h-[383.2px] w-[306.56px] [transform-style:preserve-3d]"
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
          const angle = i * itemAngle;

          return (
            <motion.div
              key={i}
              className="absolute h-full w-full transition-opacity duration-500"
              style={{
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
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
                className="pointer-events-none h-full w-full object-contain border-[#F6FC00] border-[1.4px] rounded-[20px] drop-shadow-[0_4px_4px_rgba(246,252,0,0.25)]"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Carousel;
