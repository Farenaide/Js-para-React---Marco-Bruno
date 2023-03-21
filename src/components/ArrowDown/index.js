import "./style.css"

const ArrowDown = (currentplayer = 1)=>{
    return /* html */`
        <img 
        data-currentplayer = "${currentplayer}"
        class="arrow-down"
        src="images/IconArrowDown.png" 
        alt="ícone de uma seta para baixo">
    `;
}

export default ArrowDown;