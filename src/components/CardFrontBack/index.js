import CardGame from "../CardGame";
import "./style.css"




const CardFrontBack = (icon, altIcon) => {
    window.cardFrontBack = {}
    window.cardFrontBack.handleClick = (event)=>{
        const $target = event.target;
        const $toFlip = $target.closest('.card-front-back');
        $toFlip.classList.toggle('_flipped');
    }
   
    return /* html */`
        <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">

            <div class="card _front">
                ${CardGame()}
            </div>

            <div class="card _back">
                ${CardGame(icon, altIcon)}
            </div>

        </article>
    `
}

export default CardFrontBack;