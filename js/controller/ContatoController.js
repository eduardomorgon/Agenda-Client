class ContatoController {

    constructor() {
        this._contatoView = document.querySelector("#contatoView");
        this._httpServiceContato = new ContatoHttpService();
        this.listar();
    }

    listar() {
        this._httpServiceContato.get()
            .then(obj => new ContatoView(this._contatoView).update(obj))
            .catch(erro => {
                console.log(erro);
                this._contatoView.innerHTML = "<h2><p class='text-center text-danger'>Não foi possivel acessar a base de dados.</p></h2>";
            });
    }

    editar(id) {
        this._httpServiceContato.get(id)
        .then(obj => this._carregarForm(obj))
        .catch(erro => console.log(erro));
    }

    excluir(id) {
        let confirmar = confirm("Deseja excluir?");
        if(confirmar) {
            this._httpServiceContato.delete(id)
                .then(() => this.listar())
                .catch(erro => console.log(erro));
        }
    }

    salvar(event) {
        
        let form = document.querySelector("form");
        if(form.checkValidity()) {
            event.preventDefault();
            let contato = this._carregarContato();
            let tipoRequest = contato.id == "" ? "post" : "put";
            this._httpServiceContato[tipoRequest](contato)
                .then(() => {
                    alert('Contato salvo com sucesso');
                    this.limpar();
                    this._carregarForm(this._novoContato());
                    this.listar();
                    document.querySelector("#nome").focus();
                })
                .catch(erro => {
                        erro.forEach(function(e) {
                            document.querySelector("#"+e.property).classList.add("is-invalid");
                            document.querySelector("#"+e.property+"Id").innerHTML = e.message;
                        });

                    }
                );
        }
        
    }

    limpar() {
        let inputsComErro = document.querySelectorAll(".is-invalid");
        inputsComErro.forEach(input => {
            document.querySelector("#"+input.id).classList.remove("is-invalid");
            document.querySelector("#"+input.id+"Id").innerHTML = "";
        });
    }

    _carregarForm(contato) {
        document.querySelector("#id").value = contato.id;
        document.querySelector("#nome").value = contato.nome;
        document.querySelector("#telefone").value = contato.telefone;
    }

    _novoContato() {
        let contato = {
            id: "",
            nome: "",
            telefone: ""
        }
        return contato;
    }

    _carregarContato() {
        let contato = {
            id: document.querySelector("#id").value,
            nome: document.querySelector("#nome").value,
            telefone: document.querySelector("#telefone").value
        }
        return contato;
    }

}