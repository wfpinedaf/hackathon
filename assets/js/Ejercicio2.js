var items = []
let ejecutador = document.querySelector('#btnxd')
ejecutador.addEventListener('click', function(e){
    e.preventDefault()
    value = document.querySelector('#InputEx2').value
    items.push(value)
    console.log(items)

    console.log(items)
MaxNumber = Math.max(...items)
alert(`El numero Mayo es ${MaxNumber} y nuestro array es [${items}]`)

    return false
})


// function guardar(){
    

// }


// let datos = document.querySelector('#InputEx2')
// let btn2 = document.querySelector('#btnxd')
// btn2.addEventListener('click', function(e){
 
// let arrayx = [datos.value]
// console.log(arrayx)

// MaxNumber = Math.max(...arrayx)
// console.log(MaxNumber)
// })