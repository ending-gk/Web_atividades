async function pesquisar_serie() {
limpar_resultados()
const form = document.getElementById('procurar_series');
    const serie = document.getElementById('procura').value.trim();
    if (serie === '') {
        const container = document.getElementById('container-id');
        container.textContent = 'Nenhuma série encontrada. Por favor, tente novamente.';
        return;
    }
    else{
        const carregando = document.getElementById('loading');
        try{
            carregando.classList.remove('d-none');
            await new Promise(resolve => setTimeout(resolve, 2000));
            const info = (await axios.get (`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(serie)}`)).data;
            document.querySelector('#procura').value='';
            mostrar_series(info);
            
        }
        catch(error){
            console.error('Erro ao mostrar o carregamento:', error);
        }
        finally{
            carregando.classList.add('d-none');
        }
        

 
    }
};
 function mostrar_series(info) {
    info.forEach(serie => criar_card(serie));{}
 }
 function criar_card(serie) {
    const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('card-body');
        card.style.width = '18rem';
        card.style.margin = '10px';
        card.style.display = 'inline-block';
        card.style.height = "100%";
       const imagem = document.createElement('img');
        imagem.classList.add('card-img-top');
        const dc = document.createElement('div');
        dc.style.overflow = 'auto';
        dc.style.height = '150px';
        let d = document.createElement('p');
        d.classList.add('card-text');
        const titulo = document.createElement('h5');
        if (serie.show.image){
            imagem.src = serie.show.image.medium;
        }
        titulo.textContent = serie.show.name;
        d.innerHTML = serie.show.summary;
        card.appendChild(imagem);
        card.appendChild(titulo);
        card.appendChild(dc);
        dc.appendChild(d);
        const container = document.getElementById('container-id');
        container.appendChild(card);
}
function limpar_resultados() {
        document.querySelector('#container-id').innerHTML = ''         
        }
        