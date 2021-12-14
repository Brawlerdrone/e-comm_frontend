let hero_slide = document.querySelector('#hero-slide')

let hero_slide_items = hero_slide.querySelectorAll('.slide')

let hero_slide_index = 0

let hero_slide_play = true

let hero_slide_control_items = hero_slide.querySelectorAll('.slide-control-item')

let slide_next = hero_slide.querySelector('.slide-next')

let slide_prev = hero_slide.querySelector('.slide-prev')
// ***********PRODUCT SLIDER ********/
showSlide = (index) => {
    hero_slide.querySelector('.slide.active').classList.remove('active')
    hero_slide.querySelector('.slide-control-item.active').classList.remove('active')
    hero_slide_control_items[index].classList.add('active')
    hero_slide_items[index] .classList.add('active')
}

slide_next.addEventListener('click', () => nextSlide())
slide_prev.addEventListener('click', () => prevSlide())

hero_slide_control_items.forEach((item,index) => {
    item.addEventListener('click', () => showSlide(index))
})
hero_slide.addEventListener('mouseover', () => hero_slide_play = false )

hero_slide.addEventListener('mouseleave', () => hero_slide_play = true );
nextSlide = () => {
    hero_slide_index = hero_slide_index + 1 === hero_slide_items.length ? 0 : hero_slide_index + 1

    showSlide(hero_slide_index)
}

/*prevSlide = () => {
    hero_slide_index = hero_slide_index - 1 < 0 ? hero_slide_items.length - 1 : hero_slide_index - 1
    showSlide(hero_slide_index)
}*/

/*setInterval(() => {
    if (!hero_slide_play) return
    nextSlide()
}, 5000);*/

prevSlide = () => {
    hero_slide_index = hero_slide_index - 1 < 0 ? hero_slide_items.length - 1 : hero_slide_index - 1
    showSlide(hero_slide_index)

    
}
setTimeout(() => hero_slide_items[0].classList.add('active'), 20);


 setInterval(() => {
     if (!hero_slide_play) return
     nextSlide()
 }, 5000);