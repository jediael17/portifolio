const btn = document.querySelectorAll('.acordeon .acordeon__btn')

btn.forEach((acordeon__btn) => {
    acordeon__btn.addEventListener('click', (e) => {
        const acordeon = acordeon__btn.parentElement
        const isOpen = acordeon.classList.contains('open')
        if(isOpen){
            acordeon.classList.remove('open')
            // acordeon.classList = Array.of(acordeon.classList).filter(className => className !== 'open' )
        }else{
            acordeon.classList.add('open')
        }
    })
})

// const btn = document.querySelector('.acordeon__btn')
// btn.addEventListener('click', () => {
//     const acord = document.querySelector('.acordeon')
//     acord.classList.toggle('open')
// })