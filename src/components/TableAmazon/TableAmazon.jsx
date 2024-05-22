import './TableAmazon.css';
import { useState, useEffect } from 'react';
import AmazonRequests from '../../fetch/AmazonRequests';
import { Button } from 'react-bootstrap';

function TableAmazon() {
    const [vendas, setVendas] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20);

    useEffect(() => {
        const fetchData = async () => {
            setVendas(await AmazonRequests.listarVendas());
        }

        fetchData();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentVendas = vendas && vendas.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    }

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    }

    return (
        <>
            <div className='pagina'>
                <div className='alinhar'>
                    <table className='tabela'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Data da venda</th>
                                <th>Nome do Produto</th>
                                <th>Edição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentVendas ? (
                                currentVendas.map((venda) => (
                                    <tr key={venda.id_livro}>
                                        <td>{venda.id_livro}</td>
                                        <td>{venda.data_venda}</td>
                                        <td>{venda.nome_produto}</td>
                                        <td>{venda.edicao}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">Carregando... Verifique se o servidor está funcionando</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="pagination">
                <Button onClick={prevPage} disabled={currentPage === 1}>Anterior</Button>
                <Button onClick={nextPage} disabled={currentPage === Math.ceil(vendas.length / itemsPerPage)}>Próximo</Button>
            </div>
        </>
    );
}

export default TableAmazon;