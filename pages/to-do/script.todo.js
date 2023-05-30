//variaveis 
let info = [];
let info2 = [];


var title = "";
var description = "";
var autor = "";
var data = "";

//função de plotar
function plotar() {

    title = document.getElementById("titulo").value;
    description = document.getElementById("resumo").value;
    autor = document.getElementById("autortitle").value;
    data = document.getElementById("data").value;

    if(data == "" || autor==""|| description == "" || title == "") {
        document.getElementById("errorMsg").innerHTML = "Campo(s) em branco! Error";    
    } else {
        document.getElementById("errorMsg").innerHTML = "";    
        info2.push(title);
        info2.push(description);
        info2.push(autor);
        info2.push(data);
    
        info.push(info2);
        //atualiza
        atualizarlista()
    }

    
}
var aux = [];

//função de inserir no to-do
function atualizarlista() {
    var listaHtml = "";
    //valor constante
    const lista = document.getElementById("tabela");

    let p = 0;
    while (p < info2.length) {
        aux.push(info2[p]);
        p++
    }    

    for(let i = 0; i < info.length; i++) {
        listaHtml += `
        <div class="plots">
            <section class="sec_tab">
            <h3 class="title"> Título: ${aux[0]} </h3>
            <p class="p_a"> Resumo: ${aux[1]} </p>
            <p class="p_a"> Autor: ${aux[2]} </p>
            <p class="p_a"> Data: ${aux[3]} </p>
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
    info2 = [];


    document.getElementById("titulo").value = "";
    document.getElementById("resumo").value = "";
    document.getElementById("autortitle").value = "";
    document.getElementById("data").value = "";

}

aux = [];



//excloi..
function antiplot(position) {
    info.splice(position, 1);
    atualizarlista();
}


