import './CardAmazon.css';

function CardAmazon({ vendas }) {
    const exibeID = () => {
        console.log(vendas.idVendas, "\n", vendas);
    }

    return (
        <div className='card-amazon'>
            <p>ID: {vendas.id_livro}</p>
            <p>Data: {vendas.data_venda}</p>
            <p>Nome: {vendas.nome_produto}</p>
            <p>Edição: {vendas.edicao}</p>
        </div>
    );
}

export default CardAmazon;