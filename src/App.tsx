import { motion, useMotionValue } from 'framer-motion';
import AppIcon from './components/AppIcon';

export default function App() {
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
