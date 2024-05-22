function CardNetflix({ titulos }) {
    const exibeID = () => {
        console.log(titulos.idVendas, "\n", titulos);
    }

    return (
        <div className='card-netflix'>
            <p>ID: {titulos.show_id}</p>
            <p>Data: {titulos.tipo}</p>
            <p>Nome: {titulos.titulo}</p>
            <p>Edição: {titulos.pais}</p>
            <p>Edição: {titulos.ano_lancamento}</p>
        </div>
    );
}

export default CardNetflix;