// Escribe una función que reciba una cadena de texto como parámetro y verifique si
// cumple con los siguientes criterios: 
// debe tener al menos 8 caracteres, contener al
// menos una letra mayúscula, una letra minúscula y un número.
// NO ESTA PERMITIDO USAR EXPRESIONES REGULARES

let InputEjercicio1 = document.querySelector("#InputEx1")
let btnSubmit = document.querySelector('#btnxd')


btnSubmit.addEventListener('click', function(e){
    let valorInput = InputEjercicio1.value
    let upper = 0, lower = 0, number = 0
    
    for (var i = 0; i < valorInput.length; i++)
        {
          if (valorInput[i] >= "A" && valorInput[i] <= "Z") upper++;
          else if (valorInput[i] >= "a" && valorInput[i] <= "z") lower++;
          else if (valorInput[i] >= "0" && valorInput[i] <= "9") number++; 
        }

    if (valorInput.length > 7 && upper >= 1 && lower >= 1 && number >= 1 ) {
        alert('Cumples con todos los requisitos')
    } else{
        alert(`Debe tener al menos 8 caracteres, contener al menos una letra mayúscula, una letra minúscula y un número. Usted Ingreso ${upper} mayusculas, ${lower} minusculas, ${number} numeros y el ancho total es ${valorInput.length} `)
    }
})