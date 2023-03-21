import PlayerName from "../../components/PlayerName"
import PlayerScore from "../../components/PlayerScore";
import VsPlayer from "../../components/VsPlayer";
import "./style.css"

const ScoreBoard = () => {
    return /*html*/`
        <header class="score-board">
            <div class="container">                
                ${PlayerName('Player1')}
                ${PlayerScore()}
            </div>
            ${VsPlayer('vs')}
            <div class="container">
                ${PlayerScore()}
                ${PlayerName('Player2')}
            </div>
        </header>
    `;
};

export default ScoreBoard