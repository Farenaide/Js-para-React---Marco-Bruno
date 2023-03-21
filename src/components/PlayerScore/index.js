import "./style.css"

const PlayerScore = (points = 0)=>{
    return /* html */ `
        <div class="player-score">
            <progress class="progress" max='3' value='${points}'></progress>
        </div>
    `
}

export default PlayerScore