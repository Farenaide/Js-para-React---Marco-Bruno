import CardGame from "../../components/CardGame"

const BoardGame = (amountCards)=>{
    const cards = CardGame()
    const $htmlBoardGame = cards.repeat(amountCards)
    return $htmlBoardGame
}

export default BoardGame;