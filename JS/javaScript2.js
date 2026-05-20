function pesquisar_serie() {
const form = document.getElementById('procurar_series');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const serie = document.getElementById('procura').value.trim();
    if (serie === '') {
        const container = document.getElementById('container-id');
        container.textContent = 'Nenhuma série encontrada. Por favor, tente novamente.';
        return;
    }
    else{
        console.log("pesquisa feito pelo JS");
    }
});
}
