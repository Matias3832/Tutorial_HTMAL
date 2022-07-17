$(document).ready(function(){
    /** ############# No prestar atención solo es para probar cosas #############*/
    $( "#BtnProbar" ).click(function() {
        onPressBtn();
    });

    function obternerValor1Str(){
        return $("#InputValue1").val();
    }

    function obternerValor1Num(){
        return obternerValor1Str() * 1;
    }

    function obternerValor2Num(){
        return obternerValor2Str() * 1;
    }

    function obternerValor2Str(){
        return $("#InputValue2").val();
    }

    function obternerBooleano(){
        return $('#' + "InputBool").is(":checked")
    }

    function mostrarEnPagina(texto){
        $('#show-content').html("<b> "+ texto + " </b>");
    }

    /** ####################DEFINIR A PARTIR DE ACA############################ */


    function onPressBtn(){
        let valor1 = obternerValor1Num();
        let valor2 = obternerValor2Num();
        let booleano = obternerBooleano()

        mi_funcion(valor1, valor2, booleano);
    }

    function mi_funcion(primerDato, segundoDato, datoBooleano){
        let textoSalida = clave(primerDato);
        mostrarEnPagina(textoSalida);
    }

    function credencial(nombre, apellido, corto){
        alert("cuidado voy a mostrar tu nombre");
        if (corto){
            return apellido;    
        }
        else {
            return apellido + " " + nombre;
        }
    }

    function meConviene(pulgadas, memoria) {
        return cuantoCuesta(pulgadas, memoria) <= 6000 && pulgadas >= 32 && memoria >=8 ;
    }

    function cuantoCuesta(pulgada, gb) {
        console.log(pulgada * 60 + gb * 200 + 1000);
        return (pulgada * 60 + gb * 200 + 1000);
    }

    function factorial(numero){
        if (numero === 1){
            return 1;
        }
        return numero * factorial(numero-1);
    }

    function imc(peso, altura){
        return (peso / (altura * altura));
    }

    function estoyGordo(peso, altura) {
        if (imc(peso, altura) > 26) {
            return  "estas gordo";
        }
        else {
            return "segui asi";
        }
    }
    
    function fibonachi(numero) {
        if (numero === 0) {
            return 0 ;
        }

        if (numero === 1) {
            return 1;
        }
        return fibonachi(numero-1) + fibonachi(numero-2) ;
    }
    
    function clave(hasta) {
        if (hasta === 0) {
            return "0" ;
        }
        return fibonachi(hasta) + clave(hasta-1) ;
    }




});
