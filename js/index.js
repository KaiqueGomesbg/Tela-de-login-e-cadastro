

var nome = document.querySelector("#name").focus()
var labelNome = document.querySelector("#labelname")
let validNome = false

let usuario = document.querySelector('#suario')
let labelusuario = documet.querySelector('#labelusuario')


let password = document.querySelector('#password')
let labelpassword = documet.querySelector('#labelpassword')

let confirmpassword = document.querySelector('#confirmpassword')
let labelconpassconfirm = documet.querySelector('#labelconpassconfirm')



nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})





function showPassLogin() { // show pass input password Login
    var showPassLogin = document.getElementById("password");
    if (showPassLogin.type == "password") {
        showPassLogin.type = "text";
    } else {
        showPassLogin.type = "password";
    }
  } 

function showPasscadastro() { // show pass input password  cadastro
    var showPasscadastro = document.getElementById("password");
    if (showPasscadastro.type == "password") {
        showPasscadastro.type = "text";
    } else {
        showPasscadastro.type = "password";
    }
  } 

  function showPassConfirm() {
    var showPassConfirm = document.getElementById("confirmpassword");
    if (showPassConfirm.type == "password") {
        showPassConfirm.type = "text";
    } else {
        showPassConfirm.type = "password";
    }
  } 

  function cadastrar(){

}