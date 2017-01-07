$(document).ready(()=>{
    //valido que el la repeticion el email este escrita correctamente
    $("#regConfirmar").click(()=>{
        if($("#password").val() == $("#passwordrepit").val()){
            return true;
        }else{
            alert("Las contraseñas no coinciden");
            return false;  
        }     
    });  
   //alert("probando si anda el js"); 
});