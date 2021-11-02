function validar(formulario) {

    //Expresion regular del Email
    
    var expReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;;
      if(!expReg.test(formulario.email.value)){
        document.getElementById("errorEmail").innerText = "Ingrese un correo valido";
        formulario.email.focus();
        return false;
    }
    else{
      var VCorreo = localStorage.getItem("Correo");
    }
    
    //Expresion de la constraseña
    
    if (formulario.contrasena.value.trim().length < 7) {
      document.getElementById("errorContrasena").innerText = "Debe tener al menos 7 caracteres";
      formulario.contrasena.focus();
      return false;
    }

    else{
      var VContrasena = localStorage.getItem("Contraseña");
    }

    //Expresion de validacion para ingreso

    if (formulario.email.value == VCorreo && formulario.contrasena.value == VContrasena){
      ingreso()
    }
    else{
      alert("usuario no registrado o datos no correctos")
    }
  }
  
  //Funcion abrir pagina

  function ingreso() {
    alert("¡Bienvenido!")
    window.open("A4.html")  
  }