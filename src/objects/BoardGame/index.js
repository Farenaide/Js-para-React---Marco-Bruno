import CardGame from "../../components/CardGame"
import "./style.css"

const BoardGame = (amountCards)=>{
    const cards = CardGame()
    const $htmlBoardGame = cards.repeat(amountCards)
    return `    
        <section class="board-game">
            ${$htmlBoardGame}
        </section>
    `
}

export default BoardGame;