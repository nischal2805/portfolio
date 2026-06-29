export interface LevelInfo {
  level: number;
  label: string;
  threshold: number;
}

export const LEVELS: LevelInfo[] = [
  { level: 1, label: 'Visitor', threshold: 0 },
  { level: 2, label: 'Explorer', threshold: 20 },
  { level: 3, label: 'Analyst', threshold: 40 },
  { level: 4, label: 'Engineer', threshold: 60 },
  { level: 5, label: 'Recruiter Mode: Fully Briefed', threshold: 80 },
];

export function getLevel(progress: number): LevelInfo {
  let current = LEVELS[0];
  for (const lvl of LEVELS) {
    if (progress >= lvl.threshold) current = lvl;
  }
  return current;
}
