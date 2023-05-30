//variaveis 
let info = [];
let info2 = [];

//funções
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

    console.log(title);
    console.log(description);
    console.log(autor);
    console.log(data);
    console.log(info);

    atualizarlista()
}

function atualizarlista() {
    for (let i = 0; i < info.length; i++) {
        for (let i = 0; i < info2.length; i++) {
            document.getElementById("tabela").innerHTML = `
                <p> ${info2[i]} </p>
            `
        }
    }
    info2 = [];
}