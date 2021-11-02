function validar(formulario) {

    //Expresion de el nombre
    
    if (formulario.nombre.value.trim().length < 10) {
        document.getElementById("errorNombre").innerText = "Debe tener al menos 10 caracteres";
        formulario.nombre.focus();
        return false;
      }
    
    
    //Expresion regular del Email
    
    var expReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;;
      if(!expReg.test(formulario.email.value)){
        document.getElementById("errorEmail").innerText = "Ingrese un correo valido";
        formulario.email.focus();
        return false;
    }
    else{
      
      let email1 = formulario.email.value
      localStorage.setItem("Correo",(email1));
    }
        
    //Expresion de la constraseña
    
    if (formulario.contrasena.value.trim().length < 7) {
      document.getElementById("errorContrasena").innerText = "Debe tener al menos 7 caracteres";
      formulario.contrasena.focus();
      return false;
    }
    
    //Expresion de la confirmacion
  
    if (formulario.confirmacion.value != formulario.contrasena.value) {
      document.getElementById("errorConfirmacion").innerText = "La contraseña no coincide";
      formulario.confirmacion.focus();
      return false;
    }
    else{  
      let confirmacion1 = formulario.confirmacion.value
      localStorage.setItem("Contraseña",(confirmacion1));
    }
    
    //Expresion del tipo de usuario
  
    if (formulario.tipo.value == "-1") {
      document.getElementById("errorTipo").innerText = "Este campo es obligatorio";
      return false;
    }

    //Expresion de terminos y condiciones
  
    if (formulario.acepto.checked == false) {
      document.getElementById("errorAcepto").innerText = "Este campo es obligatorio";
      return false;
    }
    else{
      redireccionar()
    }
}
//Función redireccionar
function redireccionar() {
  alert("Registro completado")
  window.open("ingreso.html")  
}
