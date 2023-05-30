//variaveis 
let info = [];
let info2 = [];

//função de plotar
function plotar() {
    let title = document.getElementById("titulo").value;
    let description = document.getElementById("resumo").value;
    let autor = document.getElementById("autortitle").value;
    let data = document.getElementById("data").value;

    info2.push(title);
    info2.push(description);
    info2.push(autor);
    info2.push(data);

    info.push(info2);
    //atualiza
    atualizarlista()
}

var listaHtml = "";


//função de inserir no to-do
function atualizarlista() {
    //valor constante
    const lista = document.getElementById("tabela");

    listaHtml += `
        <div class="plots">
            <section class="sec_tab">
            <h3 class="title"> Título: ${info2[0]} </h3>
            <p class="p_a"> Resumo: ${info2[1]} </p>
            <p class="p_a"> Autor: ${info2[2]} </p>
            <p class="p_a"> Data: ${info2[3]} </p>
            </section>
            <section class="sec_tab">
                <button id="btn_tab">excloi</button>
            </section>
        </div>
        `
    console.log(listaHtml);
    //receber a alteração
    lista.innerHTML = listaHtml;
    //zera o valor do array
    info2 = [];

    document.getElementById("titulo").value = "";
    document.getElementById("resumo").value = "";
    document.getElementById("autortitle").value = "";
    document.getElementById("data").value = "";
}



