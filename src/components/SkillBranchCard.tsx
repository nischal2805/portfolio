import { Code2, BrainCircuit, Boxes } from 'lucide-react';
import { SkillTreeBranch } from '../types';
import { branchColorMap } from '../lib/colorMaps';
import SkillNode from './SkillNode';

const ICONS: Record<string, typeof Code2> = { Code2, BrainCircuit, Boxes };

export default function SkillBranchCard({ branch }: { branch: SkillTreeBranch }) {
  const Icon = ICONS[branch.icon] ?? Code2;
  const colorKey = branch.color as 'ai' | 'tools';
  const styles = branchColorMap[colorKey];

  return (
    <div className={`glass-card rounded-2xl p-6 sm:p-7 border ${styles.border}`}>
      <div className="flex items-center gap-2.5 mb-6">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-dark-800 ${styles.text}`}>
          <Icon className="w-5 h-5" />
        </div>
        <h3 className={`font-display text-sm sm:text-base tracking-wide ${styles.text}`}>{branch.title}</h3>
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-6 justify-start">
        {branch.nodes.map((node, i) => (
          <SkillNode key={node.id} node={node} colorKey={colorKey} index={i} />
        ))}
      </div>
    </div>
  );
}
