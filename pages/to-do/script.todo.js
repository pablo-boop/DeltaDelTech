//variaveis 
let global = [];
let info = [];

//auxiliares
let counter = -1;
let compdate = new Date();


//inputs
var title = "";
var description = "";
var categoria = "";
var autor = "";
var data = "";


function getyesterday() {
    var today = new Date(); // Obtém a data atual
    today.setDate(today.getDate() - 1); // Subtrai um dia da data atual
    return today;
}

var yesterday = getyesterday();

//função de plotar
function plotar() {

    title = document.getElementById("titulo").value;
    description = document.getElementById("resumo").value;
    categoria = document.getElementById("categoria").value;
    autor = document.getElementById("autortitle").value;
    data = document.getElementById("data").value;

    let newD = new Date(data);

    if (yesterday < newD) {
        //verifica se os inputs estão vazios
        if (data == "" || autor == "" || description == "" || title == "" || categoria == "Categorias..." || categoria == "") {
            document.getElementById("errorMsg").innerHTML = "Campo(s) em branco! Error";
            //se não for vazio, realiza o plot do artigo
        } else {

            //verificação de contador para editar
            if (counter != -1) {
                //substituir valores
                global[counter] = [
                    title,
                    description,
                    categoria,
                    autor,
                    data
                ];
                
                counter = -1;

                //retorna contador
                atualizarlista();
            } else {

                document.getElementById("errorMsg").innerHTML = "";

                info.push(title);
                info.push(description);
                info.push(categoria);
                info.push(autor);
                info.push(data);


                global.push(info);

                //atualiza
                atualizarlista()
            }
        }

        var itens = [];
    } else {
        document.getElementById("errorMsg").innerHTML = "Data inválida! Coloque uma atual.";
    }
}



//função de inserir no to-do
function atualizarlista() {

    var listaHtml = "";

    //valor constante
    const lista = document.getElementById("tabela");
    const editado = document.getElementById("edited");

    for (let i = 0; i < global.length; i++) {

        itens = global[i];

        listaHtml += `
    <div class="plots">
        <section class="sec_tab">
        <h3 class="title" id="titlep"> Título: ${itens[0]} </h3>
        <p class="p_a" id="resumop"> Resumo: ${itens[1]} </p>
        <p class="p_a" id="catep"> Categoria: ${itens[2]} </p>
        <p class="p_a" id="autorp"> Autor: ${itens[3]} </p>
        <p class="p_a" id="datap"> Data: ${itens[4].split("-").reverse().join("/")} </p>
        </section>
        <section class="sec_tab">
            <p id="edited"></p>
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

    //retorna aos inputs
    document.getElementById("titulo").value = element[0];
    document.getElementById("resumo").value = element[1];
    document.getElementById("categoria").value = element[2];
    document.getElementById("autortitle").value = element[3];
    document.getElementById("data").value = element[4];

    //contador verificação
    counter = position;
}