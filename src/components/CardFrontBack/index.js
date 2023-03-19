import CardGame from "../CardGame";

const CardFrontBack = () => {
    return /* html */`
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame('javascript')}
        </article>
    `
}

export default CardFrontBack;