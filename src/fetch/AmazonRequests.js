class AmazonRequests {

    constructor() {
        this.serverUrl = 'http://10.90.2.119:3333';
        this.routeListarVendas = '/vendas';
        this.routeCadastrarVendas = '/nova/venda';
        this.routeDeletarVendas = '/remover/venda';
        this.routeAlterarVendas = '/atualizar/venda';
    }

    async listarVendas() {
        try {
            const response = await fetch(`${this.serverUrl}${this.routeListarVendas}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar servidor');
            }

            return await response.json();
        } catch (error) {
            console.error('Erro: ', error);
        }
    }

}

export default new AmazonRequests ();