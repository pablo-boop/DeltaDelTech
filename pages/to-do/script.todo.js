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

    if (data == "" || autor == "" || description == "" || title == "" || categoria == "Categorias...") {
        document.getElementById("errorMsg").innerHTML = "Campo(s) em branco! Error";
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
//var aux = [];

//função de inserir no to-do
function atualizarlista() {
    var listaHtml = "";
    //valor constante
    const lista = document.getElementById("tabela");

    /*for (let p = 0; p < info.length; p++) {
        aux.push(info[p]);
    }*/

    for (let i = 0; i < global.length; i++) {
        listaHtml += `
    <div class="plots">
        <section class="sec_tab">
        <h3 class="title"> Título: ${info[0]} </h3>
        <p class="p_a"> Resumo: ${info[1]} </p>
        <p class="p_a"> Categoria: ${info[2]} </p>
        <p class="p_a"> Autor: ${info[3]} </p>
        <p class="p_a"> Data: ${info[4]} </p>
        </section>
        <section class="sec_tab">
            <button id="btn_tab" onclick="antiplot(${i})">excloi</button>
        </section>
    </div>
    `
    }




    //receber a alteração
    lista.innerHTML = listaHtml;
    //zera o valor do array
    info = [];


    document.getElementById("titulo").value = "";
    document.getElementById("resumo").value = "";
    document.getElementById("categoria").value = "Categoria...";
    document.getElementById("autortitle").value = "";
    document.getElementById("data").value = "";



}




//excloi..
function antiplot(position) {
    global.splice(position, 1);
    atualizarlista();
}


