class HttpService {
    
         /*
        0 -> requisição ainda não iniciada
        1 -> conexão com o servidor estabelecida
        2 -> requisição recebida
        3 -> processando requisição
        4 -> requisição concluida e a resposta esta pronto
        switch(xhr.readyState) {
                        case 0:
                            console.log('requisição ainda não iniciada');
                            break;
                        case 1:
                            console.log('conexão com o servidor estabelecida');
                            break;
                        case 2:
                            console.log('requisição recebida');
                            break;
                        case 3:
                            console.log('processando requisição');
                            break;
                        case 4:
                            console.log('requisição concluida e a resposta esta pronto');
                            break;
                    };
        */
    
        get(url) {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.onreadystatechange = () => {
                    if(xhr.readyState === 4 ) {
                        if(xhr.status === 200) {
                            resolve(JSON.parse(xhr.responseText));
                        }else{
                            reject(xhr.statusText);
                        }
                    }
                }
                xhr.send();
            });
        }
    
        post(url, model) {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open('POST', url);
                xhr.setRequestHeader("Content-type", "application/json");
                xhr.onreadystatechange = () => {
                    if(xhr.readyState === 4 ) {
                        if(xhr.status === 201) {
                            resolve(xhr.statusText);
                        }else{
                            reject(JSON.parse(xhr.responseText));
                        }
                    }
                }
                xhr.send(JSON.stringify(model));
            });
        }
    
        put(url, model) {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open('PUT', url);
                xhr.setRequestHeader("Content-type", "application/json");
                xhr.onreadystatechange = () => {
                    if(xhr.readyState === 4 ) {
                        if(xhr.status === 200) {
                            resolve(xhr.responseText);
                        }else{
                            reject(JSON.parse(xhr.responseText));
                        }
                    }
                }
                xhr.send(JSON.stringify(model));
            });
        }
    
        delete(url) {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open('DELETE', url);
                xhr.onreadystatechange = () => {
                    if(xhr.readyState === 4 ) {
                        if(xhr.status === 200) {
                            // resolve(JSON.parse(xhr.responseText));
                            resolve(xhr.status);
                        }else{
                            reject(xhr.responseText);
                        }
                    }
                }
                xhr.send();
            });
        }
        
    }