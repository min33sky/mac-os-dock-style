import { motion, useMotionValue } from 'framer-motion';
import AppIcon from './components/AppIcon';
import {
  FaFacebook,
  FaGoogle,
  FaApple,
  FaGithub,
  FaMicrosoft,
  FaAmazon,
} from 'react-icons/fa';
import { IconType } from 'react-icons';

export default function App() {
  //? Infinity는 변환을 깨끗하게 유지시키기 위한 Null값으로 사용된다.
  //? 지정한 범위를 벗어나기 때문에 값을 리셋시킬 수 있다.
  const mouseX = useMotionValue(Infinity);

  const icons: IconType[] = [
    FaFacebook,
    FaGoogle,
    FaApple,
    FaGithub,
    FaMicrosoft,
    FaAmazon,
  ];

  return (
    <div className="relative h-screen bg-gradient-to-br from-slate-800 to-slate-600">
      <motion.div
        className="fixed bottom-14 left-1/2 mx-auto flex h-16 max-w-xl -translate-x-1/2 items-end gap-4 rounded-2xl bg-white/10 px-4 pb-3"
        onMouseMove={(e) => {
          mouseX.set(e.pageX);
        }}
        onMouseLeave={() => {
          mouseX.set(Infinity);
        }}
      >
        {icons.map((icon, idx) => (
          <AppIcon key={idx} mouseX={mouseX} icon={icon} />
        ))}
      </motion.div>
    </div>
  );
}
