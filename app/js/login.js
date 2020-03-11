$("#botaoEntrar").click(function(){

  var email = $("#inputEmail").val();
  var pass = $("#inputPassword").val();
  if(email == "admin@admin" && pass == "admin"){      
    console.log('entrou');
    window.location.href = "home.html";
  }else{
    alert('Usuario ou senha inválidos');
  }
});