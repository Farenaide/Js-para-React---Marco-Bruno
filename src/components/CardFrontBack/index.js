import CardGame from "../CardGame";
import "./style.css"

const CardFrontBack = () => {
    return /* html */`
        <article class="card-front-back">

            <div class="card _front">
                ${CardGame()}
            </div>

            <div class="card _back">
                ${CardGame('javascript')}
            </div>

        </article>
    `
}

export default CardFrontBack;