import CardFrontBack from "../../components/CardFrontBack"
import cardsList from "./data"
import "./style.css"

const BoardGame = (amountCards)=>{

    const cards = cardsList.map((card)=> CardFrontBack(card.icon, card.altIcon))
    
    const $htmlCardFrontBack = cards.join('')

    return /*html*/`    
        <section class="board-game">
            ${$htmlCardFrontBack}
        </section>
    `
}

export default BoardGame;