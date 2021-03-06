import { PlayerStat } from "./PlayerStat";

export class Player {
    id: number;
    name: string;
    stats: PlayerStat;
    playingAgainst: number;
    goalLikelihoodRank: number;
}