

////////////////////////////////////////
/////////// Zona ejercicio 1 ///////////
////////////////////////////////////////

var arry = ['yunior.developer@hotmail.com', 'miguel@mrbug.es', 'imanol@mercadona.com'];

function ejercicio01(email){
    for (var i = 0; i < arry.length; i++) {
        if (arry[i] === email) {
            console.log(true)
            break;
        } else {
            console.log(false)
        }
    }
    console.log(email)
}


////////////////////////////////////////
//////// Final zona ejercicio 1 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 2 ///////////
////////////////////////////////////////


function ejercicio02(email){
    var buscaM = email.split('');
    var count = 0;

    for(var indi = 0; indi < buscaM.length; indi++) {
        if (buscaM[indi].toLowerCase() === 'm') {
            count++;
        }
    }

    if ( count === 0){
        return 'El correo ' + email + 
        ' tiene ' + email.length + 
        ' caracteres y en mayúsculas se quedaría así ' + email.toUpperCase() +
         ' Además no contiene letras M '
    }else{

        return 'El correo ' + email + 
        ' tiene ' + email.length + 
        ' caracteres y en mayúsculas se quedaría así ' + email.toUpperCase() +
         ' Además contiene ' + count + ' letras M '
    }
}



////////////////////////////////////////
//////// Final zona ejercicio 2 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 3 ///////////
////////////////////////////////////////


function ejercicio03(email){

    var idx = email.lastIndexOf('@');
    var dominio = email.substring(idx+1);
    var mail = email.substring(0, idx);
    var cuantosNumeros = cuentaNumeros(mail);
    

    var result = "El correo " + email + " pertenece al dominio " + dominio + " y tiene " + mail.length + " caracteres sin contar el dominio ni el @.";
    if (cuantosNumeros === 0) {
        result += "Además, el correo no contiene ningún número";
    } else if (cuantosNumeros === 1) {
        result += "Además, el correo contiene un único número";
    } else {
        result += "Además, el correo contiene " + cuantosNumeros + " números";
    }
    return result;

    function cuentaNumeros(frase) {

        var counter = 0;
        for (let i = 0; i < mail.length; i++) {
            const letra = mail[i];
            if ("0123456789".includes(letra)) counter++
        }
        return counter;
    }   
}



////////////////////////////////////////
//////// Final zona ejercicio 3 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 4 ///////////
////////////////////////////////////////


function ejercicio04(user){
    if (user.nombre.length <= 0 ||  !parseInt(user.edad) || user.correo.length <= 0) {
        return "El usuario no es valido";
    }
    var result = "El usuario " + user.nombre + " ";
    if (parseInt(user.edad) >= 18) {
        result += "es mayor de edad.";
        result += "Por lo tanto, le he creado el usuario con el correo " + user.correo;
    } else {
        result += "no es mayor de edad";
    }
    return result;
}



////////////////////////////////////////
//////// Final zona ejercicio 4 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 5 ///////////
////////////////////////////////////////


function ejercicio05(user){
    if (user.nombre.length <= 0 ||  !parseInt(user.edad) || user.correo.length <= 0) {
        return "El usuario no es valido";
    }
    if (user.nombre.toLowerCase() === 'yunior' && parseInt(user.edad) === 24 && user.correo.toLowerCase() === 'yunior@getinko.com') {
        return "La persona introducida es Yunior";
    } else if (user.nombre.toLowerCase() != 'yunior' && parseInt(user.edad) != 24 && user.correo.toLowerCase() != 'yunior@getinko.com') {
        return "La persona introducida no es Yunior";
    } else {
        if (user.nombre.toLowerCase() === 'yunior') {
            return "La persona introducida podría ser Yunior. Ya que tiene el mismo nombre";
        }
        if (parseInt(user.edad) === 24) {
            return "La persona introducida podría ser Yunior. Ya que tiene la misma edad";
        }
        if (user.correo.toLowerCase() === 'yunior@getinko.com') {
            return "La persona introducida podría ser Yunior. Ya que tiene el mismo correo";
        }
    }
}



////////////////////////////////////////
//////// Final zona ejercicio 5 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 6 ///////////
////////////////////////////////////////


function ejercicio06(user){

    var cadena = user.nombre;
    var mail = user.correo;

    return (user.nombre.length < 5 || user.nombre.length > 60);

    if (validaSoloTexto() && validaCorreoElectronico() == false ){  

        function validaSoloTexto(cadena){
            var patronText = /^[a-zA-Z\s]*$/;
            if(!cadena.search(patronText))
            return true;
            else
            return false;
        }
        return (user.correo.length < 7 || user.correo.length > 60);
        
        function validaCorreoElectronico(mail){
            var patronMail = /^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;
            if(!mail.search(patronMail))
            return true;
            else
            return false;
        }
    }
}



////////////////////////////////////////
//////// Final zona ejercicio 6 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 7 ///////////
////////////////////////////////////////


function ejercicio07(users){
    console.log(users);
}



////////////////////////////////////////
//////// Final zona ejercicio 7 ////////
////////////////////////////////////////
