var Nodejs = { nome: "Curso de Node.js", modulo: 11, aula: 176, id:{aula:'nodeAula', modulo:'nodeModulo'}};
var PHP = { nome: "Curso de PHP", modulo: 7, aula: 1, id:{aula:'phpAula', modulo:'phpModulo'}};
var Laravel = { nome: "Curso de Laravel", modulo: 4, aula: 1, id:{aula:'laravelAula', modulo:'laravelModulo'}};

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
loadCursos();

exibeCursosNaTela(cursos);


function loadCursos(){

  cursos.forEach((item, index) => {
    item.modulo = getData(item.id.modulo) != null ? getData(item.id.modulo): 0;       //OPERADOR TERNARIO: condicao ? valorSeTrue : valorSeFalse;
    item.aula = getData(item.id.aula) != null ? getData(item.id.aula) : 0;            //Na primeira vez os valores vao ser null ai eu checo e coloco 0;
  })

}

function getData(name){
  return localStorage.getItem(name)
}

function saveData(name, value){
  localStorage.setItem(name, value);
}

function adicionarModulo(i) {
    var curso = cursos[i];
    
    curso.modulo++;
    saveData(curso.id.modulo, curso.modulo);
    if(cursos[i] != cursos[0]){
    curso.aula = 1;
    saveData(curso.id.aula, curso.aula);
    }
    exibeCursosNaTela(cursos);
 }
  
  function adicionarAula(i) {
    var curso = cursos[i];
    curso.aula++;
    saveData(curso.id.aula, curso.aula);
    exibeCursosNaTela(cursos);
  }


  


