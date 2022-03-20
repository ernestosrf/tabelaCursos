var Nodejs = { nome: "Curso de Node.js", modulo: 11, aula: 176};
var PHP = { nome: "Curso de PHP", modulo: 7, aula: 1};
var Laravel = { nome: "Curso de Laravel", modulo: 4, aula: 1};

var cursos = [Nodejs, PHP, Laravel];

function exibeCursosNaTela(curso) {
    var elemento = "";
    for (var i = 0; i < curso.length; i++) {
      elemento += "<tr><td>" + curso[i].nome + "</td>";
      elemento += "<td>" + curso[i].modulo + "</td>";
      elemento += "<td>" + curso[i].aula + "</td>";
      elemento += "<td><button onClick='adicionarModulo(" + i + ")'>Módulo</button></td>";
      elemento += "<td><button onClick='adicionarAula(" + i + ")'>Aula</button></td>";
      elemento += "</tr>";
    }
    var tabelaCursos = document.getElementById("tabelaCursos");
  tabelaCursos.innerHTML = elemento;
}
exibeCursosNaTela(cursos);

function adicionarModulo(i) {
    var curso = cursos[i];
    curso.modulo++;
    if(cursos[i] != cursos[0]){
    curso.aula = 1;
    }
    exibeCursosNaTela(cursos);
  }
  
  function adicionarAula(i) {
    var curso = cursos[i];
    curso.aula++;
    exibeCursosNaTela(cursos);
  }
