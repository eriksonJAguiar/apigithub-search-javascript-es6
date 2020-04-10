import api from './api';

class App{
    constructor(){
        this.repositories = [];
        this.formEL = document.getElementById("repo-form");
        this.inputEL = document.querySelector('input[name=repository]'); 
        this.listEL = document.getElementById("repo-list");
        this.registerHandlers();
    }

    registerHandlers(){
        this.formEL.onsubmit = event => this.addRepository(event);

    }

    setLoading(loading = true){
        if(loading === true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id', 'loading');

            this.formEL.appendChild(loadingEl);
        }else{
            document.getElementById('loading').remove();
        }

        
    }

    async addRepository(event){
        event.preventDefault(); 

        const repoInput = this.inputEL.value;

        if(repoInput.lenght === 0)
            return;

        this.setLoading();
        
        try{
        const response = await api.get(`/repos/${repoInput}`);

        const {name, description, html_url, owner: {avatar_url}} = response.data;

        this.repositories.push({
            name,
            description,
            avatar_url,
            html_url,
        });

            this.inputEL.value = "";

            this.render();
        }
        catch(err){
            alert("Repositorio nao existe");
        }

        this.setLoading(false);
    }

    render(){
        this.listEL.innerHTML = "";
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);
            
            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('acessar'));

            let listItemEl =  document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEL.appendChild(listItemEl);   

        });
    }
}

new App();