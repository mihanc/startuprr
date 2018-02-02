var input = document.querySelector('.input')
var footer = document.querySelector('.skills__item-list')


if(input){
    input.addEventListener('change', function(){
        footer.style.setProperty('$accent', input.value)
})}
