class ContatoView extends View {
    
    constructor(elemento) {
        super(elemento);
    }
    
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th colspan="1">Ação</th>
                </tr>
            </thead>
        
            <tbody>
                ${model.map(contato => `
                    
                    <tr>
                        <td>${contato.nome}</td>
                        <td>${contato.telefone}</td>
                        <td><a href="#" class="btn btn-outline-warning" onclick="controller.editar(${contato.id})">Editar</a> <a href="#" class="btn btn-outline-danger" onclick="controller.excluir(${contato.id})">Excluir</a></td>
                    </tr>
                    
                `).join('')}                
            </tbody>
            
        </table>
        `;
    }
}
