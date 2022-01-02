import { PlayerStat } from "./PlayerStat";
import { Team } from "./Team";

export class Player {
    id: number;
    rank: number;
    name: string;
    seasonStats: PlayerStat;
    //playoffStats: PlayerStat;
    playingAgainst: Team;
    goalLikelihoodRank: number;
    playsFor: Team;
}