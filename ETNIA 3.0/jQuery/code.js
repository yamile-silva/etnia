function getInputValue(){
  // Selecting the input element and get its value 
  var inputVal = document.getElementById("myInput").value;

  var inputPass = document.getElementById("password").value;

  // Displaying the value
  //alert(inputVal);
  if(inputPass==""||inputVal==""){
    alert("Por favor ingrese todos los campos");
  }else{
    switch(inputVal.charAt(inputVal)){
      case "a":
      case "A":
        windowObjectReference = window.open("memAdmi.html"); 
        break;
      case "b":
      case "B":
        windowObjectReference = window.open("Camarero.html"); 
        break;
      case "c":
      case "C":
        windowObjectReference = window.open("Cocina.html");
        break;
      case "d":
      case "D":
            windowObjectReference = window.open("Bartender.html");
            break;
      default: alert("Codigo no valido");
    }
  }
}