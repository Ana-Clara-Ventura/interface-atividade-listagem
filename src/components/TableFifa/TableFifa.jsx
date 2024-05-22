import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import FifaRequests from '../../fetch/FifaRequests';

function TableFifa() {
    const [playercards, setPlayerCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20);

    useEffect(() => {
        const fetchData = async () => {
            setPlayerCards(await FifaRequests.listarPlayerCards());
        }

        fetchData();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPlayerCards = playercards && playercards.slice(indexOfFirstItem, indexOfLastItem);

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
                                <th>Nome do Jogador</th>
                                <th>Pé dominante</th>
                                <th>Posição</th>
                                <th>OVR</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPlayerCards ? (
                                currentPlayerCards.map((PlayerCards) => (
                                    <tr key={PlayerCards.playerid}>
                                        <td>{PlayerCards.playerid}</td>
                                        <td>{PlayerCards.playername}</td>
                                        <td>{PlayerCards.foot}</td>
                                        <td>{PlayerCards.playerposition}</td>
                                        <td>{PlayerCards.ovr}</td>
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
                <Button onClick={nextPage} disabled={currentPage === Math.ceil(playercards.length / itemsPerPage)}>Próximo</Button>
            </div>
        </>
    );
}

export default TableFifa;