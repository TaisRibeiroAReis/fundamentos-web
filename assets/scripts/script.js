let nome = window.document.getElementById('nome')

function mostraValor(){
const limite = 30
let restante = nome.value.length
let vr = window.document.getElementById('vr') /*valor restante*/

if(restante < 30){
  /*  vr.innerHTML = "ainda faltam"+ limite-restante+"caracteres restantes"*/
  vr.innerHTML = `Ainda faltam ${limite - restante} caracteres restantes` /*sempre usar o simbolo $ */
}
}