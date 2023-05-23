let todo = [];
let i = 0;


function plotar() {

    let titulo = document.getElementById('titulo').value;
    let resumo = document.getElementById('resumo').value;
    let autor = document.getElementById('autortitle').value;
    let data = document.getElementById('data').value;

    //colocando no array
    todo.push(titulo);
    todo.push(resumo);
    todo.push(autor);
    todo.push(data);

    //apagando o conteudo do input

    document.getElementById('titulo').innerHTML = '';
    document.getElementById('resumo').innerHTML = '';
    document.getElementById('autortitle').innerHTML = '';
    document.getElementById('data').innerHTML = '';

    let plot1 = '';
    let plot2 = '';
    let plot3 = '';
    let plot4 = '';

    plot1 = `<h3> título: ${todo[0]} </h3>`;
    plot2 = `<p> resumo: ${todo[1]} <p>`;
    plot3 = `<p> autor: ${todo[2]} <p>`;
    plot4 = `<p> data: ${todo[3]} <p>`;


//inserir no html
document.getElementById("tabela").innerHTML = plot1 + plot2 + plot3 + plot4;
}

function editar() {
    todo.pop();
    todo.pop();
    todo.pop();
    todo.pop();
}