//variaveis 
let global = [];
let info = [];

let counter = -1;

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
        if(counter < 0) {
            document.getElementById("errorMsg").innerHTML = "";
            info.push(title);
            info.push(description);
            info.push(categoria);
            info.push(autor);
            info.push(novadata);


            global.push(info);
            //atualiza
            atualizarlista()

        } else {
            global[counter] = document.getElementById("tabela").value;
            counter = -1;
            atualizarlista()
        }
    }


}

var itens = [];


//função de inserir no to-do
function atualizarlista() {
    var listaHtml = "";

    //valor constante
    const lista = document.getElementById("tabela");
    
    for (let i = 0; i < global.length; i++) {
        itens = global[i];
        listaHtml += `
    <div class="plots">
        <section class="sec_tab">
        <h3 class="title" id="titlep"> Título: ${itens[0]} </h3>
        <p class="p_a" id="resumop"> Resumo: ${itens[1]} </p>
        <p class="p_a" id="catep"> Categoria: ${itens[2]} </p>
        <p class="p_a" id="autorp"> Autor: ${itens[3]} </p>
        <p class="p_a" id="datap"> Data: ${itens[4]} </p>
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
    const element = global[position];

    document.getElementById("titulo").value = element[0];
    document.getElementById("resumo").value = element[1];
    document.getElementById("categoria").value = element[2];
    document.getElementById("autortitle").value = element[3];
    
    counter = position;
}