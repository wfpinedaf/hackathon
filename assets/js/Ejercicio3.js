

let btnfinal = document.querySelector('#btnxd')
btnfinal.addEventListener('click', function(e){
    e.preventDefault()
    let inputx = document.querySelector('#InputEx2').value
    console.log(inputx)
    let text = inputx.split(" ")
    alert(`Asi nos quedaria organizado= ${text.sort()}`)
    console.log(text.sort())
})