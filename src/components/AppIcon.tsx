import { MotionValue, motion, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { IconType } from 'react-icons';

interface AppIconProps {
  mouseX: MotionValue;
  icon: IconType;
}

export default function AppIcon({
  mouseX,
  icon: Icon,
}: AppIconProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  //* 아이콘 중앙 좌표를 기준으로 거리를 계산
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2; //? 0이면 아이콘 중앙을 의미
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 overflow-hidden rounded-full bg-gray-400 p-1"
    >
      <Icon className="h-full w-full text-gray-700" />
    </motion.div>
  );
}
