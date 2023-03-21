import ArrowDown from "../../components/ArrowDown";
import PlayerName from "../../components/PlayerName"
import PlayerScore from "../../components/PlayerScore";
import VsPlayer from "../../components/VsPlayer";
import "./style.css"

const ScoreBoard = () => {
    return /*html*/`
        <header class="score-board">
            ${ArrowDown()}
            <div class="container">                
                ${PlayerName('Player1')}
                ${PlayerScore(1)}
            </div>
            ${VsPlayer('vs')}
            <div class="container">
                ${PlayerScore(2)}
                ${PlayerName('Player2')}
            </div>
        </header>
    `;
};

export default ScoreBoard