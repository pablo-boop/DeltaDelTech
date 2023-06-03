//variaveis 
let global = [];
let info = [];


var title = "";
var description = "";
var categoria = "";
var autor = "";
var data = "";

//função de plotar
function plotar() {

    title = document.getElementById("titulo").value;
    description = document.getElementById("resumo").value;
    categoria = document.getElementById("categoria").value;
    autor = document.getElementById("autortitle").value;
    data = document.getElementById("data").value;
    //transforma data em vetor pelo "-"
    let data2 = data.split("-");
    //inverte e separar por "/"
    var novadata = data2.reverse().join("/");
    //verifica se os inputs estão vazios
    if (data == "" || autor == "" || description == "" || title == "" || categoria == "Categorias..." || categoria == "") {
        document.getElementById("errorMsg").innerHTML = "Campo(s) em branco! Error";
    //se não for vazio, realiza o plot do artigo
    } else {
        document.getElementById("errorMsg").innerHTML = "";
        info.push(title);
        info.push(description);
        info.push(categoria);
        info.push(autor);
        info.push(novadata);


        global.push(info);
        //atualiza
        atualizarlista()
    }


}



//função de inserir no to-do
function atualizarlista() {
    var listaHtml = "";

    //valor constante
    const lista = document.getElementById("tabela");

    for (let i = 0; i < global.length; i++) {
        const itens = global[i];
        listaHtml += `
    <div class="plots">
        <section class="sec_tab">
        <h3 class="title"> Título: ${itens[0]} </h3>
        <p class="p_a"> Resumo: ${itens[1]} </p>
        <p class="p_a"> Categoria: ${itens[2]} </p>
        <p class="p_a"> Autor: ${itens[3]} </p>
        <p class="p_a"> Data: ${itens[4]} </p>
        </section>
        <section class="sec_tab">
            <button id="btn_tab" onclick="antiplot(${i})">EXCLUIR</button>
            <button id="btn_tab" onclick="editplot(${i})">EDITAR</button>
        </section>
    </div>
    `
        info = [];
    }

    //receber a alteração
    lista.innerHTML = listaHtml;
    //zera o valor do array

    //zera o valor dos inputs
    document.getElementById("titulo").value = "";
    document.getElementById("resumo").value = "";
    document.getElementById("categoria").value = "Categoria...";
    document.getElementById("autortitle").value = "";
    document.getElementById("data").value = "";
}

//exclui..
function antiplot(position) { //parametro inserido na atualizar lista
    global.splice(position, 1);
    atualizarlista();
}

function editplot(position) {
for (let i = 0; i < global.length; i++) {
    const itens = global[i];

    document.getElementById("titulo").innerHTML = itens[0];
    document.getElementById("resumo").innerHTML = itens[1];
    document.getElementById("categoria").innerHTML = itens[2];
    document.getElementById("autortitle").innerHTML = itens[3];
    document.getElementById("data").innerHTML = data;
}

    antiplot(position);
}