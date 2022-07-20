



nome.addEventListener('keyup', () => {
 if(nome.value.length <= 2){
   labelNome.setAttribute('style', 'color: red')
   labelNome.innerHTML = 'Nome *Insira no minimmo 3 caracteres'
   nome.setAttribute('style', 'border-color: red')
  validNome = false
 } else {
   labelNome.setAttribute('style', 'color: green')
   labelNome.innerHTML = 'Nome'
   nome.setAttribute('style', 'border-color: green')
   validNome = true
 }
})

usuario.addEventListener('keyup', () => {
 if(usuario.value.length <= 2){
   labelUsuario.setAttribute('style', 'color: red')
   labelUsuario.innerHTML = 'Usuario *Insira no minimmo 3 caracteres'
   usuario.setAttribute('style', 'border-color: red')
   validUsuario = false
 } else {
   labelUsuario.setAttribute('style', 'color: green')
   labelUsuario.innerHTML = 'Usuario'
   usuario.setAttribute('style', 'border-color: green')
   validUsuario = true
 }
})

password.addEventListener('keyup', () => {
 if(password.value.length <= 4){
   labelpassword.setAttribute('style', 'color: red')
   labelpassword.innerHTML = 'Senha *Insira no minimmo 5 caracteres'
   password.setAttribute('style', 'border-color: red')
   validpassoword = false
 } else {
   labelpassword.setAttribute('style', 'color: green')
   labelpassword.innerHTML = 'Senha'
   password.setAttribute('style', 'border-color: green')
   validpassoword= true
 }
})

 confirmpassword.addEventListener('keyup', () => {
 if(password.value != confirmpassword.value){
   labelconpassconfirm.setAttribute('style', 'color: red')
   labelconpassconfirm.innerHTML = 'Confirme sua senha *Insira no minimmo 5 caracteres'
   confirmpassword.setAttribute('style', 'border-color: red')
   validpasswordConfirm = false
 } else {
   labelconpassconfirm.setAttribute('style', 'color: green')
   labelconpassconfirm.innerHTML = 'confirme sua senha'
   confirmpassword.setAttribute('style', 'border-color: green')
   validpasswordConfirm = true
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


  if(validNome && validUsuario && validpassoword && validpasswordConfirm){

    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: password.value
    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))

setTimeout(()=> {
  window.location.href='index.html'

}, 3000)

    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}
