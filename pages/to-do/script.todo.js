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

    if (data == "" || autor == "" || description == "" || title == "" || categoria == "Categorias..." || categoria == "") {
        document.getElementById("errorMsg").innerHTML = "Campo(s) em branco! Error";
    } else {
        document.getElementById("errorMsg").innerHTML = "";
        info.push(title);
        info.push(description);
        info.push(categoria);
        info.push(autor);
        info.push(data(day, month, year));


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
        let aux = [];
         for (let p = 0; p < info.length; p++) {
            aux.push(info[p]);
        }
    listaHtml += `
    <div class="plots">
        <section class="sec_tab">
        <h3 class="title"> Título: ${aux[0]} </h3>
        <p class="p_a"> Resumo: ${aux[1]} </p>
        <p class="p_a"> Categoria: ${aux[2]} </p>
        <p class="p_a"> Autor: ${aux[3]} </p>
        <p class="p_a"> Data: ${aux[4]} </p>
        </section>
        <section class="sec_tab">
            <button id="btn_tab" onclick="antiplot(${i})">excloi</button>
        </section>
    </div>
    `
        info = [];
        aux = [];
    }

    //receber a alteração
    lista.innerHTML = listaHtml;
    //zera o valor do array


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


