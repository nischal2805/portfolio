import { motion } from 'framer-motion';
import { statColorMap } from '../lib/colorMaps';

interface StatBarProps {
  label: string;
  value: number;
  color: 'ai' | 'tools' | 'xp';
}

export default function StatBar({ label, value, color }: StatBarProps) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-1">
        <span className="text-[11px] font-mono tracking-wide text-gray-400">{label}</span>
        <span className="text-[11px] font-mono text-gray-300">{value}</span>
      </div>
      <div className="h-1.5 rounded-full bg-dark-800 overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${statColorMap[color]}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
