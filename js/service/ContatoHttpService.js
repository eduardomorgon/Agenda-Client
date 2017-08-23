class ContatoHttpService extends HttpService {

    constructor() {
        super();
        this._url = "http://localhost:3000/agenda/api/contatos/";
    }
    
    get() {
        let id = arguments.length > 0 ? arguments[0] : '';
        return super.get(this._url+id);
    }

    post(contato) {
        return super.post(this._url, contato);
    }

    put(contato) {
        return super.put(this._url, contato);
    }

    delete(id) {
        return super.delete(this._url+id);
    }
}