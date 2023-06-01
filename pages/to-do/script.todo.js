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
    var novadata = data2.reverse().join("/");

    if (data == "" || autor == "" || description == "" || title == "" || categoria == "Categorias..." || categoria == "") {
        document.getElementById("errorMsg").innerHTML = "Campo(s) em branco! Error";
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
        console.log(itens);
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
            <button id="btn_tab" onclick="antiplot(${i})">excloi</button>
        </section>
    </div>
    `
        info = [];
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


