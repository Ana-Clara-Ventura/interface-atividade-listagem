import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import NetflixRequests from '../../fetch/NetflixRequests';

function TableNetflix() {
    const [titulos, setTitulos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20);

    useEffect(() => {
        const fetchData = async () => {
            setTitulos(await NetflixRequests.listarTitulos());
        }

        fetchData();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentTitulos = titulos && titulos.slice(indexOfFirstItem, indexOfLastItem);

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
                                <th>Tipo</th>
                                <th>Título</th>
                                <th>País</th>
                                <th>Ano de lançamento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentTitulos ? (
                                currentTitulos.map((titulo) => (
                                    <tr key={titulo.show_id}>
                                        <td>{titulo.show_id}</td>
                                        <td>{titulo.tipo}</td>
                                        <td>{titulo.titulo}</td>
                                        <td>{titulo.pais}</td>
                                        <td>{titulo.ano_lancamento}</td>
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
                <Button onClick={nextPage} disabled={currentPage === Math.ceil(titulos.length / itemsPerPage)}>Próximo</Button>
            </div>
        </>
    );
}

export default TableNetflix;