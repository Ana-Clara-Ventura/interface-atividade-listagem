import NavBar from '../../components/NavBar';
import { useState, useEffect } from 'react';
import CardFifa from '../../components/CardFifa/CardFifa';
import { Button } from 'react-bootstrap';
import './FIFA.css';

function CFifa() {
    const [PlayerCards, setPlayerCards] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://10.90.2.119:3333/playercards');
                if (!response.ok) {
                    throw new Error('Erro ao buscar servidor');
                }
                const listarPlayerCards = await response.json();
                setPlayerCards(listarPlayerCards);
            } catch (error) {
                console.error('Erro: ', error);
            }
        }
    
        fetchData();
    }, []);
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPlayerCards = PlayerCards && PlayerCards.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    }

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    }

    return (
        <>
            <NavBar />
            <div className='alinhar'>
                <div className='ctn-playercards'>
                    {currentPlayerCards ? (
                        currentPlayerCards.map(PlayerCards => (
                            <CardFifa key={PlayerCards.idPlayerCards} PlayerCards={PlayerCards} />
                        ))
                    ) : (
                        <p>Carregando... Verifique se o servidor está funcionando</p>
                    )}
                </div>
            </div>

            <Button onClick={prevPage} disabled={currentPage === 1}>Anterior</Button>
            <Button onClick={nextPage} disabled={currentPage === Math.ceil(PlayerCards / itemsPerPage)}>Próximo</Button>
        </>
    );
}

export default CFifa;