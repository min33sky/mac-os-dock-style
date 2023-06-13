import { motion, useMotionValue } from 'framer-motion';
import AppIcon from './components/AppIcon';

export default function App() {
  //? Infinity는 변환을 깨끗하게 유지시키기 위한 Null값으로 사용된다.
  //? 지정한 범위를 벗어나기 때문에 값을 리셋시킬 수 있다.
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="relative h-screen bg-slate-400">
      <motion.div
        onMouseMove={(e) => {
          mouseX.set(e.pageX);
        }}
        onMouseLeave={() => {
          mouseX.set(Infinity);
        }}
        className="fixed bottom-14 left-1/2 mx-auto flex h-16 max-w-xl -translate-x-1/2 items-end gap-4 rounded-2xl bg-gray-700 px-4 pb-3"
      >
        {[...Array(6).keys()].map((i) => (
          <AppIcon key={i} mouseX={mouseX} />
        ))}
      </motion.div>
    </div>
  );
}
