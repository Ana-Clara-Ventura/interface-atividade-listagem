import NavBar from '../../components/NavBar';
import { useState, useEffect } from 'react';
import CardNetflix from '../../components/CardNetflix/CardNetflix';
import { Button } from 'react-bootstrap';

function CNetflix() {
    const [titulos, setTitulos] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://10.90.2.119:3333/titulos');
                if (!response.ok) {
                    throw new Error('Erro ao buscar servidor');
                }
                const listarTitulos = await response.json();
                setTitulos(listarTitulos);
            } catch (error) {
                console.error('Erro: ', error);
            }
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
            <NavBar />
            <div className='alinhar'>
                <div className='ctn-titulos'>
                    {currentTitulos ? (
                        currentTitulos.map(titulos => (
                            <CardNetflix key={titulos.idTitulos} titulos={titulos} />
                        ))
                    ) : (
                        <p>Carregando... Verifique se o servidor está funcionando</p>
                    )}
                </div>
            </div>

            <Button onClick={prevPage} disabled={currentPage === 1}>Anterior</Button>
            <Button onClick={nextPage} disabled={currentPage === Math.ceil(titulos / itemsPerPage)}>Próximo</Button>
        </>
    );
}

export default CNetflix;