class FifaRequests {

    constructor() {
        this.serverUrl = 'http://10.90.2.119:3333';
        this.routeListarPlayerCards = '/playercards';
        this.routeCadastrarPlayerCards = '/novo/playercards';
        this.routeDeletarPlayerCards = '/remover/playercards';
        this.routeAlterarPlayerCards = '/atualizar/playercards';
    }

    async listarPlayerCards() {
        try {
            const response = await fetch(`${this.serverUrl}${this.routeListarPlayerCards}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar servidor');
            }

            return await response.json();
        } catch (error) {
            console.error('Erro: ', error);
        }
    }
}

export default new FifaRequests();
