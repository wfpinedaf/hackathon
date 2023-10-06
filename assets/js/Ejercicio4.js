
let reader = document.querySelector('#btnxd')


reader.addEventListener('click', function(e){
    e.preventDefault()
    let inputx = document.querySelector('#InputEx2').value
    const count = inputx.match(/[aeiou]/gi).length;

    console.log(`Se contaron ${count} Vocales`)
    
})
