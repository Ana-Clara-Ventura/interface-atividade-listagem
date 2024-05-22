import './CardFifa.css';

function CardFifa({ PlayerCards }) {
    const exibeID = () => {
        console.log(PlayerCards.playerid, "\n", PlayerCards);
    }

    return (
        <div className='card-PlayerCards'>
            <p>ID: {PlayerCards.playerid}</p>
            <p>Nome do jogador: {PlayerCards.playername}</p>
            <p>Pé dominante: {PlayerCards.foot}</p>
            <p>Posição: {PlayerCards.playerposition}</p>
            <p>OVR: {PlayerCards.ovr}</p>
        </div>
    );
}

export default CardFifa;