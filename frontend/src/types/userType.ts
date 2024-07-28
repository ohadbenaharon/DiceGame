export interface Player {
  name?: string;
  score: number;
  winRate: number;
  current: number;
  turn: boolean;
  win: boolean;
}
