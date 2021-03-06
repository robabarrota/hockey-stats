import { TeamRankings } from './TeamRankings'
import { TeamStat } from './TeamStat';

export class Team {
    id: number;
    name: string;
    rankings: TeamRankings;
    stats: TeamStat;
}