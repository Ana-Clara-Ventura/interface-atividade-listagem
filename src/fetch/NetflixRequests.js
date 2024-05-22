class NetflixRequests {

    constructor() {
        this.serverUrl = 'http://10.90.2.119:3333';
        this.routeListarTitulos = '/titulos';
        this.routeCadastrarTitulos = '/novo/titulos';
        this.routeDeletarTitulos = '/remover/titulos';
        this.routeAlterarTitulos = '/atualizar/titulos';
    }

    async listarTitulos() {
        try {
            const response = await fetch(`${this.serverUrl}${this.routeListarTitulos}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar servidor');
            }

            return await response.json();
        } catch (error) {
            console.error('Erro: ', error);
        }
    }
}

export default new NetflixRequests();